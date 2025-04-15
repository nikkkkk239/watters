import express from "express";
import { getCurrentOrder ,createOrder,placeOrder,accpetOrder,getConsumersOrder,getOrdersHavingPro,deleteManyOrders ,deleteOrder} from "../controllers/order.controller.js";
import { authProtection } from "../middlewares/authProtection.js";
const router = express.Router();

router.get("/currentOrder/:orderId",authProtection,getCurrentOrder);
router.post("/create",authProtection,createOrder);
router.post("/placeOrder/:orderId",authProtection,placeOrder);
router.get("/getConsumersOrder/:id" , authProtection , getConsumersOrder);
router.delete("/delete/:id" , authProtection , deleteOrder);
router.delete("/deleteMany/:id" , authProtection , deleteManyOrders)
router.get("/getOrdersHavingPro/:id",authProtection , getOrdersHavingPro)
router.post("/accept/:id",authProtection , accpetOrder)

export default router;