import Employee from "./Employee";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

function Home()
{
    let history=useNavigate();
  const DeleteData=(id)=>{
    var index=Employee.map((item)=>{
         return(item.id)
    }).indexOf(id)
    console.log(index);

    Employee.splice(index,1)
    history('/');
  }
  const UpdateData=(name,age,designation,id)=>{
    localStorage.setItem("Name",name)
    localStorage.setItem("Age",age)
    localStorage.setItem("Designation",designation)
    localStorage.setItem("Id",id)

  }
  return(
  <>
  <div style={{margin:"10rem"}}>
   <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th width="10">Name</th>
          <th width="10">Age</th>
          <th width="10">Designation</th>
          <th width="10">Actions</th>
        </tr>
      </thead>
      <tbody>
        {Employee && Employee.length> 0 ? Employee.map((emp)=>{
          return(
            <tr>
              <td>
                {emp.name}
              </td>
              <td>
                {emp.Age}
              </td>
              <td>
                {emp.designation}
              </td>
              <td>
              <Link  to='/Edit'>
              <Button variant="primary" onClick={()=>UpdateData(emp.name,emp.Age,emp.designation,emp.id)}>Edit</Button>
              </Link>
              <Button variant="danger" onClick={()=>DeleteData(emp.id)}>Delete</Button>
              </td>
            </tr>
          )
        }) : "No data avaialble"}
      </tbody>
    </Table>
    <div>
      <Link className='d-grid gap-2' to='/create'>
    <Button variant="primary" size="lg">Create</Button>
    </Link>
    </div>
    </div>
  </>
  )
}

export default Home;