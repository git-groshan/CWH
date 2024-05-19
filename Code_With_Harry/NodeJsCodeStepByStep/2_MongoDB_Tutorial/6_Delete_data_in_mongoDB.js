const dbConnect = require('./3.1_mongoDB'); // this return a function in which database is Employees and collection is student and function returns the collection 


const deleteData = async ()=>{
    let collection = await dbConnect(); // student collection is returned
    console.warn(`Collection is ${collection}`); 
    let deletedData = await  collection.deleteOne({_id:2});
    console.log("Deleted Data is !!");
    console.log(deleteData); 
    /*
    // To Delete multiple documents 
    let collection = await dbConnect(); // student collection is returned
    console.warn(`Collection is ${collection}`); 
    let deletedData = await  collection.deleteMany({_id:2});
    console.log("Deleted Data is !!");
    console.log(deleteData);
    */
}

deleteData();