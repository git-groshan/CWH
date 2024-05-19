/*
- Make New file for insert Data
- Import MongoDB connection
- insert single and multiple records
-Interview Question

*/
const dbConnect = require('./3.1_mongoDB');

const insert = async ()=>{
    console.log('Insert Function');
    const db = await dbConnect();
    // console.log(db);//Promise 
    /*
    // single data insertion
    const result = await db.insert(  // return a promise 
        {name:'note -5' , brand:'vivo' , price:'5000', categeory:'mobile'}
    );
    */
    // multiple data insertion 

    const result = await db.insert(  // return a promise 
    [
        {name:'note -5' , brand:'vivo' , price:'5000', categeory:'mobile'},
        {name:'iphone14' , brand:'Apple' , price:'10000', categeory:'mobile'}
    ]
    );

    if(result.acknowledge){
        console.log("data inserted");
    }
}

insert();
