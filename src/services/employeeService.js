const User = require("../models/user");

const update = async (data) =>{
   try {
    if(data.email || data.password){     // we will return the model as we do not want to update email and password
        console.log("Should not update email or password");
        return;
    }
    const user = User.findByIdAndUpdate(data.id , data , {new : true}).exec();
    return ;

   }catch(err){
    console.log(err);
    return err;

   }
}





module.exports = {
  update
}