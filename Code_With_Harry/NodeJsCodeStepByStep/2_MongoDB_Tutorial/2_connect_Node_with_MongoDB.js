const {MongoClient}  = require('mongodb');
// const MongiClient  = require('mongodb').MongoClient; // similar as above 

const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url); 

async function getData()
{
    let result = await client.connect(); // returns a promise
    let db = result.db(database);
    let collection = db.collection('products');
    
    let response = await collection.find().toArray();
    console.log(response);
}

getData();