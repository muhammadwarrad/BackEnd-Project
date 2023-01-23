// Imports
import { Router } from "express";
import * as controllers from "../controllers/users.js";

// Initialize Router
const router = Router();

// Router CRUD
router.get("/", controllers.getUsers);
router.get("/:id", controllers.getUser);
router.post("/", controllers.createUser);
router.put("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);

// Export Router 
export default router;
