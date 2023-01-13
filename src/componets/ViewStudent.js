import React, { useState ,useEffect } from 'react'
import axios from 'axios';


function ViewStudent() {
    const [stud,setStud]=useState([]);
    const [searchst,setSerachst]=useState('');
  
  const url= "http://localhost:3002"
  useEffect(()=>{
    axios.get(url).then((resp)=>{
     console.log(resp.data) 
      setStud(resp.data) 
    })

  },[])
      const handlechange=(e)=>{
        const getSearch=e.target.value;
        if(getSearch.lenght > 0){
         const searchdata=stud.filter((value)=>
           value.name.tolowercase().includes(getSearch.tolowercase()))        
         }
         setSerachst(getSearch);
         }
        
               
    
    

  return (
    <div>
        <input type="text" name='ser' id="ser" value={searchst} onChange={(e)=>handlechange(e)}></input>
        
     <div>    
         <tbody>
                {
                  stud.map((s)=>{
                    return(
                    <tr key={s.name}>
                        <td>{s.name}</td>
                       <td>{s.rollno}</td>
                       <td>{s.email}</td>
                       <td>{s.batch}</td>
                     </tr>)
                 }  )
                }
                    
           </tbody>
     </div>
    </div>
  )
}

export default ViewStudent