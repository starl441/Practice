import jwt from "jsonwebtoken"
import db from "./db.js"

let userTokenCreation=async(req,res,next)=>{
    console.log(req.body)
    let {username,password}=req.body
    console.log("token is generating")
    let token=jwt.sign({username,password},'postgres')
    console.log(token)
    res.send(token)
}

export default userTokenCreation
