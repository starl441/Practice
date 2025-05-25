const {UserList}=require("./fakedata")
//we can imagine this as endpoint service 
const resolvers={
    Query:{
        users(){
            return UserList;
        }
    }
}



module.exports={resolvers}