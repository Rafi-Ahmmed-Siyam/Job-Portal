import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [appData, setAppData] = useState({})

    useEffect(() => {
        fetch(`https://job-portal-server-rho-sandy.vercel.app/jobs/${id}`)
            .then(res => res.json())
            .then(result => setAppData(result))
    }, [id])


    const handleJobApplication = (e) => {
        e.preventDefault()
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user?.email,
            linkdin,
            github,
            resume,
        }

        fetch('https://job-portal-server-rho-sandy.vercel.app/job-applications', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    title: "Submitted Successfull",
                    icon: "success",
                    draggable: true
                });
                e.target.reset;
                navigate('/myApplications')
            })
    }
    return (
        <div className=''>
            <div className='mt-12'>
                <div className='flex justify-center items-center'>
                    <img src={appData.company_logo} alt="" />
                </div>
                <h2 className='text-center mt-3'>Company : {appData.company}</h2>
                <h2 className='text-center mt-1'>Job Title : {appData.title}</h2>
                <p className='text-center w-3xl mx-auto mt-1'>{appData.description}</p>
            </div>
            <div className="hero-content  mt-5">
                <div className="card bg-base-100  w-full lg:w-3xl    shadow-2xl border">
                    <div className="card-body">
                        <h1 className="text-4xl mb-2.5 font-bold text-start md:text-center lg:text-center">Apply now!</h1>
                        <form onSubmit={handleJobApplication} className="fieldset">
                            <label className="fieldset-label ">LinkedIn URL</label>
                            <input name='linkdin' type="url" className="input  w-full" placeholder="Enter Your LinkedIn URL" />
                            <label className="fieldset-label mt-2.5">Github URL</label>
                            <input name='github' type="url" className="input  w-full" placeholder="Enter your Github URL" />
                            <label className="fieldset-label mt-2.5">Resume URL</label>
                            <input name='resume' type="url" className="input w-full" placeholder="Enter your Resume URL" />

                            <button className="btn btn-neutral mt-4">Apply</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobApply;