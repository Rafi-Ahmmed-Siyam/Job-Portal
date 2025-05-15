import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineWork, MdAccessTimeFilled } from "react-icons/md";
import { SiJirasoftware } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";


const JobDetails = () => {
    const { _id, title, company, location, jobType, category, applicationDeadline, salaryRange, description, requirements, responsibilities, company_logo } = useLoaderData();

    return (
        <div className='mt-14 lg:w-6/12 mx-auto '>
            <div className='border rounded-xl p-5'>
                <div className='flex justify-center items-center'>
                    <img className='w-16' src={company_logo} alt="" />
                </div>
                <div className='mt-8'>
                    <h2 className='text-4xl font-bold'>{title}</h2>
                    <div className='mt-3 flex flex-wrap justify-between items-center'>
                        <div className='flex flex-wrap justify-start gap-5 items-center'>
                            <p className='flex items-center gap-1'><MdOutlineWork /> {jobType}</p>
                            <p className='flex items-center gap-1'><MdAccessTimeFilled /> {applicationDeadline}</p>
                        </div>
                        <div>
                            <p className='flex items-center gap-1'><SiJirasoftware /> Conpany : {company}</p>
                        </div>
                    </div>
                    <p className='flex items-center gap-1 mt-2' ><TbCategoryFilled /> Category : {category}</p>
                    <p className='flex items-center gap-1 mt-2' ><ImLocation2 /> Location : {location}</p>
                    <p className='flex items-center gap-1 mt-2' ><TbCoinTakaFilled /> Salary : {salaryRange?.min} - {salaryRange?.max} <sub>/{salaryRange?.currency}</sub></p>
                    <p className='text-center mt-5'>{description}</p>
                    <p className='text-center mt-2.5'>Requirements : </p>
                    <div className='mt-5 flex justify-center flex-wrap items-center gap-3.5 '>

                        {
                            requirements.map((req, index) => <p key={index} className='border px-3.5 py-1 text-center rounded-lg'>{req}</p>)
                        }
                    </div>
                    <div className='mt-3.5'>
                        <h3 className='font-semibold text-lg'>Responsibilities :</h3>
                        <ul className='list-disc ml-5 mt-1.5'>
                            {
                                responsibilities.map((res, index) => <li key={index} className='text-red-500'>{res}</li>)
                            }
                        </ul>
                    </div>

                    <div className='flex gap-3.5 justify-end mt-10'>

                        <Link to={`/jobApply/${_id}`} className='btn bg-blue-500 text-black'>Apply Now</Link>
                        <button className='btn bg-gray-400 text-black'>Save Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;