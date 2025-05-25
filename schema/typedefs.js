const {gql}=require("apollo-server")
//We can imagine this as api-routing in backend
const typeDefs=gql`
type User {
    id:ID!
    name:String!
    username:String!
    age:Int!
    nationality:String!
}


type Query{
    users:[User]!
}`;

module.exports={typeDefs}