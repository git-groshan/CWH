/**
 * Q- What is mongoose ?
 * Ans- It is an npm package to connect node Js with mongoDB. It enables schema , model SQL like , can add validation  in node Js
 * 
*Q-  What is Schema ?
Ans- Schema are used to validate fields.

*Q-  What is Model ?
*Ans - Model uses those schemas and connect with mongoDB.

*/

/*
* Q- What is mongoose ?

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

const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/Employees'); // connected will local database names Employee

    // create schema i.e the type of documents which can be inserted and validated 
    const productsSchema = new mongoose.Schema(
        {
            name:String,
            price:Number,
            brand:String,
            category:String
        }
    );

    // create model which connect mongoosed with collection to which schema type of document to be inserted 

    const productsModel = mongoose.model('products' , productsSchema); // product is a collection inside the Employees Database 

    // create docuemnt 
    let newSchema = new productsModel({name:"Iphone 14"});
    let newSchema1 = new productsModel({name:"Iphone 14",price:100000});
    let newSchema2 = new productsModel({name:"Iphone 14",price:100000 , brand:"Apple"});
    let newSchema3 = new productsModel({name:"Iphone 14",price:1000 , brand:"Apple" , category:"flagship"});

    let result = await newSchema.save();
    let result1 = await newSchema1.save();
    let result2 = await newSchema2.save();
    let result3 = await newSchema3.save();
    console.log(result);
    console.log(result1);
    console.log(result2);
    console.log(result3);

}

main();