import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { Link } from 'react-router-dom';
import a from '../assets/icons/facebook.png'
import b from '../assets/icons/github.png'
import c from '../assets/icons/instagram.png'
import d from '../assets/icons/linkedin.png'
import e from '../assets/icons/orcid.png'
import f from '../assets/icons/twitter1.png'
import g from '../assets/icons/whatsapp.png'
import h from '../assets/icons/telegram.png'

const Contact = () => {

    const form = useRef();
    const sendEmail = event => {
      event.preventDefault();
      emailjs.sendForm('service_cymluun', 'template_5o7j0vp', form.current, 'g0j5cDpujfr2vRjoG')
        .then((result) => {
            console.log(result.text); 
            alert('Message sent')   
             
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className='contact-body'>
        <div className='signboard3   p-5'>  
                <div className='contact-container'>
                    <p className='contact-info flick'>Contact Info</p>
                    <p>📞 +880 1706364326</p>  
                    <p>📧 reno.saha39@gmail.com</p>
                    <Link><p>🔗 https://reno_saha.github.io/MyWebsite/</p></Link>
                    <p>🏠 Cumilla 3500, Bangladesh</p>
                </div>
        </div>
        <section className='icon-section'>
        <div className='p-5 all-icons1'>
                <Link target='_blank' to='https://www.facebook.com/SahaReno'><img className='all-icons2' src={a} alt="" /></Link>
                <Link><img target='_blank'  className='all-icons3' src={b} alt="" /></Link>
                <Link target='_blank' to='https://api.whatsapp.com/send?phone=8801706364326'><div className='ax'><img className='all-icons6' src={g} alt="" /></div></Link>
                <Link target='_blank' to='https://www.linkedin.com/in/sahareno/'><img className='all-icons2' src={d} alt="" /></Link>
        </div>
        <div className='p-5 all-icons1'>       
                <Link><img target='_blank' className='all-icons4' src={c} alt="" /></Link>
                <Link target='_blank' to='https://t.me/SahaReno'><img className='all-icons2' src={h} alt="" /></Link>
                <Link target='_blank' to='https://twitter.com/SahaReno'><img className='all-icons2' src={f} alt="" /></Link>
                <Link target='_blank' to='https://orcid.org/0000-0003-1897-9002'><img className='all-icons5' src={e} alt="" /></Link>
        </div>
        </section>


            {/* Email Section */}
            <section className='mail-section'>
                
                <form className='email-from' ref={form} onSubmit={sendEmail}>
                    <h1 className='mail-header flick1 contact-info signboard3'>Send a message for Saha Reno</h1>
                    <label className='label1'>Enter Name</label>
                    <input className='input1' type="text" name="from_name" />
                    <label className='label1'>Enter Email</label>
                    <input className='input1' type="email" name="from_email" />
                    <label className='label1'>Write Message</label>
                    <textarea className='input2' name="message" />
                    <input className='send-btn'  type="submit" value="Send" />
                </form>
            </section>
        </div>
    );
};

export default Contact;