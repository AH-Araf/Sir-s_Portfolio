import React from 'react';
import a from '../assets/documents/resume.pdf'
import b from '../assets/documents/cv.pdf'
import w from '../assets/education-img/cuet.png'
import x from '../assets/education-img/baiust.png'
import y from '../assets/education-img/cvc.png'
import z from '../assets/education-img/czs.png'
import l from '../assets/education-img/ywca.png'
import { motion, AnimatePresence } from "framer-motion";
import './Education.css'

const Education = () => {
    
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
                    <img src={w} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Chittagong University of Engineering and Technology</h1>
                    <h1>Chattogram, Bangladesh</h1>
                    <h2>Master of Science in Computer Science and Engineering (MS)</h2>
                    <p>CGPA: 3.92</p>
                    <p>Sep 2019 – Present</p>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={x} alt="" />
                </div>
                <div>
                    <h1 className='text-header flick-cv'>Bangladesh Army International University of Science and Technology</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Batchelor of Science in Computer Science and Engineering (BS)</h2>
                    <p>CGPA: 3.98</p>
                    <p>Mar 2015 – May 2019</p>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={y} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>Cumilla Victoria Government College</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Higher Secondary School Certificate (HSC)</h2>
                    <p>GPA: 5.00 (Golden)</p>
                    <p>Jul 2011 – Aug 2013</p>
                </div>
                </div>
            </div>

            <div className='msc-container'>
                <div>
                    <img src={z} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>Cumilla Zilla School</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Secondary School Certificate (SSC)</h2>
                    <p>GPA: 5.00 (Golden)</p>
                    <p>Jan 2005 – May 2011</p>
                </div>
                </div>
            </div>
            <div className='msc-container'>
                <div>
                    <img src={l} alt="" />
                </div>
                <div>
                <div>
                    <h1 className='text-header flick-cv'>YWCA Nursery School</h1>
                    <h1>Cumilla, Bangladesh</h1>
                    <h2>Elementary Education Level</h2>
                    <p>General Studies</p>
                    <p>Jan 2000 – Dec 2004</p>
                </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;