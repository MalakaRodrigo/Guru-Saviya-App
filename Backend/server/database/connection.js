const mongoose = require('mongoose');
const dotenv = require('dotenv');

//config file path
dotenv.config({ path: '../config.env' });

//mongo connection
const connectDB = async()=>{
    try{
        const connectiondata = await mongoose.connect(process.env.MONGOURI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
         });
         console.log(`MongoDB connected : ${connectiondata.connection.host} `);
    }catch(error){
        console.log('Connection error to mongoDB :' + error.message);
        process.exit(1);
    }
}




module.exports = connectDB