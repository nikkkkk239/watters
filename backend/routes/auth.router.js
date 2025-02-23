import express from "express";
import { signin, signout, signup } from "../controllers/auth.controller.js";
import { authProtection } from "../middlewares/authProtection.js";
const router = express.Router();

router.post("/signup" , signup);
router.post("/signin" , signin);
router.post("/logout",authProtection , signout);

export default router;