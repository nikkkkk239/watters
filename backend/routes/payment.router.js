import express from "express";
import Razorpay from "razorpay"
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
router.post("/create-order", async (req, res) => {
    try {
        const { amount } = req.body;

        const order = await razorpay.orders.create({
            amount: amount * 100, 
            currency: "INR",
            payment_capture: 1, 
        });

        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;