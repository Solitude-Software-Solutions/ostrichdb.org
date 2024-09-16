+++
archetype = "topic"
title = "Learning By Example"
weight = 3
+++



##### In This Section you will learn about OstrichDB's commands by example.

Here are several examples of valid commands in OstrichDB that you can try out.

### Example 1: Creating a new collection
```bash
OST>>> NEW COLLECTION users
```
Note: This will create a new collection called "users".

### Example 2: Fetching a collection
```bash
OST>>> FETCH COLLECTION users
```
Note: Output will be the contents of the "users" collection. This will be empty if no clusters have been added to the collection.


### Example 3: Renaming a collection or cluster
```bash
OST>>> RENAME COLLECTION users TO people

or

RENAME CLUSTER my_cluster WITHIN COLLECTION users TO your_cluster
```
Note: This will rename the collection or cluster to the new name provided.


### Example 4: Erasing a collection
```bash
OST>>> ERASE COLLECTION people
```
Note:This deletes the entire collection file so use with caution.

### Example 5: Adding a cluster to a collection
```bash
OST>>> NEW CLUSTER my_cluster TO COLLECTION people
```

### Example 6: Fetching a specfic cluster
```bash
OST>>> FETCH CLUSTER my_cluster WITHIN COLLECTION people
```
Note: This will return the contents of the "my_cluster" cluster within the "people" collection if any.

### Example 7: Creating a new record
```bash
OST>>> NEW RECORD my_record OF_TYPE bool
```
Note: After exectuting this command you will be prompted to choose a collection and cluster to insert the record into.

### Example 8: Setting data in a record
```bash
OST>>> SET RECORD my_record TO true
```
Note: After exectuting this command you will be prompted to choose a collection and cluster to insert the data into.

### Example 9: Seeing the contents of a all data
```bash
OST>>> TREE
```
Note: This will return the contents of all collections and clusters in the collections directory.

### Example 10: Seeing your past command usage
```bash
OST>>> HISTORY
```

### Example 11: Seeing general help documentation from the command line
```bash
OST>>> HELP
```

### Example 12: Seeing help documentation for a specific token
```bash
OST>>> HELP <name_of_token> //IMPORTANT: If you need help with a specific token use that token i.e. HELP COLLECTION
```

### Example 13: Exiting OstrichDB
```bash
OST>>> EXIT
```

### Example 14: Clearing the screen
```bash
OST>>> CLEAR
```

### Example 15: Seeing the version of OstrichDB you are using
```bash
OST>>> VERSION
```

### Example 16: Logging out of the current OstrichDB session
```bash
OST>>> LOGOUT
```

### Example 17: Entering FOCUS MODE
```bash
OST>>> FOCUS <target> <name_of_target>
```
Note: Focus mode is covered more in depth here: [Focus Mode](/focus-mode)

### Example 18: Exiting FOCUS MODE
```bash
OST>>> UNFOCUS
```
