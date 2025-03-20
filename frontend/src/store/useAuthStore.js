import {create} from "zustand";
import { axiosInstance } from "../lib/AxiosInstance";
import axios from "axios";
import toast from "react-hot-toast";
export const useAuthStore = create((set , get)=>({
    authUser : null,
    isCheckingAuth : true,
    isSigningIn : false,
    isSigningUp : false,
    isSigningOut:false,
    
    signin : async(details)=>{
        try {
            set({isSigningIn : true})
            const response = await axiosInstance.post("/auth/signin",details);
            set({authUser : response.data});
        } catch (error) {
            console.log("Error in signin : ", error);
            set({authUser : null});
        }
        finally{
            set({isSigningIn : false});
        }
    },
    signup : async(details)=>{
        try {
            set({isSigningUp : true})
            const response = await axiosInstance.post("/auth/signup",details);
            set({authUser : response.data});
            toast.success(`${details.name} Signed Up successfully.`)
        } catch (error) {
            console.log("Error in signup : ", error);
            set({authUser : null});
        }
        finally{
            set({isSigningUp : false});
        }
    },
    signout : async()=>{
        try {
            set({isSigningOut : true});
            const response = await axiosInstance.post("/auth/logout");
            set({authUser : null});
            toast.success("Logged Out Successfully.")
        } catch (error) {
            console.log("Error in signup : ", error);
            set({authUser : null});
        }
        finally{
            set({isSigningOut : false});
        }
    },
    checkAuth : async()=>{
        try {
            const response = await axiosInstance.get("/auth/checkAuth");
            set({authUser : response.data})
        } catch (error) {
          console.log("Error in checkAuth : ",error); 
          set({authUser : null});
        } 
        finally{
            set({isCheckingAuth : false});
        }
    }
}))