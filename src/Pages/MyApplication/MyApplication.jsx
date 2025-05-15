import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        
        // Using Axios
        // axios.get(`https://job-portal-server-rho-sandy.vercel.app/job-applications?email=${user.email}`,{withCredentials:true} )
        // .then(result=> {
            
        //     setJobs(result.data)
        // })

        axiosSecure.get(`/job-applications?email=${user.email}`)
        .then(res=>setJobs(res.data))

        

    }, [user.email,axiosSecure])


    const handleDelete = (id) => {
        fetch(`https://job-portal-server-rho-sandy.vercel.app/jobDelete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Deleted Successful')
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })

        const remaining = jobs.filter(jobs => jobs._id !== id)
        setJobs(remaining)
    }




    return (
        <div>
            <h1 className='text-2xl text-green-500 font-bold mt-3.5'>Your Applications {jobs.length}</h1>
            <div className='mt-7'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Company Name</th>
                                <th>Job Title</th>
                                <th>Job Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map(job => <tr key={job._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job?.
                                                    company
                                                }</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.title}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{job.category}</span>
                                    </td>
                                    <td>{job.jobType}</td>
                                    <th>
                                        <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xs text-red-500 text-xl border border-base-300">X</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyApplication;