const express = require('express');
const route = express.Router();
const usercontroller =  require('../controller/user_controller')

//API
route.post('/', usercontroller.create);
route.get('/',usercontroller.find);
route.put('/', usercontroller.update);
route.delete('/', usercontroller.delete);






module.exports = route