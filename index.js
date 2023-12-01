1// import express
const express=require('express')

//2. import cors
const cors=require('cors')

//5. import logic
   const logic=require('./services/logic')

//3. create a server application using express
const server = express()

//4. use cors
server.use(cors({
    origin:'http://localhost:3000'
}))

 server.use(express.json())

 server.listen(8000,()=>{
    console.log('listing on the port 8000');
 })
  
//get all employee Api
  server.get('/getEmployees',(req,res)=>{
    logic.allEmployees().then((response)=>{
        res.status(response.statusCode).json(response)
    })
  })

//add employee Api
server.post('/addEmployee',(req,res)=>{
  logic.addEmployees(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
      res.status(response.statusCode).json(response)
     })
})

//delte employee
server.delete('/deleteEmployee/:id',(req,res)=>{
  logic.deleteEmployee(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response)
  })
})

//get particular employee
server.get('/getEmployee/:id',(req,res)=>{
  logic.getAnEmployee(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response)
  })
})

//edit employee details
server.post('/editEmployee/:id',(req,res)=>{
  logic.editAnEmployee(req.params.id,req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
    res.status(response.statusCode).json(response)
  })
})