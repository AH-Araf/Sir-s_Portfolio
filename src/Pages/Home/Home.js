import React, { useEffect, useState } from 'react';
import './Home.css';
import Marquee from 'react-fast-marquee';

const Home = () => {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/home');
        const data = await response.json();
        setHome(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching user details:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='MainLoader text-center py-52'><span class="loader"></span></div>;
  }

  return (
    <div>
      {home?.map((a) => (
        <div className='home-body' key={a.id}>
          <section className='sec-1'>
            <div className='display-flex'>
              <div className='img-sec'>
                <img className='profile-photo' src={a.image} alt="" />
                <div className='cv-resume mt-5'>
                  <a
                    className='btn btn-outline'
                    href={`${a.cv}`}
                    download={`YourCVFileName.pdf`}
                  >
                    Download CV
                  </a>
                  <a
                    className='btn btn-outline'
                    href={a.resume}
                    download={`YourCVFileName.pdf`}
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Auto Write */}
              <div className='display-flex1'>
                <div>
                  <h1 style={{ paddingTop: '', margin: '', fontWeight: '' }}>
                    {' '}
                    <Marquee>
                      <h1 className='marquee-css'>{a.marquee}</h1>
                    </Marquee>
                  </h1>
                </div>
                <h3 className='intro'>Introduction</h3>
                <p className='bio'>{a.introduction}</p>
              </div>
            </div>
          </section>

          <section className='s2-header'>
            <div>
              <h1 className='h1'>Currently Working</h1>
              <h3 className='h3'>{a.cwi}</h3>
              <p className='p'>{a.designation}</p>
              <p className='p'>{a.sd} – Present</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Home;
