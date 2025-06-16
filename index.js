import express from "express"
import taskLogic from "./taskLogic.js"
let server=express() //express server


server.use(express.json()) //json middleware to parse jsons

server.use('/tasks',taskLogic) //setting up seperate route to divide the server with logic.

server.listen(9000,()=>{
console.log("server is listenting")
})