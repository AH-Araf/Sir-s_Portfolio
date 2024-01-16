
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AdminDashboardCommon.css';
import 'react-datepicker/dist/react-datepicker.css';
import './AdminDashboardCommon.css'
import Swal from 'sweetalert2';
import AExperience from './DashboardDetails/AExperience/AExperience';


const AdminExperience = () => {

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
                        Designation: data.Designation,
                        issueDate: data.issueDate,
                        od1: data.od1,
                        od2: data.od2,
                        od3: data.od3,
                        od4: data.od4,
                        od5: data.od5,
                        od6: data.od6,
                        od7: data.od7,
                        image: imgData.data.url,
                    };

                    fetch('https://saha-reno-portfolio-backend.onrender.com/experience', {
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
                                title: 'Experience added successfully',
                                showConfirmButton: false,
                                timer: 1500,
                            }).then(() => {
                                window.location.reload();
                            });
                        })
                        .catch(error => {
                            console.error('Error adding exp:', error);
                            Swal.fire({
                                icon: 'error',
                                title: 'Error adding exp',
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
                <h2 className="text-3xl bg-green-300 text-center p-2 rounded-lg">Add Experience Here</h2>

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
                            <label className="label"> <span className="label-text">Designation</span></label>
                            <input type="text" {...register("Designation", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.Designation && <p className='text-red-500'>{errors.Designation.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">From To<span className='font-semibold text-slate-400'>(Date)</span></span></label>
                            <input type="text" {...register("issueDate", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.issueDate && <p className='text-red-500'>{errors.issueDate.message}</p>}
                        </div>

                        {/* Other Details */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Other Details 1</span></label>
                            <input type="text" {...register("od1", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.od1 && <p className='text-red-500'>{errors.od1.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Other Details 2</span></label>
                            <input type="text" {...register("od2", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.od2 && <p className='text-red-500'>{errors.od2.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Other Details 3</span></label>
                            <input type="text" {...register("od3", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.od3 && <p className='text-red-500'>{errors.od3.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Other Details 4</span></label>
                            <input type="text" {...register("od4", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.od4 && <p className='text-red-500'>{errors.od4.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Other Details 5</span></label>
                            <input type="text" {...register("od5", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.od5 && <p className='text-red-500'>{errors.od5.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Other Details 6</span></label>
                            <input type="text" {...register("od6", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.od6 && <p className='text-red-500'>{errors.od6.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Other Details 7</span></label>
                            <input type="text" {...register("od7", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.od7 && <p className='text-red-500'>{errors.od7.message}</p>}
                        </div>
                        {/* Other Details */}

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
                <AExperience></AExperience>
            </div>
        </div>
    );
};

export default AdminExperience;