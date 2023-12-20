import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
function Create() {
    const [name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [designation,setDesignation]=useState("");
    let history=useNavigate();
    const handleSubmit=()=>{
       console.log(name,Age);
       Employee.push({id:Math.floor(Math.random() * (100 - 4 + 1)) + 4,
        name,
        Age,
        designation})
       history('/')
    }
  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
      <Form.Group className="mb-3" controlId="Employee Name">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Employee Age">
        <Form.Label>Employee Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age" onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Employee Designation">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Designation" onChange={(e)=>setDesignation(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" size="lg" onClick={()=>handleSubmit()}>Create</Button>
      </Form>
    </div>
  )
}
export default Create;
