import knexconfig from './knexfile.js'
import knex from "knex"

let db=new knex(knexconfig.staging)

export default db;