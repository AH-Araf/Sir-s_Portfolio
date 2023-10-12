import React from 'react';
import b from '../assets/images/b.jpg'
import d from '../assets/documents/resume.pdf'
import e from '../assets/documents/cv.pdf'
import './Home.css'
// import { Typewriter } from 'react-simple-typewriter';
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className='home-body'>
      <section className='sec-1'>
        <motion.div className='display-flex'
          initial={{ opacity: "00", }}
          animate={{ opacity: "100%", }}
          exit={{ opacity: "100%", }}
        >
          <div className='img-sec'><img className='profile-photo' src={b} alt="" />
            <div className='cv-resume mt-5'>
              <a className='btn btn-outline ' href={e} download={e.pdf}>Download CV</a>
              <a className='btn btn-outline  mt-top' href={d} download={d.pdf}>Download Resume</a>
            </div>
          </div>

          {/* Auto Write */}
          <div className=' display-flex1'>
            <div >
              <h1 style={{ paddingTop: '', margin: '', fontWeight: '' }}>
                {' '}
                {/* <span className='s-text'>
          <Typewriter
            words={['Hello!', 
            'I am Saha Reno', 
            'Teaching Professional', 
            'Research Scholar',
            'Lecturer, CSE at BAIUST',
            'Instructor, CSE at UniStudies',
            'Blockchain Specialist'
            
        ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1000}
            
          />
        </span> */}

                <Marquee>
                  <h1 className='marquee-css'>
                    . Hello! I am Saha Reno. Teaching Professional. Research Scholar.
                    Lecturer, CSE at BAIUST. Instructor, CSE at UniStudies. Blockchain Specialist
                  </h1>
                </Marquee>



              </h1>
            </div>
            <h3 className='intro'>Introduction</h3>
            <p className='bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure eius placeat! Minus, veritatis cum? Deserunt dolor, odio fugiat id enim mollitia, placeat repudiandae illum fuga soluta natus aperiam totam?
              olores? ConsecteturEveniet, sit, earum cumque vel odio nesciunt ut porro maiores necessitatibus neque aut blanditiis! Voluptatem eveniet, ratione corporis ipsum ab molestiae voluptatibus eius? Culpa voluptates vel rem tenetur incidunt nesciunt?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure eius placeat! Minus, veritatis cum? Deserunt dolor, odio fugiat id enim mollitia, placeat repudiandae illum fuga soluta natus aperiam totam?
              olores? ConsecteturEveniet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure eius placeat! Minus, veritatis cum? Deserunt dolor, odio fugiat id enim mollitia, placeat repudiandae illum fuga soluta natus aperiam totam?
              olores? ConsecteturEvenietdfgdfg
              </p>
          </div>




        </motion.div>
      </section>


      {/* Second Section */}
      <section className='s2-header'>
        <motion.div
          initial={{ opacity: "00", }}
          animate={{ opacity: "100%", }}
          exit={{ opacity: "100%", }}
        >
          <h1 className='h1'>Currently Working</h1>
          <h3 className='h3'>Bangladesh Army International University of Science and Technology, Cumilla Cantonment, Bangladesh</h3>
          <p className='p'>Lecturer (Computer Science & Engineering) – Permanent for Full Time Service</p>
          <p className='p'>Mar 2019 – Present</p>

        </motion.div>

      </section>

      <section>

      </section>




    </div>
  );
};

export default Home;










