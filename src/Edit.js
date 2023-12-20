import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
function Edit() {
    const [name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [designation,setDesignation]=useState("");
    const[id,setId]=useState("");
    let history=useNavigate();
    var index=Employee.map(function(e){
        return e.id;
   }).indexOf(id)
    const handleUpdate=()=>{
       
       let a=Employee[index];
       a.name=name;
       a.Age=Age;
       a.designation=designation
       history('/')
    }
   useEffect(()=>{
    console.log("abc")
setName(localStorage.getItem("Name"))
setAge(localStorage.getItem("Age"))
setDesignation(localStorage.getItem("Designation"))
setId(localStorage.getItem("Id"))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
   console.log(name.Age,designation,id)
  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
      <Form.Group className="mb-3" controlId="Employee Name">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Employee Age">
        <Form.Label>Employee Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age" required value={Age} onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Employee Designation">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Designation" required value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" size="lg" onClick={()=>handleUpdate()}>Update</Button>
      </Form>
    </div>
  )
}
export default Edit;
