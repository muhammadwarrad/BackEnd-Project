// Imports
import db from '../db/connection.js'
import data from '../db/products.json' assert { type: 'json' }
import Products from '../models/Products.js'

// Create Function to Insert Data
const insertData = async () => {
    // Clear current database
    await Products.deleteMany({});
    // Create database with current data
    await Products.create(data);
    // Close database connection
    await db.close();
};
// Call Function to Insert Data
insertData();
