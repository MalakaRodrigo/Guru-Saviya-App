const express = require('express');
const route = express.Router();
const usercontroller =  require('../controller/user_controller')
const authcontroller =  require('../controller/authentication_controller')

//API - user
route.post('/', usercontroller.create);
route.get('/',usercontroller.find);
route.put('/', usercontroller.update);
route.delete('/', usercontroller.delete);

//API - auth
route.post('/register', authcontroller.create);
route.post('/login', authcontroller.find);






module.exports = route