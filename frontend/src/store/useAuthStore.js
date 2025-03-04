import {create} from "zustand";
import { axiosInstance } from "../lib/AxiosInstance";
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
            const data = await response.json();
            set({authUser : data});
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
            const data = await response.json();
            set({authUser : data});
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
            const response = await axiosInstance.post("/auth/signout");
            set({authUser : null});
        } catch (error) {
            console.log("Error in signup : ", error);
            set({authUser : null});
        }
        finally{
            set({isSigningOut : false});
        }
    }
}))