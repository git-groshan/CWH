module.exports= reqFilter = (req,res,next)=>{
    console.log("reqFiler is called");
    if(!req.query.age){
        res.send("Please Provide age");
    }
    else if(req.query.age < 18){
        res.send("You can not access age ");
    }
    else{
    next(); // this is mandatory to call next 
    }
}