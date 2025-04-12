import express from "express";
import { createEnergy ,getSharedEnergy,deleteSharedEnergy} from "../controllers/energy.controller.js";
const router = express();

router.post("/",createEnergy);

router.post("/getSharedEnergy" , getSharedEnergy);
router.delete("/delete/:id" , deleteSharedEnergy);
export default router;