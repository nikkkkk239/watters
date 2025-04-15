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
    isFetchingCurrent : true,
    currentEnergy : null,
    isUpdating : false,
    searchResults : [],
    orderRequests : [],
    getOrderRequests : async(id)=>{
        try {
            const response = await axiosInstance.get(`/order/getOrdersHavingPro/${id}`)
            set({orderRequests : response.data})
        } catch (error) {
            console.log("Error in getOrderRequests : ",error); 
            toast.error(error.response.data.message)
        }
    },
    fetchingCustomersOrder:true,
    isCreatingOrder:false,
    setSearchResult : (value)=>{
        set({searchResults : value})
    },
    setOrder : (value)=>{
        set({consumersCurrentOrder : value})
    },

    searchEnergies : async(details)=>{
        try {
            const response = await axiosInstance.post("/energy/searchEnergy",details);
            set({searchResults : response.data})
        } catch (error) {
            console.log("Error in searchEnergies : ",error); 
            toast.error(error.response.data.message)
        }
    },
    consumersCurrentOrder : null,
    getConsumersCurrentOrder : async(id)=>{
        try{

            const response = await axiosInstance.get(`/order/getConsumersOrder/${id}`)
            set({consumersCurrentOrder : response.data});
        }   
        catch(error){
            console.log("Error in getConsumersCurrentOrder : ",error); 
          toast.error(error.response.data.message)
        }
        finally{
            set({fetchingCustomersOrder : false})
        }
    },


    
    signin : async(details)=>{
        try {
            set({isSigningIn : true})
            const response = await axiosInstance.post("/auth/signin",details);
            set({authUser : response.data});
            toast.success(`Signed In successfully.`)
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
            toast.success(`Signed Up successfully.`)
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
    },
    getCurrentEnergy : async(id)=>{
        try {

            const response = await axiosInstance.post(`/energy/getSharedEnergy`,{owner : id});
            console.log("Response from getCurrentEnergy : ",response)
            set({currentEnergy : response.data})
        } catch (error) {
          console.log("Error in getCurrentEnergy : ",error); 
          set({currentEnergy : null});
        } 
        finally{
            set({isFetchingCurrent : false});
        }
    },
    updateProfile : async(details , id)=>{
        try {
            set({isUpdating : true})

            const response = await axiosInstance.post(`/auth/update/${id}` , details);
            set({authUser : response.data})
            toast.success("Profile Updated.")

        } catch (error) {
          console.log("Error in updateProfile : ",error); 
          toast.error(error.response.data.message)
        } 
        finally{
            set({isUpdating : false})

        }
    },shareEnergy:async(details)=>{
        try {
            const response = await axiosInstance.post("/energy/",details);
            toast.success("SuccessFull")
            set({currentEnergy : response.data})
        } catch (error) {
            console.log("Error in updateProfile : ",error); 
            toast.error(error.response.data.message)
        }
    },
    deleteEnergy:async(id)=>{
        try {
            const response = await axiosInstance.delete(`/energy/delete/${id}`);
            toast.success("SuccessFull")
            set({currentEnergy:null})
            set({orderRequests : []})

        } catch (error) {
            console.log("Error in deleteEnergy : ",error); 
            toast.error(error.response.data.message)
        }
    },
    createOrder : async(details)=>{
        try {
            set({isCreatingOrder : true})
            const response = await axiosInstance.post('/order/create' ,details);
            set({consumersCurrentOrder : response.data});
            toast.success("Request Send Successful.")
        } catch (error) {
            console.log("Error in makeRequest : ",error); 
            toast.error(error.response.data.message)
        }
        finally{
            set({isCreatingOrder : false});
        }
    },
    deleteOrder : async(id)=>{
        try {
            const response = await axiosInstance.delete(`/order/delete/${id}`);
            set({consumersCurrentOrder : null})
        } catch (error) {
            console.log("Error in deleteOrder : ",error); 
            toast.error(error.response.data.message)
        }
    },
    deleteOrdersHavingProducer : async(id)=>{
        try {
            const response = await axiosInstance.delete(`/order/deleteMany/${id}`)
        } catch (error) {
            console.log("Error in deleteOrdersHavingProducer : ",error); 
            toast.error(error.response.data.message)
        }
    },
    accpetOrder : async(id)=>{
        try {
            const response = await axiosInstance.post(`/order/accept/${id}`);
            set({currentEnergy : null});
            set({orderRequests : []});
            set({orderRequests : [...get().orderRequests , response.json()]});
            toast.success("Order Accepted.")
        } catch (error) {
            console.log("Error in accpetOrder :",error);
            toast.error(error.reponse.data.message);
        }
    }
}))
