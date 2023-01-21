//Imports
import { Router } from "express";
import products from './products.js'
import users from './users.js'
import dotenv from 'dotenv'
dotenv.config()

//Variable for instance of Express
const router = Router();
router.get("/", (req, res) => {
    res.send("This is the api root!");
  });
  
  router.use("/products", products);
  router.use("/users", users);


//Export 
export default router;
