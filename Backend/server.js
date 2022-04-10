// app.js

const express = require('express');
const dotenv = require('dotenv');
const morgan  = require('morgan');
const bodyparser = require('body-parser');
const  path  = require('path');

//using express framework
const app = express();

//databse connection
const connectDB = require('./server/database/connection')

//config file path
dotenv.config({path:'config.env'});

//recomended port and default port
const PORT = process.env.PORT || 8082;

//using morgan module
app.use(morgan('tiny'));

//mongodb connectiom
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

//set view engine - not used
//or use path module and different folder
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"));

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/images', express.static(path.resolve(__dirname, "assets/images")));
app.use('/client', express.static(path.resolve(__dirname, "assets/client")));

//load routers
//app.get('/user', (req, res) => res.send('Hello world!'));
app.use('/user', require('./server/routes/router'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));