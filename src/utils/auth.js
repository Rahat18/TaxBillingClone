const { token } = require('morgan');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

// signup strategy available on paasport npm
passport.use('signup' , new localStrategy(
    {
    usernameField: 'email' ,
    passwordField: 'password'
    },
async (email , password ,done)=>{
    try{
        const user = await User.create({email , password});
        return done(null , user);
    } catch(err){
        console.log(err);
        done(err);
    }

}
));
 
// login strategy available on passport npm
passport.use('login' , new localStrategy(
    {
        usernameField: 'email' ,
        passwordField: 'password'

    },
    async(email , password , done) =>{
        try{ 
            const user = await User.findOne({email});
            if(!user){
                return done(null , false , {message: 'User not found'});
            }
            const validate = await user.isValidPassword(password);
            if(!validate){
                return done(null , false , {message: 'Wrong password'});
            }
            return done (null , user , {message: 'Logged in Successfully'});
        }
        catch(err){
            console.log(err);
            return done(err);
        }
    }
));


passport.use(new JWTStrategy(
    {
       secretOrKey:'TOP_SECRET' ,
       jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
    }  ,
    async (token , done) => {
        try {
            return done(null , token.user);

        }
        catch(err){
            console.log(err);
            done(err);
        }

    }
));

