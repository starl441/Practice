const {gql}=require("apollo-server")
//We can imagine this as api-routing in backend
const typeDefs=gql`
type User {
    id:ID!
    name:String!
    username:String!
    age:Int!
    nationality:Nationality!
    favoriteMovies:[movie]
}

type movie{
    name:String!
    director:String!
}

type Query{
    users:[User]!
    user(id:ID!):User!

}

input inputUser{
    name:String!
    username:String!
    age:Int=18
    nationality:Nationality = UK
}

type Mutation{
    createUser(user:inputUser!):User
}
    enum Nationality{
        UK
        CHINA
        MEXICO
        USA
    }

`;

module.exports={typeDefs}