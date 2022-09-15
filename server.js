
const http=require('http');

const express =require('express')

const app=express()


app.get('/',(req,res)=>{
    res.send("Hi How are you")
    res.end()
})



const portNo=process.env.PORT || 3000
app.listen(portNo,()=> console.log("Express is running late.."))
