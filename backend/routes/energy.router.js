import express from "express";
import { createEnergy } from "../controllers/energy.controller.js";
const router = express();

router.post("/",createEnergy);

export default router;