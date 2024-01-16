import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AHome = () => {
    const [home, setHome] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHome = async () => {
        try {
            const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/home');
            const data = await response.json();
            setHome(data);
            setLoading(false); // Set loading to false after data is received
        } catch (error) {
            console.error('Error fetching home:', error);
            setLoading(false); // Set loading to false in case of an error
        }
    };

    const handleDelete = async (id) => {
        try {
            const confirmDelete = await Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!',
            });

            if (confirmDelete.isConfirmed) {
                await fetch(`https://saha-reno-portfolio-backend.onrender.com/home/${id}`, {
                    method: 'DELETE',
                });

                await Swal.fire('Deleted!', 'Your profile has been deleted.', 'success');
                fetchHome();
            }
        } catch (error) {
            console.error('Error deleting certificate:', error);
            // Handle the error, e.g., display an error message
        }
    };

    useEffect(() => {
        fetchHome();
    }, []);

    return (
        <div>
            {loading && <div className='MainLoader text-center py-52'><span className="loader"></span></div>}
            {!loading && home?.map((a) => (
                <div className='certificateSectionBackend' key={a._id}>
                    <img className='h-52 w-44 mb-4 rounded-lg border-4 border-green-300' src={a.image} alt="" />
                    <p><b>Introduction:</b> {a.introduction}</p>
                    <p><b>Marquee:</b> {a.marquee}</p>
                    <p><b>Currently Working:</b> {a.cwi}</p>
                    <p><b>Designation:</b> {a.designation}</p>
                    <button className='btn  btn-error mt-2' onClick={() => handleDelete(a._id)}>Delete Profile</button>
                    {/* <Link to={`/home/${a._id}`}>Update</Link> */}
                </div>
            ))}
        </div>
    );
};

export default AHome;
