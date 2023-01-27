// Imports
import db from '../db/connection.js'
import userData from '../db/users.json' assert { type: 'json' }
import Users from '../models/Users.js'

// Create Function to Insert Data
const insertData = async () => {
    // Clear current database
    await Users.deleteMany({});
    // Create database with current data
    await Users.create(userData);
    // Close database connection
    await db.close();
};
// Call Function to Insert Data
insertData();
