import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AHome from './DashboardDetails/AHome/AHome';
import Swal from 'sweetalert2';

const AdminHome = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;

    const handleAddDetails = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const profile = {
                        cv: data.cv,
                        resume: data.resume,
                        marquee: data.marquee,
                        introduction: data.introduction,
                        cwi: data.cwi,
                        designation: data.designation,
                        sd: data.sd,
                        image: imgData.data.url,
                    };

                    fetch('https://saha-reno-portfolio-backend.onrender.com/home', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(profile),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            console.log(result);
                            Swal.fire({
                                icon: 'success',
                                title: 'Profile added successfully!',
                            });
                            // navigate('/')
                            window.location.reload();
                        });
                }
            });
    };
    return (
        <div className='AdminDashBoardMainSection m-2'>

            <div>
                <h2 className="text-3xl bg-green-300 text-center p-2 rounded-lg">Set New Profile Here</h2>

                <form onSubmit={handleSubmit(handleAddDetails)}>


                    <section className="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Add CV</span></label>
                            <input type="text" {...register("cv", {
                                required: "CV is Required"
                            })} className="input  border-2 border-black w-full max-w-xs" />
                            {errors.cv && <p className='text-red-500'>{errors.cv.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Add Resume</span></label>
                            <input type="text" {...register("resume", {
                                required: "Resume is Required"
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.resume && <p className='text-red-500'>{errors.resume.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Marquee</span></label>
                            <input type="text" {...register("marquee", {
                                required: "Marquee is Required"
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.marquee && <p className='text-red-500'>{errors.marquee.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Introduction</span></label>
                            <input type="text" {...register("introduction", {
                                required: "Introductio is Required"
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.introduction && <p className='text-red-500'>{errors.introduction.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Currently Working Institution</span></label>
                            <input type="text" {...register("cwi", {
                                required: "Is Required"
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.cwi && <p className='text-red-500'>{errors.cwi.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Designation</span></label>
                            <input type="text" {...register("designation", {
                                required: "Is Required"
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.designation && <p className='text-red-500'>{errors.designation.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Start Date</span></label>
                            <input type="text" {...register("sd", {
                                required: "Is Required"
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.sd && <p className='text-red-500'>{errors.sd.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Your Image</span></label>
                            <input type="file" {...register("image", {
                                required: "Image is Required"
                            })} className="input  w-full max-w-xs" />
                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                        </div>
                    </section>
                    <input onClick={toast} className='btn btn-accent w-full mt-4 mb-10' value="Add Profile" type="submit" />
                </form>

            </div>

            <div className='w-96'>
                <AHome></AHome>
            </div>
        </div>
    );
};

export default AdminHome;