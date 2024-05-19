const {MongoClient}  = require('mongodb');
// const MongiClient  = require('mongodb').MongoClient; // similar as above 

const url = 'mongodb://localhost:27017';
const database = 'Employees'
const client = new MongoClient(url); 

async function dbConnect()
{
    let result = await client.connect(); // returns a promise
    let db = await result.db(database);
    return db.collection('students'); // return a promise 
    
    //let data = await collection.find().toArray();
    //console.log(data);
}
module.exports = dbConnect;

