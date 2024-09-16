+++
archetype = "chapter"
title = "Creating And Working With Records"
weight = 4
+++


### Records!
Now its time to create some records in your cluster. Records are the actual data that you want to store in your cluster. They work and look similar to key-value pairs in other JSON. But there are some key differences that make them unique to OstrichDB

If you rememebr the command for creating cluster you might think it would be `NEW RECORD foo WITHIN CLUSTER bar WITHIN COLLECTION baz`. but thankfully its not that complicated.

To create a record use the following command:
```bash
NEW RECORD my_record OF_TYPE bool
```
This command is telling OstrichDB that we want to create a new record called `my_record` and that it will be of type `bool`. This means that the record will only accept boolean values. If you try to insert a string or number into this record it will fail.

After we execute this command we get a prompt telling use to chose a collection to insert the record into. Choose the "my_collection" collection that you created in the previous chapter.
Next, we are prompted to choose a cluster to insert the record into. Choose the "my_cluster" cluster that you created in the previous chapter.
If you followed the steps correctly and entered the correct information you should see a message that says something like `Record my_record created successfully!`. If you see this message then you have successfully created a record in OstrichDB.

Now lets go back to our collection file and see how things look.
We should see something like this:
```bash
{
    cluster_name :identifier: MY_CLUSTER
    cluster_id :identifier: 445538880462173

    MY_RECORD :BOOL:
},
```
If you see this then you have successfully created a record in OstrichDB. But we still dont have any data! Lets add some data to the record.

To add data to a record after its been created you can use the `SET` action token. Here is an example of how to set data in a record:
```bash
SET RECORD my_record TO true
```
Once again you will be prompted to choose a collection and cluster to insert the data into. Choose the same collection and cluster as before. If you followed the steps correctly you should see a message that says something like `Record my_record updated successfully!`. If you see this message then you have successfully added data to a record in OstrichDB.
Note: Remeber that if you try to insert data that is not of the correct type into a record it will fail.

Now you should have a better understanding of how records work in OstrichDB. In the next chapter we will cover how to query records and get data back from them.

Try creating a few more records and adding data to them.