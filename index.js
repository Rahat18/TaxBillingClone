const mongoose = require('mongoose');
const express = require('express'); //returns a function
const app = express(); // executing func returned by express

const passport = require ('passport');
const bodyParser = require('body-parser');
const apiRouter = require("./src/routes/index");
const User = require("./src/models/user");
const authRouter = require('./src/routes/authRoutes')
require('./src/utils/auth')



const DB = 'mongodb+srv://Rahat18:Rahat_7980@cluster0.jm0tlfb.mongodb.net/TaxBillingClone?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log('Connection Successful');

}).catch((err) => console.log(`Connection Failed`));


app.use(bodyParser.urlencoded({ extended: false}));
app.use("/api" , passport.authenticate('jwt' , {session: false}) , apiRouter);

app.use(function(err , req , res , next){
    res.status(err.status || 500);
    res.json({
        success: false ,
        error: err
    });
});

app.use("/" , authRouter);

// app.get('/' , (req , res)=>{
//     res.status(200)
//     // res.send("Hello World!") // to check if server is working fine in postman

//      res.send({
//         success:true ,
//         message: "Successfully hitting api" ,
//         data: {}
//      })   // basic json to hit api in postman

// });

app.listen(3000 , async()=>{

//this callback will be executed every time the server starts
    console.log("Server started Successfully");
      
    // let user = await User.create({
    //     email:"anjum@xyz.com" ,
    //     password:12345,
    //     username:"ABCD"
    // });
    // console.log(user);
    
})