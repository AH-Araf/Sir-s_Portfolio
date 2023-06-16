import React from 'react';
import b from '../assets/images/b.jpg'
import './Home.css'
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    
    return (
        <div>  
            <div className='display-flex'>
                <div><img className='profile-photo' src={b} alt="" /></div>

{/* Auto Write */}
                <div className=' display-flex1'>
                <div >
                <h1 style={{ paddingTop: '', margin: '', fontWeight: '' }}>
                {' '}
        <span className='s-text'>
          <Typewriter
            words={['Hello!', 
            'I am Saha Reno', 
            'Teaching Professional & Research Scholar', 
            
        ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
                </div>
                <p>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure eius placeat! Minus, veritatis cum? Deserunt dolor, odio fugiat id enim mollitia, placeat repudiandae illum fuga soluta natus aperiam totam?
              olores? ConsecteturEveniet, sit, earum cumque vel odio nesciunt ut porro maiores necessitatibus neque aut blanditiis! Voluptatem eveniet, ratione corporis ipsum ab molestiae voluptatibus eius? Culpa voluptates vel rem tenetur incidunt nesciunt?</p>
                </div>
                

                

            </div>

        </div>
    );
};

export default Home;