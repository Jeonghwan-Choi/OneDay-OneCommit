const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50,
    },
    role :{
        type:Number,
        dedault: 0
    },
    image: String,
    
    token: {
        type: String
    },
    tokenExp:{
        type: Number
    }      
})

userSchema.pre('save', function(next){
    var user = this;
    //비밀번호를 암호화안다
    
        
        console.log(user.password);
        if(user.isModified('password')){

            bcrypt.genSalt(saltRounds, function(err, salt) {

            if(err) return next(err)

                bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                if(err) return next(err)
                user.password = hash
                next()
            });
        });
    }
})
const User = mongoose.model('User',userSchema)
module.exports = {User}