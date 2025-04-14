import express from "express";
import { getCurrentOrder ,createOrder,placeOrder,getConsumersOrder,deleteManyOrders ,deleteOrder} from "../controllers/order.controller.js";
import { authProtection } from "../middlewares/authProtection.js";
const router = express.Router();

router.get("/currentOrder/:orderId",authProtection,getCurrentOrder);
router.post("/create",authProtection,createOrder);
router.post("/placeOrder/:orderId",authProtection,placeOrder);
router.get("/getConsumersOrder/:id" , authProtection , getConsumersOrder);
router.delete("/delete/:id" , authProtection , deleteOrder);
router.delete("/deleteMany/:id" , authProtection , deleteManyOrders)

export default router;