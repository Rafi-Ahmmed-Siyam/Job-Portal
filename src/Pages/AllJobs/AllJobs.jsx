import React, { useState } from 'react';
import useJobs from '../../Hooks/useJobs';
import HotJobsCard from '../Home/HotJobsCard';
import { HashLoader } from 'react-spinners';
import { BiSearch } from 'react-icons/bi';

const AllJobs = () => {
   const [sort, setSort] = useState(false);
   const [search, setSearch] = useState("");
   const [minSalary, setMinsalary] = useState("");
   const [maxSalary, setMaxsalary] = useState("");
   const { jobs, loding } = useJobs(sort, search, minSalary, maxSalary);



   if (loding) return <div className='flex justify-center items-center h-screen'>
      <HashLoader color='#2cf6d1' />
   </div>
   return (
      <div>
         <h1 className='text-4xl font-bold py-5 text-center'> All Jobs </h1>
         <div className=' flex items-center gap-5'>
            <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && 'btn-success text-white'}`} >{sort ? 'Sorted by Salery' : 'Sort job By salery'}</button>
            <BiSearch />
            <input onKeyUp={(e) => setSearch(e.target.value)} type="text" className='input w-full max-w-2xl' placeholder='Search by location' />

            <div className='space-y-3'>
               <input onKeyUp={(e) => setMinsalary(e.target.value)} type="number" className='input w-full max-w-xs' placeholder='Min Salary' />
               <input onKeyUp={(e) => setMaxsalary(e.target.value)} type="number" className='input w-full max-w-xs' placeholder='Max Salary' />
            </div>
         </div>
         <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-3.5 lg:mx-0'>
            {
               jobs.map(job => <HotJobsCard key={job._id} job={job} />)
            }
         </div>
      </div>
   );
};

export default AllJobs;