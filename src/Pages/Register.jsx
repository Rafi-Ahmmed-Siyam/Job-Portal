import React, { useContext, useState } from 'react';
import registerAnimation from '../assets/lotties/Animation - 1740938978024.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Contexts/AuthContext';
import SocialLogin from './Shared/SocialLogin';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handerRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // reset State
        setError("")

        if (password.length < 6) {
            return setError("Password Must Be 6 Charecter Longer.")
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            return setError("Password must have 1 upper case 1 lower case and 1 Number")
        }

        /////  Firebase Authentication ////////
        createUser(email, password)
            .then(userData => {
                console.log(userData.user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:justify-end lg:gap-32 lg:flex-row-reverse">

                    {/* 1st Div */}
                    <div className="text-center lg:text-left flex justify-center items-center">
                        <Lottie className='w-80 md:w-80 lg:w-80 mx-auto' animationData={registerAnimation} loop={true}></Lottie>
                    </div>

                    {/* 2nd div */}

                   
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <SocialLogin/>
                        <h1 className="text-4xl mt-5 ml-6 font-bold">Register now!</h1>
                        <div className="card-body">
                            <form onSubmit={handerRegister} className="fieldset">
                                <label className="fieldset-label text-base">Name</label>
                                <input name='name' type="text" className="input w-full mb-1.5" placeholder="Enter your name" />
                                <label className="fieldset-label text-base">Email</label>
                                <input name='email' type="email" className="input w-full mb-1.5" placeholder="Enter your Email" />
                                <label className="fieldset-label text-base">Password</label>
                                <input name='password' type="password" className="input w-full" placeholder="Create a Password" />
                                <label className="fieldset-label text-sm text-red-500 mt-3">{error}</label>

                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;