const {ApolloServer}=require("apollo-server")
const {typeDefs}=require("./schema/typedefs")
const {resolvers}=require("./schema/resolvers")


const server=new ApolloServer({typeDefs,resolvers}) //we defined typedefs and resolvers which have api and service endpoint relation

server.listen().then(({url})=>{
    console.log(`Your api is running ${url}`)
})

//If express server needs to be used 

// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const { typedef } = require('./schema/typedefs');
// const { resolvers } = require('./schema/resolvers');

// async function startServer() {
//   const app = express();

//   const server = new ApolloServer({
//     typeDefs: typedef,
//     resolvers,
//   });

//   // Start the Apollo Server
//   await server.start();

//   // Apply Apollo as middleware to the Express app
//   server.applyMiddleware({ app });

//   const PORT = 4000;
//   app.listen(PORT, () =>
//     console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
//   );
// }

// startServer();
