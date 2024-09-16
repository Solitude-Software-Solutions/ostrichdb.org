+++
archetype = "chapter"
title = "ATOMS"
weight = 2
+++

### What Are Atoms In OstrichDB?
Similiar to querys in SQL, commands in OstrichDB are groupings of tokens dubbed "ATOMS". These ATOMS are given this name for
two reasons:
1. Atoms in our the basic building blocks of the universe as we know it. So why not give this fitting name to the basic building blocks of OstrichDB commands?
2. The OstrichDB parser is specifically designed to parse commands based off of the ATOMS a command is provied.

### A.T.O.M.S
Continuing with talking about the parser. ATOMS is an acronym that stands for:
- A - Action Token
- T - Target Token
- O - Object Token
- M - Modifier Token(s)
- S - Scope Modifier Token

#### Action tokens
Action Tokens are the entry point for all valid OstrichDB Commands. As the name suggests, Action tokens let the parser know what actions
the user wants to perform. There are several action tokens currently implemented in OstrichDB. Some of these include:
- NEW
- FETCH
- RENAME
- ERASE
- SET
Here is an example of an incomplete command with an just action token:
```bash
NEW
```
Remember, the action token is always the first token in a command.

#### Target Tokens
Target Tokens are tokens that specifiy what data object or internal object the user wants to perform an action on. Target tokens are usually the second token in a command. Some examples of target tokens include:
- COLLECTION
- CLUSTER
- RECORD

Here is an example of an incomplete command with just an action and target token:
```bash
NEW COLLECTION
```

#### Object Tokens
Object tokens are tokens that specify what target the user wants to perform an action on. Not all commands will have an object token. Some might have none whereas
others might have multiple. Object tokens are always given by the user. If you name a collection user. The name "user" is the object token.
Here is an example of a complete command with an action, target, and object token:
```bash
NEW COLLECTION users
```
This command is telling OstrichDB to create a new collection(databse) called "users".

#### Modifier Tokens
Modifier tokens can be thought of as optional tokens for some commands but required for others.
Modifier tokens are used to tell the parser specific details about the command the user wants to perform.
Here are some examples of modifier tokens:
- WITHIN
- TO

Here is an example of a complete command with an action, target, object, and `WITHIN` & `TO` modifier tokens:
```bash
RENAME CLUSTER user1 WITHIN COLLECTION users TO user2
```
This command is telling OstrichDB to rename the cluster "user1" within the collection "users" to "user2".

#### Scope Modifier Tokens
Scope modifiers are very special tokens. Technically the `WITHIN` token is a scope modifier token. Scope modifier tokens are used to tell the parser where the command should be executed.
Most commands will not have a scope modifier token. Here is an example of a complete command with an action, target, object, and scope modifier token:
```bash
NEW CLUSTER user1 WITHIN COLLECTION users
```
This command is telling OstrichDB to create a new cluster called "user1" within the collection "users".

--------------------------------------------
To recap, ATOMS are the basic building blocks of OstrichDB commands. They are used to tell the parser what the user wants to do and where they want to do it.