import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const { user } = useAuth()
    const [postedJobs, setPostedJobs] = useState([]);

    useEffect(() => {
        fetch(`https://job-portal-server-rho-sandy.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(result => setPostedJobs(result))
    }, [user.email])
    
    return (
        <div>
            <h2 className='text-2xl font-semibold mt-5'>My Posted Jobs : {postedJobs.length}</h2>

                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Company</th>
                                <th>Application Deadline</th>
                                <th>Application Count</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                postedJobs.map((postedJob,index) => 
                                    <tr key={postedJob._id}>
                                        <th>{index + 1}</th>
                                        <td>{postedJob.title}</td>
                                        <td>{postedJob.company}</td>
                                        <td>{postedJob.applicationDeadline}</td>
                                        <td>{postedJob.applicationCount ? postedJob?.applicationCount : "0"}</td>
                                        <td><Link to={`/viewApplications/${postedJob._id}`}>View</Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            
        </div>
    );
};

export default MyPostedJobs;