import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/Team/corporate-workers-brainstorming-together (1).jpg'
import team2 from '../../assets/Team/group-people-working-out-business-plan-office (1).jpg'
import { reverseEasing, spring } from 'motion';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[650px]">
                <div className="hero-content flex-col lg:gap-44 lg:flex-row-reverse lg:w-11/12 mx-auto">
                    <div className='lg:w-6/12 mx-auto'>
                        {/* This is for mediam and small scrfeen */}
                        <img className='block md:block lg:hidden rounded-2xl border-2 border-[#117ef9] mb-3.5' src={team2} alt="" />
                        {/* This image is for large screen */}
                        <motion.img
                            animate={{ y: [40, 80, 40] }}
                            transition={{ duration: 6, delay: 1, ease: 'easeInOut', repeat: Infinity, }}
                            src={team1}
                            className="max-w-sm w-64 lg:w-80 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl  shadow-2xl border-b-8 border-b-blue-700 border-l-8 border-l-blue-700 hidden lg:block" />
                        <motion.img
                            animate={{ x: [120, 165, 120] }}
                            transition={{ duration: 6, delay: 1, ease: 'easeInOut', repeat: Infinity, }}
                            src={team2}
                            className="max-w-sm w-64 lg:w-80 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl  shadow-2xl border-b-8 border-b-blue-700 border-l-8 border-l-blue-700 hidden lg:block" />
                    </div>
                    <div className='lg:w-6/12'>
                        <h1 className='text-5xl font-bold text-center lg:text-start block md:block lg:hidden'>Latest <span className='text-[#117ef9]'>Jobs</span> for you!</h1>
                        <motion.h1
                            animate={{ x: [0, 50, 0] }}
                            transition={{
                                duration: 5, delay: 1, ease: 'easeInOut', repeat: Infinity,
                            }}
                            className="text-5xl font-bold text-center lg:text-start hidden lg:block">Latest <motion.span
                                animate={{ color: ['#11f993', '#11f9cf', '#117ef9'] }}
                                transition={{ duration: 1.6, repeat: Infinity }}
                            >Jobs</motion.span> for you!</motion.h1>

                        <p className="py-6 text-center lg:text-start">
                            Find your dream job! 🚀 Explore top opportunities, connect with employers, and apply easily. Your next career move starts here!
                        </p>
                        <div className='flex justify-center lg:justify-start  items-center'>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;