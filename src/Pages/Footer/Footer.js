import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='footer mt-16'>
            <div className='footer-container p-5'>
            <p><small>All copyright reserved </small>
            @ BD Vacancies
            </p>
            <p>
                
                <small>E-mail: bdvacancies@gmail.com</small><br />
                <small>Mobile: 01312-010261</small>
            </p>
            </div>
            <i class="fa-solid fa-flag"></i>
            <FontAwesomeIcon icon={faEnvelope} />
            <div className='p-5'>
                {/* <Link to='https://www.facebook.com/profile.php?id=100005652766637'>Facebook</Link>
                <Link to='https://www.linkedin.com/in/ah-araf/'>Linkedin</Link> */}
                <Link to=''>Facebook</Link>
                <Link to=''>Linkedin</Link>
            </div>
        </div>
    );
};

export default Footer;