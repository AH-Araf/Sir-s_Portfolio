import React, { useEffect, useState } from 'react';
// import a from '../assets/certificate/a.png'
// import b from '../assets/certificate/b.png'
// import c from '../assets/certificate/c.png'
// import d from '../assets/certificate/d.png'
// import e from '../assets/certificate/e.png'
// import f from '../assets/certificate/f.png'
// import g from '../assets/certificate/g.png'
// import h from '../assets/certificate/h.png'
// import i from '../assets/certificate/i.png'
// import j from '../assets/certificate/j.png'
// import k from '../assets/certificate/k.png'
// import l from '../assets/certificate/l.png'
// import m from '../assets/certificate/m.png'
// import n from '../assets/certificate/n.png'
// import o from '../assets/certificate/o.png'
// import p from '../assets/certificate/p.png'
// import q from '../assets/certificate/q.png'
// import r from '../assets/certificate/r.png'
// import s from '../assets/certificate/s.png'
// import t from '../assets/certificate/t.png'
// import u from '../assets/certificate/u.png'
// import v from '../assets/certificate/v.png'
// import wSSC from '../assets/certificate/wSSC.png'
// import xHSC from '../assets/certificate/xHSC.png'
// import yBSc from '../assets/certificate/yBSc.png'
// import zMSc from '../assets/certificate/zMSc.png'
import './Skills.css'

const Skills = () => {
    const [certificate, setCertificate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/certificates');
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
        <div className='body-cer'>
            <div className='certificate-image'>
                {loading && <div className='MainLoader text-center py-52'><span class="loader"></span></div>}
                {!loading && certificate?.map((a) => (
                    <div key={a._id}>
                        <div className='msc-containerS'>
                            <div>
                                <img src={a.image} alt="" />
                            </div>
                            <div>
                                <h1 className='t-header'>{a.institute}</h1>
                                <span className='t-body'>
                                    <h1>{a.locations}</h1>
                                    <h1>{a.type}</h1>
                                    <p>{a.issueDate}</p>
                                    <p>{a.duration}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;