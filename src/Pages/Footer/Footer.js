import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import a from '../assets/icons/facebook.png'
import b from '../assets/icons/github.png'
import c from '../assets/icons/instagram.png'
import d from '../assets/icons/linkedin.png'
import e from '../assets/icons/orcid.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container p-5'>
            <p><small>All copyright reserved @ Saha Reno</small></p>
            <p>
                
                <small>📧 reno.saha39@gmail.com</small><br />
                <small>📞 +880 1706364326</small> <br />
                    <small>🏠 Cumilla 35<span><Link to='/dashboard/adminHome'>0</Link></span>0, BD</small>
            </p>
            </div>
            {/* <i class="fa-solid fa-flag"></i> */}
            
          
            <div className='p-5 all-icons'>
                <Link target='_blank' to='https://www.facebook.com/SahaReno'><img className='img1' src={a} alt="" /></Link>
                <img target='_blank' className='img2' src={b} alt="" />
                <img target='_blank' className='img3' src={c} alt="" />
                <Link target='_blank' to='https://www.linkedin.com/in/sahareno/'><img className='img4' src={d} alt="" /></Link>
                <Link target='_blank' to='https://orcid.org/0000-0003-1897-9002'><img className='img5' src={e} alt="" /></Link>
            </div>
        </div>
    );
};

export default Footer;