// import db.js
  const db=require('./db')

// get all employee detais from mongpdb
   const allEmployees=()=>{
    return db.Employee.find().then((result)=>{
        if(result){
            return{
                statusCode :200,
                employee:result
            }
        }else{
            return{
                statusCode:401,
                message:"No Data Found"
            }
        }
    })
   }

// Add employee details
const addEmployees=(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Employee Already exist"
            }
        }
        else{
            const newEmployee=new db.Employee({id,name,age,designation,salary})
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee Added Successfully"
            }
       }
    })

}
//delete a particular employee from database

 const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
          if(result){
            return{
                statusCode:200,
                message:"Employee deleted successsfully"
            }
          }else{
            return{
                statusCode:404,
                message:"Employee not found"
            }
          }
    })
 }

 //get a particular employee details
  const getAnEmployee=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
    })
  }

// edit employee details
 const editAnEmployee=(empid,id,name,age,designation,salary)=>{
    return db.Employee.findOne({id:empid}).then((result)=>{
        if(result){
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;

              result.save()//to update in mongodb

              return{
                statusCode:200,
                message:'Employee details updated'
              }
        }else{
            return{
                statusCode:401,
                message:"Invalid Opertion"
            }
        }
    })
 }
   //Export functions
   module.exports={
    allEmployees,
     addEmployees,
     deleteEmployee,
     getAnEmployee,
     editAnEmployee
   }