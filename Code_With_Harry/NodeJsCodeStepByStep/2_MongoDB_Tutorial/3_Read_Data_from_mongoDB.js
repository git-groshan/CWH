/*
- Read Data from mongoDB
- Make file for db connection
- Handle Promise
- Interview Question 
*/


const dbConnect = require('./3.1_mongoDB');

//console.warn(dbConnect);

// handling promises
/*
dbConnect().then((res)=>{
    res.find({name:'nord'}).toArray().then(data)=>{
        consol.console.warn(data);
    } // toArray returns an promise 
});
*/

// another way of handling promises

const main = async ()=>{
    let db = await dbConnect();
    let data = await db.find().toArray();
    console.warn(data);

}
main();
