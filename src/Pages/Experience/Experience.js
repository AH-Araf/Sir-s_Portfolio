import React, { useEffect, useState } from 'react';

import x from '../assets/education-img/baiust.png'
import y from '../assets/education-img/reve.png'
import z from '../assets/education-img/uni.jpg'


import { Link } from 'react-router-dom';

const Experience = () => {
    const [certificate, setCertificate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/experience');
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


            <div >
                {loading && <div className='MainLoader text-center py-52'><span class="loader"></span></div>}
                {!loading && certificate?.map((a) => (
                    <div key={a._id}>

                        <div className='msc-container'>
                            <div>
                                <img src={a.image} alt="" />
                            </div>

                            <div>
                                <h1 className='text-header '>{a.institute}</h1>
                                <h1 className='msc-containerXY'>{a.Designation}</h1>
                                <p>{a.issueDate}</p>
                                <small>
                                    {a.od1} <br />
                                    {a.od2} <br />
                                    {a.od3} <br />
                                    {a.od4} <br />
                                    {a.od5} <br />
                                    {a.od6} <br />
                                    {a.od7} <br />
                                </small> <br />
                                <Link target='_blank' to='https://baiust.ac.bd/?page_id=2749' className='btn btn-outline mt-4'>View Details</Link>
                            </div>

                        </div>

                    </div>
                ))}
            </div>



            <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                    <h1 className='text-header '>Bangladesh Army International University of Science and Technology</h1>
                    <h1 className='msc-containerXY'>Lecturer (Computer Science & Engineering) – Permanent for Full Time Service</h1>
                    <p>Mar 2015 – May 2019</p>
                    <small>• Designing, preparing, and delivering lectures, tutorials, seminars, and workshops. <br />
                        • Developing curricula and course materials for several platforms. <br />
                        • Collaborating with other academics to improve teaching methods and extend knowledge base. <br />
                        • Setting and grading assignments, tests, and exams. <br />
                        • Conducting research and writing papers, proposals, journal articles, and books. <br />
                        • Staying current by reading widely and producing published work in the field.</small> <br />
                    <Link target='_blank' to='https://baiust.ac.bd/?page_id=2749' className='btn btn-outline mt-4'>View Details</Link>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={z} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-header'>UniStudies</h1>
                        <h1 className='msc-containerXY'>Instructor & Mentor at UniStudies</h1>
                        <p>March 26, 2023 – Present</p>
                        <Link target='_blank' to='https://www.facebook.com/photo/?fbid=180407971420517&set=pb.100083539449661.-2207520000.&locale=hi_IN' className='btn btn-outline mt-4'>View Details</Link>
                        {/* <small>• Developed flowcharts, layouts, and documentation to identify requirements and solutions. <br />
                            • Integrate software components into a fully functional software system, including writing well-designed and testable code. <br /> 
                            • Worked to troubleshoot, debug, and maintain software functionality. <br />
                            • Complied with project plans and industry standards with ensuring software is revised with latest features.</small> <br />
                 */}
                    </div>
                </div>
            </div>


            <div className='msc-container'>
                <div>
                    <img src={y} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-header'>REVE Systems</h1>
                        <h1 className='msc-containerXY'>Software Engineering Intern</h1>
                        <p>Feb 2018 – Feb 2018</p>
                        <small>• Developed flowcharts, layouts, and documentation to identify requirements and solutions. <br />
                            • Integrate software components into a fully functional software system, including writing well-designed and testable code. <br />
                            • Worked to troubleshoot, debug, and maintain software functionality. <br />
                            • Complied with project plans and industry standards with ensuring software is revised with latest features.</small> <br />
                    </div>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-header '>Bangladesh Army International University of Science and Technology</h1>
                        <h1 className='msc-containerXY'>Assistant Provost for BAIUST Male Hall</h1>
                        <p>Feb 2021 – June 2022</p>
                        <small>• Implemented and administrated policies and regulations affecting faculty and students. <br />
                            • Maintained confidentiality, exercised good judgment, and acted professionally, sensitively, and with high discretion. <br />
                            • Fostered communications, facilitated implementation, and troubleshoot problems in academic planning and practices across all levels of the university.</small> <br />

                    </div>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-header '>Bangladesh Army International University of Science and Technology</h1>
                        <h1 className='msc-containerXY'>Program Coordinator for Computer, Science & Engineering Department</h1>
                        <p>Aug 2022 – Present</p>
                        <small>• Providing specialized administrative support in developing, implementing, and marketing program functions. <br />
                            • Serving as a central point of contact between students, faculty, staff, other departments, and external constituencies on day-to-day programmatic, operational, and administrative matters; assisting with seminars, meetings, special projects, and general problem resolution. <br />
                            • Coordinating activities of support staff, consultants, faculty, and volunteers engaged in implementing and administering program objectives. <br />
                            • Monitoring and administering program revenues and expenses with developing and participating developing of funding proposals for the program.</small> <br />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Experience;