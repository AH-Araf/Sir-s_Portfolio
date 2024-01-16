import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const AExperience = () => {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCertificates = async () => {
        try {
            const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/experience');
            const data = await response.json();
            setCertificates(data);
            setLoading(false); // Set loading to false after data is received
        } catch (error) {
            console.error('Error fetching experience:', error);
            setLoading(false); // Set loading to false in case of an error
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                await fetch(`https://saha-reno-portfolio-backend.onrender.com/experience/${id}`, {
                    method: 'DELETE',
                });

                fetchCertificates();

                Swal.fire({
                    icon: 'success',
                    title: 'Experience deleted successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (error) {
                console.error('Error deleting experience:', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Error deleting experience',
                });
            }
        }
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    return (
        <div>
            {loading && <div className='MainLoader text-center py-52'><span className="loader"></span></div>}
            {!loading && certificates?.map((certificate) => (
                <div className='certificateSectionBackend' key={certificate._id}>
                    <img className='h-44 w-36 border-4 border-green-300' src={certificate.image} alt="" />
                    <p className='font-bold'>{certificate.institute}</p>
                    <p>{certificate.Designation}</p>
                    <p>{certificate.issueDate}</p>

                    <button className='btn  btn-error' onClick={() => handleDelete(certificate._id)}>Delete</button>
                    {/* <Link to={`/update-certificate/${certificate._id}`}>Update</Link> */}
                </div>
            ))}
        </div>
    );
};

export default AExperience;
