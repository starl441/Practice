const {UserList,MovieList}=require("./fakedata")
const _=require("lodash")
//we can imagine this as endpoint service 
const resolvers={
    Query:{
        users:()=>{
            return UserList;
        },
        user:(parent,args)=>{
            let id=args.id
            let user=_.find(UserList,{id:Number(id)})
            return user

        }
    },
    User:{
        favoriteMovies:()=>{
             return _.filter(
                    MovieList,
                    (movie) =>
                      movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
                  );
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            let newUser=args.user
            let id =UserList.length+1
            newUser.id=id
            UserList.push(newUser)
            console.log(UserList)
            return newUser
        }
    }
}



module.exports={resolvers}