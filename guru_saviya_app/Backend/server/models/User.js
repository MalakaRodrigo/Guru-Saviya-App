const mongoose =require('mongoose');

//User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
}, 

);

const Userdb = mongoose.model('userdb', UserSchema);
module.exports = Userdb;