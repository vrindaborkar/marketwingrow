const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname:{
      type:String,
    
    
    },
    lastname:{
      type:String,
    
    
  
    },
    role:{
      type:String,
  
    
    },
    phone:{
      type:String,
   
    
    },
    password: {
      type:String,
    
  
    },
    farmertype:{
      type:String,
    
    
    },
    pic:String,
    address:{
      type:String,
    
    
    },
    tags:[{
      id:String,
      text:String
    }],
    employeeID :String,
  },{
    bufferCommands: true,
    autoCreate: false 
  })
);

module.exports = User;