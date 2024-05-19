/*
#### CURD Operation with mongoose



*/
/*
Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data, enforce data validation, and manage relationships between data. Here's a breakdown of its key features and functionalities:

### Key Features of Mongoose

1. **Schema Definition**:
   - Mongoose allows you to define schemas for your MongoDB collections. A schema defines the structure of the documents within a collection, specifying the fields and their types, default values, validation rules, etc.

   ```javascript
   const mongoose = require('mongoose');
   const Schema = mongoose.Schema;

   const userSchema = new Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     age: Number,
     createdAt: { type: Date, default: Date.now }
   });
   ```

2. **Model Creation**:
   - After defining a schema, you can create a model. A model is a class with which we construct documents. Instances of these models represent documents which can be saved and retrieved from the database.

   ```javascript
   const User = mongoose.model('User', userSchema);
   ```

3. **CRUD Operations**:
   - Mongoose provides an easy-to-use interface to perform Create, Read, Update, and Delete (CRUD) operations on your data.

   ```javascript
   // Create
   const newUser = new User({ name: 'John Doe', email: 'john.doe@example.com' });
   newUser.save();

   // Read
   User.find({ name: 'John Doe' }, (err, users) => {
     console.log(users);
   });

   // Update
   User.updateOne({ name: 'John Doe' }, { age: 30 }, (err, res) => {
     console.log(res);
   });

   // Delete
   User.deleteOne({ name: 'John Doe' }, (err) => {
     if (!err) {
       console.log('User deleted');
     }
   });
   ```

4. **Validation**:
   - Mongoose schemas support validation rules. For instance, you can ensure a field is required, set minimum or maximum values, etc.

   ```javascript
   const productSchema = new Schema({
     name: { type: String, required: true },
     price: { type: Number, min: 0 }
   });
   ```

5. **Middleware**:
   - Mongoose provides middleware (also known as pre and post hooks) for various lifecycle events, such as `save`, `validate`, `remove`, and `update`.

   ```javascript
   userSchema.pre('save', function(next) {
     this.createdAt = Date.now();
     next();
   });
   ```

6. **Population**:
   - Mongoose allows you to reference documents in other collections and populate them to form more complex queries.

   ```javascript
   const postSchema = new Schema({
     title: String,
     author: { type: Schema.Types.ObjectId, ref: 'User' }
   });

   Post.find().populate('author').exec((err, posts) => {
     console.log(posts);
   });
   ```

### Getting Started with Mongoose

To use Mongoose in your Node.js application, you need to install it via npm:

```bash
npm install mongoose
```

Then, connect to your MongoDB database and start using schemas and models:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
```

### Example Application

Here's a simple example to illustrate how Mongoose can be used in a Node.js application:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

const newUser = new User({ name: 'Alice', email: 'alice@example.com', age: 25 });
newUser.save((err) => {
  if (err) return console.error(err);
  console.log('User saved successfully!');
});

User.find((err, users) => {
  if (err) return console.error(err);
  console.log(users);
});
```

Mongoose simplifies working with MongoDB in Node.js by providing a rich set of features for schema definition, data validation, query building, and more, making it an essential tool for Node.js developers working with MongoDB.
*/
// Update schema

const mongoose = require('mongoose');



    // connect monggose  with database 
mongoose.connect('mongodb://localhost:27017/Employees');

    // create schema 
    /*
    const productsSchema = new mongoose.Schema(
        {
        name:String,
        price:Number,
        brand:String,
        category:String,
        countryOfOrigin:String
    }
);
*/
const productsSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        brand:String,
        category:String
    }
);

const saveInDB = async () =>{
    // create model which is like collection 
    // const Product = mongoose.Model('products' , productsSchema);
    const productsModel = mongoose.model('products' , productsSchema); // Don't use mongoose.model() --> It will thorw an error.

    // create document 
    let data = new productsModel({name:"max 131" , price:200 , brand:"max" , category:"local"});
    // inserting document in DB
    await data.save(); // No longer accept a callback 
    
    
}

// saveInDB();

const updateInDB = async ()=>{
   let  Product = mongoose.model('products' , productsSchema); // don't user mongoose.Model() --> It will throw an error
    let data = await Product.updateOne({name:"Iphone 14"},{$set:{name:"Iphone 15" , price:199999}});

}

updateInDB();

const deleteInDB = async ()=>{
    let prod = mongoose.model('products' , productsSchema);
    let data = await prod.deleteOne({name:'max 131'});
    console.log(data);
}
deleteInDB();


const findInDB = async ()=>{
    let prods = mongoose.model('products' , productsSchema);
    let data = await prods.find({name:"Iphone 15"});
    console.log(data);
}
findInDB();

/*
The error you encountered, `TypeError: 2nd argument to Model constructor must be a POJO or string`, typically occurs when you are trying to create a model in Mongoose, but the arguments provided to the `mongoose.model` function are not as expected. 

In Mongoose, the `model` function requires two main arguments:
1. The name of the model (a string).
2. The schema definition for the model (an instance of `mongoose.Schema`).

Here's a basic example to clarify the correct usage:

```javascript
const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

// Now you can create instances of User
const newUser = new User({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });
newUser.save((err) => {
  if (err) {
    console.error('Error saving user:', err);
  } else {
    console.log('User saved successfully!');
  }
});
```

### Common Causes and Solutions

1. **Incorrect Schema Definition**:
   - Ensure that the schema is correctly defined using `mongoose.Schema`.

   ```javascript
   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     age: Number
   });
   ```

2. **Incorrect Model Creation**:
   - Ensure that you are passing the correct arguments to `mongoose.model`.

   ```javascript
   const User = mongoose.model('User', userSchema);
   ```

3. **Incorrect Import Statements**:
   - Ensure that you are correctly importing Mongoose and any required modules.

   ```javascript
   const mongoose = require('mongoose');
   ```

### Troubleshooting Steps

1. **Check the Schema**:
   - Verify that the schema is properly defined and is an instance of `mongoose.Schema`.

   ```javascript
   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     age: Number
   });
   ```

2. **Check the Model Definition**:
   - Ensure the model is created with a proper name and schema.

   ```javascript
   const User = mongoose.model('User', userSchema);
   ```

3. **Console Logging**:
   - Add `console.log` statements to check the values passed to `mongoose.model`.

   ```javascript
   console.log(typeof userSchema); // Should log 'object'
   const User = mongoose.model('User', userSchema);
   ```

4. **Check Mongoose Version**:
   - Ensure you are using a compatible version of Mongoose. Update Mongoose if necessary.

   ```bash
   npm install mongoose@latest
   ```

### Example Code with Error Handling

Here's a complete example with error handling to help identify the issue:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number
});

console.log(typeof userSchema); // Should log 'object'
const User = mongoose.model('User', userSchema);

const newUser = new User({ name: 'Alice', email: 'alice@example.com', age: 25 });
newUser.save((err) => {
  if (err) {
    console.error('Error saving user:', err);
  } else {
    console.log('User saved successfully!');
  }
});

User.find((err, users) => {
  if (err) {
    console.error('Error finding users:', err);
  } else {
    console.log(users);
  }
});
```

By following these steps and checking your code against these common issues, you should be able to resolve the error and successfully use Mongoose in your Node.js application.
*/