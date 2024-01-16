import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiCertificateBold, PiStudentBold } from "react-icons/pi";
import { MdWorkOutline, MdExitToApp } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import './Dashboard.css'
const Dashboard = () => {
    //
    const storedAuthToken = localStorage.getItem('authToken');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [home, setHome] = useState([]);
    const fetchHome = async () => {
        try {
            const response = await fetch('https://saha-reno-portfolio-backend.onrender.com/home');
            const data = await response.json();
            setHome(data);
        } catch (error) {
            console.error('Error fetching home:', error);
        }
    };

    useEffect(() => {
        if (storedAuthToken) {
            // If there is a stored token, consider the user as logged in
            setLoggedIn(true);
        }
    }, [storedAuthToken]);

    const handleLogin = () => {
        // Simple authentication logic
        if (username === 'sahareno' && password === '54321') {
            localStorage.setItem('authToken', 'example_token'); // Replace with a real authentication token
            setLoggedIn(true);
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid username or password',
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setLoggedIn(false);
    };

    useEffect(() => {
        fetchHome();
    }, []);

    if (!isLoggedIn) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl mb-4">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username:
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password:
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }

   

    return (
        <div>
            <div className="drawer lg:drawer-open bg-white text-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content dashboard-css">

                    <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        <span>Open Dashboard</span>
                    </label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side" data-aos="fade-right">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gray-500 text-white border-e-8 border-green-300">
                        
                        {home?.map((a) => (
                            <div key={a._id}>
                                <div className="flex justify-center mb-2"><img className="h-20 w-20 border-2 border-green-300 rounded-full" src={a.image} alt="" /></div>
                            </div>
                        ))}

                        
                        <b className="text-center text-green-300"><p>Saha Reno</p></b>
                        <b><li onClick={handleLogout}><NavLink to="/"><IoMdLogOut />Log Out</NavLink></li></b>

                        <div className="divider"></div>

                        <b>
                            <li><NavLink to="/dashboard/adminHome"><CgProfile /> Profile</NavLink></li>
                            <li><NavLink to="/dashboard/adminCertificate"><PiCertificateBold /> Certificate</NavLink></li>
                            <li><NavLink to="/dashboard/adminEducation"><PiStudentBold /> Education</NavLink></li>
                            <li><NavLink to="/dashboard/adminExperience"><MdWorkOutline /> Experience</NavLink></li>
                            <li><NavLink to="/dashboard/adminArticle"><RiArticleLine /> Article & Paper</NavLink></li>
                        </b>

                        <div className="divider"></div>
                        <b><li><NavLink to="/"><MdExitToApp />Back to Home</NavLink></li></b>

                        {/* <b><li > <MdExitToApp />Exit</li></b> */}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;