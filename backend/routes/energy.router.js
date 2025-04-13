import express from "express";
import { createEnergy ,getSharedEnergy,deleteSharedEnergy ,searchEnergy} from "../controllers/energy.controller.js";
import { authProtection } from "../middlewares/authProtection.js";
const router = express();

router.post("/",createEnergy);

router.post("/getSharedEnergy" , getSharedEnergy);
router.delete("/delete/:id" , deleteSharedEnergy);
router.post("/searchEnergy",authProtection , searchEnergy)
export default router;