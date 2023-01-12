const express = require('express');
const db = require('./db')
const cors = require('cors')


const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())


app.get("/", (req,res)=>{
    db.query("SELECT * FROM student", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });

app.post('/adddata',(req,res)=>{
    console.log(req.body)
        const{name,rollno,email,batch}=req.body;
        const query1=`insert into student values ('${name}','${rollno}','${email}','${batch}')`;
        db.query(query1,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
    })
})
app.delete('/delete/:rollno',(req,res)=>{
    const rollno = req.params.rollno;
    console.log(req.params.rollno);
   const query2= `DELETE FROM student WHERE rollno = '${rollno}'`;
    db.query(query2, (err,result)=>{
        if(err) {
            console.log(err)
         
        }else{
            console.log("hiiiii")
            res.send(result)
        }
        }) 
    })
    
    

app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })