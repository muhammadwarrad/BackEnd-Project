// Imports
import { Router } from "express";
import * as controllers from "../controllers/products.js";

// Initialize Router
const router = Router();

// Router CRUD
router.get("/", controllers.getProducts);
router.get("/:id", controllers.getProduct);
router.post("/", controllers.createProduct);
router.put("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);

// Export Router 
export default router;
