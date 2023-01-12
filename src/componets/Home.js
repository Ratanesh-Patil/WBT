import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


function Home() {

    const [stud,setStud]=useState([]);
  const url= "http://localhost:3002"
  useEffect(()=>{
    axios.get(url).then((resp)=>{
     console.log(resp.data) 
      setStud(resp.data) 
    })

  },[])
  
  const deleteData=(rollno)=>{
    alert(rollno)
    axios.delete(url+"/delete/"+rollno).then((result)=>{
      console.log(result.data)
    })
  }
  const renderdata=()=>{
     return (stud.map((s)=>{
        return (
        
          <tr key={s.name}>
            <td>{s.name}</td>
            <td>{s.rollno}</td>
            <td>{s.email}</td>
            <td>{s.batch}</td>
            <td> <button type="button" name='btn' id="delete" onClick={()=>deleteData(s.rollno)}>Delete</button></td>
          </tr>
        
          
        )
      })
     )
  }
  return (
     <div className='app'>
     
    <h1>Hello Students</h1>
    <table border='2px'>{
    renderdata()
    } </table>
    
   <Link to="/Register"><button type='button' name='btn' id='btn'>Add Student</button></Link>
   </div>
  )
}

export default Home