const User = require('../models/user.model');
const userService = require('../services/user.services');
const bcrypt = require('bcrypt');

const logger = require('../logger/logger');

exports.findAll = async(req, res) => {
  console.log("Find all users from collection users");

  try {
    // const result = await User.find();
    const result = await userService.findAll();
    res.status(200).json({status: true, data: result});
    logger.info("Success in reading all users");
    logger.warn("Success in reading all users");
    logger.error("Message with error");
  } catch (err) {
    console.log("Problem in reading users", err);
    logger.error("Problem in reading all users", err);
    res.status(400).json({status:false, data: err});
  }
}

exports.findOne = async(req, res) => {
  console.log("Find user with specific username");
  let username = req.params.username;

  try {
    // const result = await User.findOne({username: username});
    const result = await userService.findOne(username);
    if (result) {
      res.status(200).json({status:true, data: result});
    } else {
      res.status(404).json({status: false, data: "User not exist"})
    }
  } catch (err) {
    console.log("Problem in findng user", err)
    res.status(400).json({status: false, data: err});
  }
}

exports.create = async(req, res) => {
  console.log("Create User");
  let data = req.body;
  const SaltOrRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, SaltOrRounds)
  
  const newUser = new User({
    username: data.username,
    password: hashedPassword,
    name: data.name,
    surname: data.surname,
    email: data.email,
    address: {
      area: data.address.area,
      road: data.address.road
    }
  });

  try{
    const result = await newUser.save();
    res.status(200).json({status: true, data: result});
  } catch (err) {
    console.log("Problem in creating user", err);
    res.status(400).json({status: false, data: err});
  }
}

exports.update = async(req, res) => {
  const username = req.body.username;

  console.log("Update user with username", username);

  const updateUser = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    address: {
      area: req.body.address.area,
      road: req.body.address.road
    }
  };

  try {
    const result = await User.findOneAndUpdate({username: username}, updateUser, {new:true});
    res.status(200).json({status:true, data:result});
  } catch (err) {
    console.log("Problem in updating user", err);
    res.status(400).json({status:false, data: err});
  }
}

exports.deleteByUsername = async(req, res) => {
    const username = req.params.username
    console.log("Delete user with username", username);

    try {
      const result = await User.findOneAndDelete({username:username});
      res.status(200).json({status:true, data: result});
    } catch (err) {
      console.log("Problem in deleting user", err);
      res.status(400).json({status: false, data: err});
    }
}
// http://localhost:3000/api/users/test

exports.deleteByEmail = async(req, res) => {
  const username = req.params.username
  const email = req.params.email;
  console.log("Delete user by email", email);

  try {
    const result = await User.findOneAndDelete({email:email});
    res.status(200).json({status:true, data: result});
  } catch (err) {
    console.log("Problem in deleting by email", err);
    res.status(400).json({status: false, data: err});
  }
} 
// http://localhost:3000/api/users/test/email/lakis@aueb.gr