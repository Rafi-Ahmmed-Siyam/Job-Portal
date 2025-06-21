
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJobs = () => {

    const { user } = useAuth();
    const Navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const initialValue = (Object.fromEntries(formData.entries()));
        const { salaryMin, salaryMax, currency, ...newJob } = initialValue;

        newJob.salaryRange = {
            min: parseInt(salaryMin),
            max: parseInt(salaryMax),
            currency,
        }

        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');

        // console.log(newJob)

        fetch('https://job-portal-server-rho-sandy.vercel.app/addAjob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Added SuccessFull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                    Navigate('/myPostedJobs')
                }
            })


    }
    return (
        <div className='mt-24'>
            <div className="card bg-base-100 w-6xl mx-auto border border-amber-50 shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold ml-7 mt-4'>Add Your Job</h2>
                <div className="card-body">
                    <form onSubmit={handleAddJob} className="fieldset">
                        {/* Job Title */}
                        <label className="label">Job Title</label>
                        <input name='title' type="text" className="input w-full" placeholder="Job Title" />
                        {/* Job LOcation */}
                        <label className="label">Job Location</label>
                        <input name='location' type="text" className="input w-full" placeholder="Job Location" />

                        <div className='flex items-center gap-4'>
                            {/* Job Type */}
                            <div className='flex-1/3'>
                                <label className="label mb-1.5">Job Type</label>
                                <select name='jobType' defaultValue="Pick Job Type" className="select w-full">
                                    <option disabled={true} >Pick Job Type</option>
                                    <option>Full-Time</option>
                                    <option>Intern</option>
                                    <option>Part-Time</option>
                                </select>
                            </div>
                            {/* Job Category */}
                            <div className='flex-1/3'>
                                <label className="label mb-1.5">Job Category</label>
                                <select name='category' defaultValue="Pick Job Category" className="select w-full">
                                    <option disabled={true} >Pick Job Category</option>
                                    <option>Engineering</option>
                                    <option>Marketing</option>
                                    <option>Teaching</option>
                                </select>
                            </div>
                            {/* Application Dedline */}
                            <div className='flex-1/3 '>
                                <label className="label mb-1.5">Deadline</label>
                                <input name='applicationDeadline' type="date" className="input w-full" placeholder="Pick a Date" />
                            </div>
                        </div>
                        {/* Salary Range */}
                        <label className="label text-lg mt-1.5">Salary Range</label>
                        <div className='flex items-center justify-between gap-2.5'>
                            {/* min */}
                            <div className='flex-1/3'>
                                <label className="label">Min</label>
                                <input name='salaryMin' type="number" className="input w-full" placeholder="Min" />
                            </div>
                            {/* Max */}
                            <div className='flex-1/3'>
                                <label className="label">Max</label>
                                <input name='salaryMax' type="number" className="input w-full" placeholder="Max" />
                            </div>
                            {/* Curency */}
                            <div className='flex-1/3'>
                                <label className="label">Curency</label>
                                <select name='currency' defaultValue="Select Currency" className="select w-full">
                                    <option disabled={true} >Select Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </select>
                            </div>

                        </div>
                        {/* Description */}
                        <label className="label">Job Description</label>
                        <textarea name='description' className="textarea w-full" placeholder="Description"></textarea>
                        {/* Job Title */}
                        <label className="label">Company Name</label>
                        <input name='company' type="text" className="input w-full" placeholder="Company Name" />
                        {/* Requirments */}
                        <label className="label">Job Requirments</label>
                        <textarea name='requirements' className="textarea w-full" placeholder="Put Each requirements in a new line"></textarea>
                        {/* Responsibilities */}
                        <label className="label">Job Responsibilities</label>
                        <textarea name='responsibilities' className="textarea w-full" placeholder="Put Each responsibilities in a new line"></textarea>
                        {/* HR Name */}
                        <label className="label">HR Name</label>
                        <input name='hr_name' type="text" className="input w-full" placeholder="HR Name" />
                        {/* HR Email */}
                        <label className="label">HR Email</label>
                        <input readOnly disabled name='hr_email' defaultValue={user?.email} type="email" className="text-white input w-full" placeholder="HR Email" />
                        {/* Company Logo URL */}
                        <label className="label">Company Logo URL</label>
                        <input name='company_logo' type="url" className="input w-full" placeholder="Company Logo URL" />
                        {/* SubMin Button */}
                        <button className="btn btn-neutral mt-4">Add Job</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;