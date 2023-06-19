import React from 'react';

import x from '../assets/education-img/baiust.png'
import y from '../assets/education-img/reve.png'

import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
    return (
        <motion.div className='education-body'
        initial={{opacity: "00", }}
            animate={{opacity: "100%", }}
            exit={{opacity: "100%",  }}>
            {/* <div className='cv-resume'>
                <a className='btn btn-outline btn-info' href={b} download={b.pdf}>Download CV</a>
                <a className='btn btn-outline btn-info mt-top' href={a} download={a.pdf}>Download Resume</a> 
            </div> */}


            <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Bangladesh Army International University of Science and Technology</h1>
                    <h1>Lecturer (Computer Science & Engineering) – Permanent for Full Time Service</h1>
                    <p>Mar 2015 – May 2019</p>
                    <small>• Designing, preparing, and delivering lectures, tutorials, seminars, and workshops. <br />
                            • Developing curricula and course materials for several platforms. <br />
                            • Collaborating with other academics to improve teaching methods and extend knowledge base. <br />
                            • Setting and grading assignments, tests, and exams. <br />
                            • Conducting research and writing papers, proposals, journal articles, and books. <br />
{/* • Attending and participating in meetings, conferences, training opportunities and initiatives in and outside 
the institution. <br /> */}
                            • Staying current by reading widely and producing published work in the field.</small>
                    
                </div>
            </div>

            {/* <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>Bangladesh Army International University of Science and Technology</h1>
                    <h1>Lecturer (Computer Science & Engineering) – Permanent for Full Time Service</h1>
                    <p>Mar 2015 – May 2019</p>
                    <small>• Designing, preparing, and delivering lectures, tutorials, seminars, and workshops. <br />
                            • Developing curricula and course materials for several platforms. <br />
                            • Collaborating with other academics to improve teaching methods and extend knowledge base. <br />
                            • Setting and grading assignments, tests, and exams. <br />
                            • Conducting research and writing papers, proposals, journal articles, and books. <br />
                            • Attending and participating in meetings, conferences, training opportunities and initiatives in and outside the institution. <br />
                            • Staying current by reading widely and producing published work in the field.</small> <br />
                
                </div>
                </div>
            </div> */}

            <div className='msc-container'>
                <div>
                    <img src={y} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>REVE Systems</h1>
                    <h1>Software Engineering Intern</h1>
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
                    <h1 className='text-header flick-cv'>Bangladesh Army International University of Science and Technology</h1>
                    <h1>Assistant Provost for BAIUST Male Hall</h1>
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
                    <h1 className='text-header flick-cv'>Bangladesh Army International University of Science and Technology</h1>
                    <h1>Program Coordinator for Computer, Science & Engineering Department</h1>
                    <p>Aug 2022 – Present</p>
                    <small>• Providing specialized administrative support in developing, implementing, and marketing program functions. <br />
                            • Serving as a central point of contact between students, faculty, staff, other departments, and external constituencies on day-to-day programmatic, operational, and administrative matters; assisting with seminars, meetings, special projects, and general problem resolution. <br />
                            • Coordinating activities of support staff, consultants, faculty, and volunteers engaged in implementing and administering program objectives. <br />
                            • Monitoring and administering program revenues and expenses with developing and participating developing of funding proposals for the program.</small> <br />
                
                </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Experience;