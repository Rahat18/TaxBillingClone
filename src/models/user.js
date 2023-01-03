const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true ,
        unique: true
    } ,

    password: {
        type : String ,
        required: true
    }

} , { timestamps: true});

 // encrypting password
  //pre-save is a trigger that gets a function and executes it before a user object is saved
  userSchema.pre('save' , async function encryptPassword(next){            // fetching user's password in encryptPassword() and hashing it 10 times
    const user = this;         //current object 
    const hash =await bcrypt.hash(this.password , 10);    // hash of the password of the user 
    this.password = hash;
    next();         //callback to next middleware or function
});
 
// validating password for login
userSchema.methods.isValidPassword = async function checkValidity(password){
    const user = this;
    const compare = await bcrypt.compare(password , user.password);
    return compare;
}


const User = mongoose.model('User' , userSchema);

module.exports = User;