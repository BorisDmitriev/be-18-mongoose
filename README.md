# BE-Mongoose-Create-Data

## Task

In this exercise task you will learn how to interact with Mongoose, an ODM (Object Data Modeling) library for MongoDB. You will create a simple database model, store data in the database, and access the data using Mongoose functions.

## What you will do

You will create a simple notebook model where notes can be stored and retrieved. The notes will consist of a title and text.

## Tasks

### Task 1: Create Mongoose Schema

Create a Mongoose schema for the notebook model. The schema should contain the following fields:

-   `title` - the title of the note (type: string)
-   `text` - the text of the note (type: String)

### Task 2: Create a model

Export a Mongoose model for the note model. To do this, use the schema created earlier and name the model `note`.

### Task 3: Save data to the database

Create a seed script that saves multiple notes with different titles and texts to the database. To do this, use the created "Note" model and the Mongoose 'create' function.

### Task 4: Retrieve data from the database

Use the MongoDB shell or the MongoDB compass to check if your data has been successfully written to the database.
