const express = require('express'); //returns a function
const app = express(); // executing func returned by express
const apiRouter = require("./src/routes/index");

app.use("/api" , apiRouter)
app.get('/' , (req , res)=>{
    res.status(200)
    // res.send("Hello World!") // to check if server is working fine in postman

     res.send({
        success:true ,
        message: "Successfully hitting api" ,
        data: {}
     })   // basic json to hit api in postman

});

app.listen(3000 , ()=>{

//this callback will be executed every time the server starts
    console.log("Server started Successfully")
})