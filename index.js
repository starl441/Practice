import express from "express"
import authenticate from "./authmiddleware.js"
import userTokenCreation from "./register.js"
import db from "./db.js"

let server=new express()

server.use(express.json())

server.post("/register",userTokenCreation)

server.post('/location',authenticate,async (req,res)=>{
    let data=req.body
    let exists=await db("location").select('*').where({user:data.username})
    console.log(exists)
    if(exists.length>0){
        res.send("User location already exists")
    }else{
        console.log({...req.body.location,user:data.username})
        db("location").insert({...req.body.location,user:data.username})
        .then(()=>{
            res.send("Location saved succcesfully")
        })
        
    }
})


server.listen(9000,()=>{
    console.log("server is listening")
})

