import axios from 'axios'
import {create} from 'zustand'
import toast from 'react-hot-toast'

export const useAuthStore = create((set)=>({
    user : null,
    isSigningUp:false,
    isLoggingIn:false,
    isCheckingAuth:false,
    isCheckingAuth:true,
    isLoggingOut:false,
    signup : async (credentials)=>{
        set({isSigningUp:true})
        try {
            const response = await axios.post('/api/v1/auth/signup',credentials)
        set({user:response.data.user,isSigningUp:false});
        toast.success('Account created succesfully✅')
        } catch (error) {
            toast.error(error.response.data.message || "An error occured")
            set({user:null,isSigningUp:false})
        }
    },
    login : async (credentials)=>{
        set({isLoggingIn:true});
        try {
            const response = await axios.post('/api/v1/auth/login',credentials);
            set({user:response.data.user,isLoggingIn:false});
            toast.success('Logged In succesfully✅')
        } catch (error) {
            toast.error(error.response.data.message || "An error occured")
            set({user:null,isSigningUp:false})
        }
    },
    logout : async ()=>{
        set({isLoggingOut:true});
        try {
            await axios.post('/api/v1/auth/logout');
            set({user:null,isLoggingOut:false});
            toast.success('Logged out successfully')
        } catch (error) {
            set({isLoggingOut:false})
            toast.error(error.response.data.message || 'Logout failed')
        }
    },
    authCheck : async ()=>{
        set({isCheckingAuth:true});
        try {
            const response = await axios.get('/api/v1/auth/authCheck');
            set({user:response.data.user,isCheckingAuth:false})
        } catch (error) {
            set({ isCheckingAuth: false, user: null });
        }
    }
}))