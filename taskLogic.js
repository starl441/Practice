import express from "express"


let router=express.Router()


let tasks=[] 
//Considering this as the task DB , we can also use seperate 
// json file and use fs library for data to persist


//get task endpoint
router.get("/getTask",(req,res)=>{
    res.status(200).json(tasks)
})

//add task endpoint 
router.post("/addTask",(req,res)=>{
    let requestTask=req.body
    let task=tasks.find((item)=>requestTask.task===item.task) //to find the existing tasks
    if(!task){
       try{ let Id=tasks.length+1
        requestTask.Id=Id
        tasks.push(requestTask) //adding tasks on conditional basis when the task is not present
        res.send(tasks)}
        catch(e){
            res.json({error:"Error while creating the task",e})
        }
    }else{
        res.send({error:"Task alreay exists"})
    }
})

//updating the task
router.put("/updateTask/:id",(req,res)=>{
    let updatedTask=req.body.task
    let taskObject=tasks.find((item)=>parseInt(req.params.id)===item.Id)
    if(taskObject){
      try{   taskObject.task=updatedTask
         let index=tasks.findIndex((item)=>parseInt(req.params.id)===item.Id) //updating tasks on conditional basis when the task is  present 
         tasks.splice(index,1,taskObject)
        res.send(tasks)}
        catch(e){
            res.json({error:"Error while updating tha task:",e})
        }
}else{
    res.status(404).json({error:"Task with given Id doesn't exist"})
}
})

//deleting the task
router.delete("/deleteTask/:id",(req,res)=>{
    let taskObject=tasks.find((item)=>parseInt(req.params.id)===item.Id)
    if(taskObject){
         let index=tasks.findIndex((item)=>parseInt(req.params.id)===item.Id) //deleting the task based on id
         tasks.splice(index,1)
        res.send(tasks)
}else{
    res.status(404).json({error:"Task with given Id doesn't exist"})
}
})


export default router