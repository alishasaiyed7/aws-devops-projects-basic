const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const authService = require('../services/auth.service');

exports.login = async(req, res) =>{
  console.log("Login user", req.body);

  const username = req.body.username;
  const password = req.body.password;
  
  try {
    const result = await User.findOne({username: username},{username:1, email:1, password:1, roles:1})
    console.log("User", result);
    const isMatch = await bcrypt.compare(password, result.password)
    
    // if (result && result.username === username && result.password === password){
    if (result && result.username === username && isMatch){
      const token = authService.generateAccessToken(result)
      res.status(200).json({status: true, data: token});
    } else {
      res.status(404).json({status: false, data: "user not logged in"});
    }
  } catch (err) {
    console.log("Problem in logging", err);
    res.status(400).json({status: false, data: err})
  }
}