import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ViewApplication = () => {
    const loddedData = useLoaderData();
    
    const handleStatus = (e,jobId)=>{

        const data = {
            status : e.target.value
        }
       
        fetch(`https://job-portal-server-rho-sandy.vercel.app/job-applications/updateStatus/${jobId}`,{
            method : "PATCH",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.modifiedCount > 0){
                alert("Status is Updated")
            }
        })
    }

    return (
        <div>
            <h2 className='text-2xl font-semibold mt-5'>Application for this job {loddedData.length}</h2>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Applicant Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loddedData.map((appData, index) => <tr key={appData._id}>
                                <th>{index + 1}</th>
                                <td>{appData?.applicant_email}</td>
                                <td></td>
                                <td>
                                    <select onChange={(e)=>handleStatus(e, appData._id)} defaultValue={appData.status ? appData.status : "Change Status"} className="select select-sm">
                                        <option disabled={true}>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;