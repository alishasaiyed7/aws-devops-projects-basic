const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let addressSchema = new Schema({
  area: { type: String },
  road: { type:String }
}, {_id: false});

let phoneSchema = new Schema({
  type: {type: String},
  number: {type: String}
}, {_id: false});

let productsSchema = new Schema({
  product: {type: String},
  cost: {type: Number},
  quantity: {type: Number, required: true},
  date: {type: Date, default: Date.now}
})

let userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required field"],
    max: 20,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: [true, 'Password is required field'],
    max:20
  },
  name: {
    type: String,
    required: [true, 'Name is required field'],
    max: 20
  },
  surname: {
    type: String,
    required: [ true, 'Surname is required field'],
    max: 20
  },
  email: {
    type: String,
    required: [ true, 'Email is required field'],
    max: 20,
    unique:true,
    trim: true,
    lowercase: true
  },
  address: addressSchema,
  phone: { type: [phoneSchema], null: true},
  products: { type : [productsSchema], null: true},
  roles: {type:[String], null: true}
},
{
  collection: 'users',
  timestamps: true
});

module.exports = mongoose.model("User", userSchema)