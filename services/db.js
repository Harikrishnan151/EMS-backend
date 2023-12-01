//import moongose
  const mongoose = require('mongoose')

//connect mongoose
  mongoose.connect('mongodb://localhost:27017/ems')

// create a model
const Employee = mongoose.model('Employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number
})

//export model
   module.exports={
    Employee
   }