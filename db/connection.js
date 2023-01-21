//Imports
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

//Configure
let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true}
mongoose.set('strictQuery', true)

//Assign URL
const url = process.env.MONGO_URL || 'mongodb://localhost:27017/ProductData'

//Mongoose Connect
mongoose.connect(url, mongooseConnectionConfig)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

//Export
export default mongoose.connection
