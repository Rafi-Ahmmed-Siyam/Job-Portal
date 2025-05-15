import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('https://job-portal-server-rho-sandy.vercel.app/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    // console.log(jobs)
    return (
        <div>
            <h2 className='text-center text-3xl lg:text-4xl  font-bold mt-10'>Jobs of the day ({jobs.length})</h2>
            <p className='text-lg lg:text-xl font-normal text-center mt-2.5'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-3.5 lg:mx-0'>
                {
                    jobs.map(job=><HotJobsCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;