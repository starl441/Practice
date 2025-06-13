import jwt from "jsonwebtoken"


let authenticateToken=async(req,res,next)=>{
    let authHeader=req.headers['authorization']
   
    let token=authHeader && authHeader.split(' ')[1]
   
    if (token){
        try{
        let decoded=jwt.verify(token,'postgres')
         next()
    }
       
        catch(e){
            res.send("Error in decrypting token:",e);
        }
    }else{
        res.send("Authentication failed")
    }
}

export default authenticateToken
