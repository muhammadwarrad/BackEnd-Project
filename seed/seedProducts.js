//imports
import mongoose from 'mongoose'
import db from '../db/connection.js'
import data from '../db/PLACE_JSON_HERE_AND_DEL_THIS_FILE.json' assert { type: 'json' }
// import Projects from '../models/Product.js'

//Create Function to Insert Data
const insertData = async () => {
    //Clear current database
    await db.dropDatabase();
    //Create database with current data
    await Projects.create(data);
    //Close database connection
    await db.close();
};
//Call Function to Insert Data

insertData();
