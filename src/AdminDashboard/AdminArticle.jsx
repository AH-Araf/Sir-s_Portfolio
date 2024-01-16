import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AdminDashboardCommon.css';
import Certificate from './DashboardDetails/Certificate/Certificate';
import './AdminDashboardCommon.css';
import Swal from 'sweetalert2';
import AArticle from './DashboardDetails/Article/AArticle';

const AdminArticle = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleAddArticle = data => {
        const certificateData = {
            title: data.title,
            authors: data.authors,
            DOI: data.DOI,
            ISSN: data.ISSN,
            link: data.link,
            Conference: data.Conference,
            types: data.types,
            od1: data.od1,
            od2: data.od2,
            od3: data.od3,
            od4: data.od4,
            od5: data.od5,
        };

        fetch('https://saha-reno-portfolio-backend.onrender.com/article', {
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
                    title: 'Article added successfully',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.location.reload();
                });
            })
            .catch(error => {
                console.error('Error adding Article:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error adding Article',
                });
            });
    };

    return (
        <div className='AdminDashBoardMainSection m-2'>
            <div>
                <h2 className="text-3xl bg-green-300 text-center p-2 rounded rounded-lg">Add Article Here</h2>
                <form onSubmit={handleSubmit(handleAddArticle)}>
                    <section className="">

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Paper Type</span></label>
                            <select
                                {...register('types')}
                                className="select border-2 border-black w-full max-w-xs">
                                {<option>Journal</option>}
                                {<option>Conference Paper</option>}
                                {<option>Book Chapter</option>}
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Title</span></label>
                            <input type="text" {...register("title", {
                                required: "Title is Required"
                            })} className="input  border-2 border-black w-full max-w-xs" />
                            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Authors</span></label>
                            <input type="text" {...register("authors", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.authors && <p className='text-red-500'>{errors.authors.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">DOI</span></label>
                            <input type="text" {...register("DOI", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.DOI && <p className='text-red-500'>{errors.DOI.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">ISSN</span></label>
                            <input type="text" {...register("ISSN", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.ISSN && <p className='text-red-500'>{errors.ISSN.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Paper Link</span></label>
                            <input type="text" {...register("link", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.link && <p className='text-red-500'>{errors.link.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Conference</span></label>
                            <input type="text" {...register("Conference", {
                                required: false
                            })} className="input border-2 border-black w-full max-w-xs" />
                            {errors.Conference && <p className='text-red-500'>{errors.Conference.message}</p>}
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


                    </section>
                    <input onClick={toast} className='btn btn-accent w-full mt-4 mb-10' value="Add" type="submit" />
                </form>
            </div>
            <div className='w-96'>
                <AArticle></AArticle>
            </div>
        </div>
    );
};

export default AdminArticle;
