const express = require('express');
const app=express();
const db = require('./db');
const cors=require('cors');
const PORT = 4000;


app.use(cors());
app.use(express.json());


app.get("/" , (req,res)=>{
    db.query("SELECT * FROM student", (err,result)=>{
        if(err){
            console.log(err);
        }
            res.send(result);
       
    })
    }
)
app.post("/adddata",(req,resp)=>{
    const {name,rollno,email,batch}=req.body;
    const query1=`insert into student values ('${name}','${rollno}','${email}','${batch}')`;
    db.query(query1,(err,result)=>{
        if(err){
            console.log(err)
        }
        resp.send(result)
    })
})




app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});