const dbConnect = require('./3.1_mongoDB')


const updateData = async ()=>{
    let collection = await dbConnect(); // eturns student collection from Employee database

    let result = await collection.updateOne(
        {_id:2} ,{$set:{test1:69}}
    );
    console.warn("Data is updated!!");
    console.warn(result);
    /*
    let result = await collection.update(    // update will update all the matching documents in database 
        {_id:2} ,{$set:{test1:69}}
    );
    console.warn("Data is updated!!");
    console.warn(result);
    */
}
updateData();