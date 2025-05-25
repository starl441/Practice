const {ApolloServer}=require("apollo-server")
const {typeDefs}=require("./schema/typedefs")
const {resolvers}=require("./schema/resolvers")


const server=new ApolloServer({typeDefs,resolvers}) //we defined typedefs and resolvers which have api and service endpoint relation

server.listen().then(({url})=>{
    console.log(`Your api is running ${url}`)
})