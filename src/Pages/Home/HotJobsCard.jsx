import React from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMiniCurrencyBangladeshi } from "react-icons/hi2";
import * as motion from "motion/react-client"
import { Link } from 'react-router-dom';


const HotJobsCard = ({ job }) => {
    const { _id, company_logo, company, title, description, location, requirements, salaryRange, } = job;


    return (
        <motion.div
            whileHover={{ y: -4 }}
            className='flex flex-col h-full '>
            <div className="card bg-[#191E24] shadow-sm rounded-lg flex flex-col flex-grow border border-gray-50">
                <div className='flex justify-start items-center gap-3 mt-2.5 mx-4  '>
                    <figure>
                        <img
                            className='w-14'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className='text-xl font-bold'>{company}</h3>
                        <p className='flex items-center gap-1.5 mt-1 text-sm text-gray-400'><HiOutlineLocationMarker />{location}</p>
                    </div>
                </div>
                <div className=" card-body flex flex-col justify-between flex-grow">
                    <h2 className="card-title text-xl mb-1.5">{title}</h2>
                    <p className='font-medium text-sm text-gray-300'>{description}</p>
                    <div className='flex items-center gap-2 flex-wrap mt-2.5'>
                        {
                            requirements.map((requirment, index) => <p key={index} className='border rounded-md text-center text-gray-200 py-0.5 px-1 hover:text-purple-600 hover:bg-gray-200'>{requirment}</p>)
                        }
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <div className=''>
                            <p
                                className='flex items-center flex-gro gap-1 text-base md:text-xl lg:text-xl font-medium text-blue-700 '>
                                <HiMiniCurrencyBangladeshi className='text-2xl' />
                                {salaryRange?.min}-{salaryRange?.max}<sub className='text-base md:text-xl lg:text-xl'>/{salaryRange?.currency}</sub>
                            </p>
                        </div>
                        <Link to={`/jobs/${_id}`} className="btn bg-blue-500">Apply Now</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HotJobsCard;