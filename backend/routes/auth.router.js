import express from "express";
import { checkAuth, signin, signout, signup } from "../controllers/auth.controller.js";
import { authProtection } from "../middlewares/authProtection.js";
const router = express.Router();

router.post("/signup" , signup);
router.post("/signin" , signin);
router.post("/logout",authProtection , signout);
router.get("/checkAuth" , authProtection , checkAuth)

export default router;