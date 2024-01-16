
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AdminDashboardCommon.css';
import 'react-datepicker/dist/react-datepicker.css';
import './AdminDashboardCommon.css'
import Swal from 'sweetalert2';
import AEducation from './DashboardDetails/AEducation/AEducation';

const AdminEducation = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;


    const handleAddCertificate = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const certificateData = {
                        institute: data.institute,
                        locations: data.locations,
                        program: data.program,
                        CGPA: data.CGPA,
                        issueDate: data.issueDate,
                        image: imgData.data.url,
                    };

                    fetch('https://saha-reno-portfolio-backend.onrender.com/education', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(certificateData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            Swal.fire({
                                icon: 'success',
                                title: 'Program added successfully',
                                showConfirmButton: false,
                                timer: 1500,
                            }).then(() => {
                                window.location.reload();
                            });
                        })
                        .catch(error => {
                            console.error('Error adding program:', error);
                            Swal.fire({
                                icon: 'error',
                                title: 'Error adding program',
                            });
                        });
                }
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error uploading image',
                });
            });
    };

    return (
        <div className='AdminDashBoardMainSection m-2'>

            <div>
                <h2 className="text-3xl bg-green-300 text-center p-2 rounded-lg">Add Degree Here</h2>

                <form onSubmit={handleSubmit(handleAddCertificate)}>


                    <section className="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Institute</span></label>
                            <input type="text" {...register("institute", {
                                required: "institute is Required"
                            })} className="input  border-2 border-black w-full max-w-xs" />
                            {errors.institute && <p className='text-red-500'>{errors.institute.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("locations", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.locations && <p className='text-red-500'>{errors.locations.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Program</span></label>
                            <input type="text" {...register("program", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.program && <p className='text-red-500'>{errors.program.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">CGPA</span></label>
                            <input type="text" {...register("CGPA", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.CGPA && <p className='text-red-500'>{errors.CGPA.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">From To<span className='font-semibold text-slate-400'>(Date)</span></span></label>
                            <input type="text" {...register("issueDate", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.issueDate && <p className='text-red-500'>{errors.issueDate.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Institute Logo</span></label>
                            <input type="file" {...register("image", {
                                required: "Image is Required"
                            })} className="input  w-full max-w-xs" />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>
                    </section>
                    <input onClick={toast} className='btn btn-accent w-full mt-4 mb-10' value="Add" type="submit" />
                </form>

            </div>

            <div className='w-96'>
                <AEducation></AEducation>
            </div>
        </div>
    );
};

export default AdminEducation;