import React, { useState } from 'react'
import axios from 'axios';



function Register() {

const [student,setStudent]=useState({name:"",rollno:"",email:"",batch:""});


const url = "http://localhost:3002";
const handlechange=(ev)=>{
    const name=ev.target.name;
    const value =ev.target.value;
  
    setStudent({...student,[name]:value});
  }
  
  const {name,rollno,email,batch}=student
const Submitdata=(e)=>{
    e.preventDefault();
  // console.log(student)
 
  console.log((student));
  return ( 
           
         axios.post(url+"/adddata",(student)).then((result)=>{
          console.log("hi");
          if(result){
            alert("data submited")
              console.log(result.data);
              
          }
      })
  )


}


  return (
    <div>
    <form onSubmit={Submitdata}>
            <table>
                <tr>
                    <td>
                    NAME :
                    </td>
                    <td>
                    <input type="text" name='name' id='name'  value={student.name} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                    Roll NO : 
                    </td>
                    <td>
                    <input type="text" name='rollno' id='rollno' value={student.rollno} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                      Email :
                    </td>
                    <td>
                    <input type="email" name='email' id='email'  value={student.email} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                       BATCH :
                    </td>
                    <td>
                    <input type="text" name='batch' id='batch' value={student.batch} onChange={handlechange}></input>
                    </td>
                </tr>
            
            <tr>
                <td><button type='button' onClick={Submitdata}>Submit</button></td>
               
            </tr>
            
            </table>
        </form>  


    </div>
  )
}

export default Register