import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    

    const {signInWithGoogle} = useContext(AuthContext);
    const handleGoogleSignIn = ()=>{
        
        signInWithGoogle()
        .then((result)=>{
            location?.state? navigate(location.state) : navigate('/');
            
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    
    return (
        <div className='mt-7'>
            <div className='flex justify-center items-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-white text-black text-base'><FcGoogle className='text-lg' />{location?.pathname === '/register' ? 'Sign up with Google' : 'Sign in with Google' }</button>
            </div>
            <div className="flex w-80 mx-auto flex-col mt-4">
                <div className="divider">OR</div>
            </div>
        </div>
    );
};

export default SocialLogin;