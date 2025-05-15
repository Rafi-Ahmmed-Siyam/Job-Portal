import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import logo2 from '../../assets/Icons/Small_icons8-job-application-64.png'

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user)
    const handleSIgnOut = () => {
        userSignOut()
            .then(() => {
                alert("Sign Out Successful")
                navigate('/register')
            })
            .catch((error) => {
                alert("Something wents wrong")
            })
    }



    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/myApplications'}>My Applications</NavLink></li>
        <li><NavLink to={'/addJobs'}>Add Jobs</NavLink></li>
        <li><NavLink to={'/myPostedJobs'}>My Posted Jobs</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm  border-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <Link to={'/'} className="btn btn-ghost text-xl">
                        <img className='w-11 mr-0.5' src={logo2} alt="" />
                        <h3 className=' lg:text-2xl'>Job Portal</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <div className="chat-image avatar border-green-500 border rounded-full mr-5 ">
                                <div className="w-11 rounded-full">
                                    <img
                                        alt="Tailwind CSS chat bubble component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            :
                            <Link to={'/register'} className='text-blue-500 underline mr-5'>Register</Link>
                    }
                    {
                        user ? <button onClick={handleSIgnOut} className='btn'>Log Out</button> : <Link to={'/signin'} className="btn">Sign In</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;