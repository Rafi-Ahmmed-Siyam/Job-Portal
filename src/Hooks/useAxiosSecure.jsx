import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL:'https://job-portal-server-rho-sandy.vercel.app',
    withCredentials:true,
})

const useAxiosSecure = () => {
    const {userSignOut} = useAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use((response)=>{

            return response
        }, (error)=>{

            
            if(error.status === 401 || error.status === 403){
                console.log("Some error is found",error)

                userSignOut()
                .then(()=>{
                    navigate('/register')
                })
                .catch(()=>{
                    alert("Something wents wrong")
                })
            }
            return Promise.reject(error)
        })
    },[userSignOut,navigate])



    return axiosInstance;
};

export default useAxiosSecure;