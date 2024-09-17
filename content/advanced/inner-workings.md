+++
archetype = ""
title = "How OstrichDB Works"
weight = 1
+++

### Where to Start?

Lets talk about how OstrichDB works on the backend. OstrichDB is simple in its design and implementation. Although
the codebase may be a bit complex and intimidating at first, the concepts behind it are simple and easy to understand.

OstrichDBs entry point is the `main` procedure in the `main.odin` file. This `main` procedure is handles the initialization
of several subsystems and launch checks. Once these are completed, the `main` procedure will call the `run` procedure from the `engine` package.

```odin
// src/main/main.odin

main :: proc() {
	utils.main() // Initialize the utils module for logging and other utilities
	data.main() // Initialize the data module

	utils.log_runtime_event("OstrichDB Started", "")

	fmt.printfln(utils.ostrich_art)
	version := transmute(string)utils.get_ost_version()
	fmt.printfln("%sVersion: %s%s%s", utils.BOLD, utils.GREEN, version, utils.RESET)


	// Check if the engine has been initialized
	if config.OST_READ_CONFIG_VALUE("ENGINE_INIT") == "true" {
		types.engine.Initialized = true
		utils.log_runtime_event("OstrichDB Engine Initialized", "")
	} else {
		types.engine.Initialized = false
	}

// Run the engine
engine.run()
}
```

The `engine` package is the heart of OstrichDB and its responsible for handling the majority of the databases operations.
The `engine.run` call in the `main` procedure performs its own series of checks and file generations before it itself makes a call to the `OST_START_ENGINE`
procedure. If  `main` is like getting in a car, and `engine.run` is putting the key in the ignition and turning it, then `OST_START_ENGINE` is like
putting the car in drive and accelerating.

```odin
// src/core/engine/engine.odin

run :: proc()  {
    //Check for ostrich.config file
	configFound := config.OST_CHECK_IF_CONFIG_FILE_EXISTS()
	switch (configFound)
	{
	case false:
		fmt.println("Config file not found.\n Generating config file")
		config.OST_CREATE_CONFIG_FILE()
		run()
	case:
		fmt.println("Starting OstrichDB")
		result:= OST_START_ENGINE() //Putting the car in drive
		switch (result)
        {
        case 1:
            fmt.println("OstrichDB Engine started successfully")
            break
        case 0:
        }
	}
}
```

## A Brief Overview of OstrichDB's Authentication System
Now we are cooking with gas. Once the engine has successfully started, OstrichDB's authentication system goes into effect.
As then name states, the authentication system is responsible for authenticating users before allowing them to access data from OstrichDB's command line.
There is a whole checklist of things that this auth system does. Here is a brief rundown:
- If an account already exists
  - Prompt the user to enter their username and check if it exists withing OstrichDB
  - Prompt the user to enter their password. Take that password, hash it, and compare it to the hashed password stored
  - If the username nad passwords match, allow the user to access the command line
- If an account does not exist
  - Prompt the user to create an account
  - Take the username and password, hash the password, and store the username and hashed password
  - Ask the user to relaunch OstrichDB for changes to take effect

For more in dpeth information about the auth system take a look at the source code in [Github](https://github.com/Solitude-Software-Solutions/OstrichDB/blob/main/src/core/engine/auth.odin)



## The OstrichDB Command Parser

Now that we have a basic understanding of how OstrichDB starts up and authenticates users, lets talk about how it handles commnad parsing.
OstrichDB's parser is very simple and heres what it does:
1. It reads the users input from the command line
2. It converts the input into capital letters
4. It splits each word and spaces into a slice of strings
5. The parser then assigns each token index to a specifc dynamic array or map depending on the placeement
   of the token when the user entered it
6. Next it checks that the entered command is complete based off of the Action token(the first token entered)
7. Lastly the parser appends tokens to a command struct and returns it to the engine.

Pretty straightforward right?
Here is the code for the parser in its entirety:
```odin
// src/core/engine/parser.odin

OST_PARSE_COMMAND :: proc(input: string) -> types.Command {
	capitalInput := strings.to_upper(input)
	tokens := strings.split(strings.trim_space(capitalInput), " ")
	cmd := types.Command {
		o_token = make([dynamic]string),
		m_token = make(map[string]string),
		s_token = make(map[string]string),
	}

	if len(tokens) == 0 {
		return cmd
	}

	cmd.a_token = strings.to_upper(tokens[0])

	state := 0
	current_modifier := ""

	for i := 1; i < len(tokens); i += 1 {
		token := strings.to_upper(tokens[i])

		switch state {
		case 0:
			cmd.t_token = token
			state = 1
		case 1:
			if OST_IS_VALID_MODIFIER(token) {
				current_modifier = token
				state = 2
			} else {
				append(&cmd.o_token, tokens[i])
			}
		case 2:
			cmd.m_token[current_modifier] = tokens[i]
			state = 1
		}
	}
	return cmd
}
```

Now that the parser has done its job,  the engine will take the return value from the parser and be passed in to the `OST_EXECUTE_COMMAND` procedure found in
`commands.odin`. As the name suggests, this procedure is responsible for executing the command that the user entered. Tokens are evaluated in
a switch statement that resembles a state machine. The state machine is used to determine the current state of the command and what action to take next.
Here is a snippet of the `OST_EXECUTE_COMMAND` with only one command implemented:
```odin
// src/core/engine/commands.odin

OST_EXECUTE_COMMAND :: proc(cmd: ^types.Command) -> int {
    //Check if the command is complete
	incompleteCommandErr := utils.new_err(
		.INCOMPLETE_COMMAND,
		utils.get_err_msg(.INCOMPLETE_COMMAND),
		#procedure,
	)
	//Check if the command is invalid
	invalidCommandErr := utils.new_err(
		.INVALID_COMMAND,
		utils.get_err_msg(.INVALID_COMMAND),
		#procedure,
	)
	defer delete(cmd.o_token)
	//Evaluate the Action token(first word in a command) given by the user
	switch (cmd.a_token)
	{
	//in the case of the VERSION command do the following
	case const.VERSION:
		utils.log_runtime_event("Used VERSION command", "User requested version information.")
		fmt.printfln(
			"Using OstrichDB Version: %s%s%s",
			utils.BOLD,
			utils.get_ost_version(),
			utils.RESET,
		)
	return 0
}
```

For the sake of not just regurgitating code, I will not go into further details of the `OST_EXECUTE_COMMAND` procedure. If you understand
what is happening above you will most likely be able understand to rest of the procedure. You can find it in the [Github](https://github.com/Solitude-Software-Solutions/OstrichDB/blob/main/src/core/engine/commands.odin)