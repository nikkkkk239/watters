import { useEffect } from "react";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

function RazorpayButton({ amount }) {
  const navigate = useNavigate();
  const {authUser,consumersCurrentOrder,deleteOrder,setOrder} = useAuthStore();

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadRazorpay();
    console.log("customers Order : ", consumersCurrentOrder)
 }, []);

    const handlePayment = async () => {
      const response = await fetch(`http://localhost:3000/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const handlePaymentSuccess = async(response) => {
        console.log("Payment Successful:", response);
        await deleteOrder(consumersCurrentOrder._id)
        setOrder(null);

        toast.success("Payment Successful")
    };
  
      const order = await response.json();
  
      const options = {
        key: "rzp_test_zfZM4ZeFEtZQXB",
        amount: order.amount,
        currency: order.currency,
        name: "Your Account",
        description: "Payment for Energy Used",
        order_id: order.id,
        handler: handlePaymentSuccess,
        prefill: {
          name: authUser.name,
          email: authUser.email,contact: "xxxxxxxxxx",
        },
        theme: { color: "#3399cc" },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
  
    return <button className='w-full bg-blue-400 m-auto text-white hover:bg-blue-700 rounded-full cursor-pointer max-w-[350px] p-2' onClick={handlePayment}>Pay with Razorpay</button>;
  }
  
  export default RazorpayButton;