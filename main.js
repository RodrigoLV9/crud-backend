const express=require("express");
const server=express();
const PORT=7000

server.get('/',(req,res)=>{
    res.send("Hola Mundo")
})


server.listen(PORT,()=>{
    console.log("Server funcionando")
})