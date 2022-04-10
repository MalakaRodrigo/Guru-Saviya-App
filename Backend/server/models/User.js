const mongoose =require('mongoose');

//User schema
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        min:3,
        max:15,
        unique: false,
    },
    email:{
        type:String,
        required: true,
        max:50,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        min:8,
        max:50,
    },
}, 
{timestamps:true},
);

const Userdb = mongoose.model('userdb', UserSchema);
module.exports = Userdb;