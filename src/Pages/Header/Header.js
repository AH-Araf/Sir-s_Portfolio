import React from 'react';
import { Link } from 'react-router-dom';
import a from '../assets/images/a.png'
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-slate-500 ">
  <div className="navbar-start">
    <div className="dropdown">
    {/* lg:hidden */}
      <label tabIndex={0} className="btn btn-ghost     ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-slate-500 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className='header-option1'><Link to='/'>Home</Link></li>
        {/* <li tabIndex={0}>
        <details>
          <summary className='header-option1'>Publication</summary>
          <ul className="p-2">
            <li className='header-option1'><Link>Journal Article</Link></li>
            <li className='header-option1' ><Link>Conference Paper</Link></li>
          </ul>
        </details>
      </li> */}
     
      <li className='header-option1'><Link to='/article-paper'>Article & Paper</Link></li>
        <li className='header-option1'><Link to='/skills'>Certificate</Link></li>
        <li className='header-option1'><Link to='/education'>Education</Link></li>
        <li className='header-option1'><Link to='/experience'>Experience</Link></li>
        <li className='header-option1'><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
    
    <div  >
        <img className='header-image' src={a} alt="" />   
    </div>                       
  </div>











  {/* Nav Big */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li  className='header-option1'><Link to='/'>Home</Link></li>
        {/* <li tabIndex={0}>
        <details>
          <summary className='header-option1'>Publication</summary>
          <ul className="p-2">
            <li className='header-option1'><Link>Journal Article</Link></li>
            <li className='header-option1'><Link>Conference Paper</Link></li>
          </ul>
        </details>
      </li> */}
      
      <li className='header-option1'><Link to='/article-paper'>Article & Paper</Link></li>
        <li className='header-option1'><Link to='/skills'>Certificate</Link></li>
        <li className='header-option1'><Link to='/education'>Education</Link></li>
        <li className='header-option1'><Link to='/experience'>Experience</Link></li>
        <li className='header-option1'><Link to='/contact'>Contact</Link></li>
    </ul>
  </div>
  
</div>
    );
};

export default Header;