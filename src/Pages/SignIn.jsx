import React, { useContext } from 'react';
import signInanimation from '../assets/lotties/SignIn-Animation - 1743352205283.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Contexts/AuthContext';
import SocialLogin from './Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location)
    const handelSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((userData) => {
                

                location?.state ? navigate(location.state) : navigate('/');

            })
            .catch((error) => {
                console.log(error)
            })



    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:justify-end lg:gap-32 lg:flex-row-reverse">

                    {/* 1st Div */}
                    <div className="text-center lg:text-left flex justify-center items-center">
                        <Lottie className='w-80 md:w-80 lg:w-80 mx-auto' animationData={signInanimation} loop={true}></Lottie>
                    </div>

                    {/* 2nd div */}
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <SocialLogin />
                        <h1 className="text-4xl mt-5 ml-6 font-bold">Sign In now!</h1>
                        <div className="card-body">
                            <form onSubmit={handelSignIn} className="fieldset">

                                <label className="fieldset-label text-base">Email</label>
                                <input name='email' type="email" className="input w-full mb-2.5" placeholder="Enter your Email" />
                                <label className="fieldset-label text-base">Password</label>
                                <input name='password' type="password" className="input w-full mb-3" placeholder="Enter Your Password" />

                                <div className='flex justify-between'>
                                    <label className="fieldset-label ">
                                        <input type="checkbox" className="checkbox checkbox-md" />
                                        Remember me
                                    </label>
                                    <a className="link link-hover text-red-400">Forgot password?</a>
                                </div>

                                {/* <label className="fieldset-label text-sm text-red-500 mt-3">{error}</label> */}

                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </form>
                        </div>
                    </div>
                    <div className=''>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignIn;