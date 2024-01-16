import React, { useState, useEffect } from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const UpdateCertificate = () => {
    const { id } = useParams(); // Get certificate ID from the URL
    const history = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [certificate, setCertificate] = useState(null);

    const fetchCertificateById = async (certificateId) => {
        try {
            const response = await fetch(`https://saha-reno-portfolio-backend.onrender.com/certificates/${certificateId}`);
            const data = await response.json();
            setCertificate(data);
        } catch (error) {
            console.error('Error fetching certificate:', error);
        }
    };

    const updateCertificate = async (data) => {
        try {
            await fetch(`https://saha-reno-portfolio-backend.onrender.com/certificates/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            history.push('/certificates'); // Redirect to the certificates page after update
        } catch (error) {
            console.error('Error updating certificate:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchCertificateById(id);
        }
    }, [id]);

    useEffect(() => {
        // Populate the form fields with the existing certificate data
        if (certificate) {
            Object.keys(certificate).forEach((key) => {
                setValue(key, certificate[key]);
            });
        }
    }, [certificate, setValue]);

    return (
        <div>
            <h2>Update Certificate</h2>
            {certificate && (
                <form onSubmit={handleSubmit(updateCertificate)}>
                    {/* Your form fields here */}
                    <label>
                        Institute:
                        <input type="text" {...register('institute')} />
                    </label>
                    <label>
                        Location:
                        <input type="text" {...register('locations')} />
                    </label>
                    <label>
                        Type:
                        <input type="text" {...register('type')} />
                    </label>
                    <label>
                        Duration:
                        <input type="text" {...register('duration')} />
                    </label>
                    {/* Add other fields as needed */}
                    <button type="submit">Update</button>
                </form>
            )}
        </div>
    );
};

export default UpdateCertificate;
