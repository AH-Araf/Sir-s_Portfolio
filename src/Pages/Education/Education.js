import React, { useEffect, useState } from 'react';
// import w from '../assets/education-img/cuet.png'
// import x from '../assets/education-img/baiust.png'
// import y from '../assets/education-img/cvc.png'
// import z from '../assets/education-img/czs.png'
// import l from '../assets/education-img/ywca.png'
import './Education.css'

const Education = () => {

    const [certificate, setCertificate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/education');
                const data = await response.json();
                setCertificate(data);
                setLoading(false); // Set loading to false after data is received
            } catch (error) {
                console.error('Error fetching user details:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchData();
    }, []);

    return (
        <div className='education-body'>

            {/* Dynamic Start */}
            <div >
                {loading && <div className='MainLoader text-center py-52'><span class="loader"></span></div>}
                {!loading && certificate?.map((a) => (
                    <div key={a._id}>

                        <div className='msc-container'>
                            <div>
                                <img src={a.image} alt="" />
                            </div>

                            <section className='msc-container-text'>
                                <div>
                                    <h1 className='text-header'>{a.institute}</h1>
                                    <h1>{a.locations}</h1>
                                    <h2>{a.program}</h2>
                                    <p>{a.CGPA}</p>
                                    <p>{a.issueDate}</p>
                                </div>
                            </section>

                        </div>

                    </div>
                ))}
            </div>
            {/*  */}
        </div>
    );
};

export default Education;