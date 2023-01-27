// Imports
import { Router } from "express";
import * as controllers from "../controllers/users.js";

// Initialize Router
const router = Router();

// Router CRUD

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);

// router.get("/", controllers.getUsers);
// router.get("/:id", controllers.getUser);
// router.post("/", controllers.createUser);
// router.put("/:id", controllers.updateUser);
// router.delete("/:id", controllers.deleteUser);

// Export Router
export default router;
