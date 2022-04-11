var User = require('../models/User');

//create and save new user
exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: 'Content cannot be empty!'});
        return;
    }
    //new user
  const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    

    //save user in the database
    user.save(user).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({message: err.message || 'Some error occurred while creating a new user.'});
    })

}
//retrieve all users/ single user
exports.find =(req, res)=>{
    res.send('Hello');
   // User.find().then(users =>res.json(users)).catch(err =>res.status(404).json({user: 'No user is found'}))
}
//update a new identified user by user id
exports.update =(req, res)=>{
    
}
//delete an identified user by user id
exports.delete =(req, res)=>{
    
}