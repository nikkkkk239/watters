import express from "express";
import { getCurrentOrder ,createOrder,placeOrder} from "../controllers/order.controller.js";
import { authProtection } from "../middlewares/authProtection.js";
const router = express.Router();

router.get("/currentOrder/:orderId",authProtection,getCurrentOrder);
router.post("/create",authProtection,createOrder);
router.post("/placeOrder/:orderId",authProtection,placeOrder);

export default router;