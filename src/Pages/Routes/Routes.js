import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import Journal from "../Journal/Journal";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import BookChapter from "../Journal/BookChapter";
import Conference from "../Journal/Conference";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../../AdminDashboard/AdminHome";
import AdminCertificate from "../../AdminDashboard/AdminCertificate";
import AdminEducation from "../../AdminDashboard/AdminEducation";
import AdminExperience from "../../AdminDashboard/AdminExperience";
import AdminArticle from "../../AdminDashboard/AdminArticle";
import UpdateCertificate from "../../AdminDashboard/DashboardDetails/Certificate/UpdateCertificate";
import SingleProfileUpdate from "../../AdminDashboard/DashboardDetails/AHome/SingleProfileUpdate";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/certificate',
                element: <Skills></Skills>,
            },
            
            {
                path: '/education',
                element: <Education></Education>,
            },
            {
                path: '/work',
                element: <Work></Work>,
            },
            {
                path: '/experience',
                element: <Experience></Experience>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },

            {
                path: '/journal',
                element: <Journal></Journal>,
            },
            {
                path: '/book-chapter',
                element: <BookChapter></BookChapter>,
            },
            {
                path: '/conference',
                element: <Conference></Conference>,
            },
            {
                path: "/home/:id",
                element: <SingleProfileUpdate></SingleProfileUpdate>,
                loader: async ({ params }) => fetch(`https://saha-reno-portfolio-backend.onrender.com/home/${params.id}`),
            },
            {
                path: "/update-certificate/:id",
                element: <UpdateCertificate></UpdateCertificate>,
                // loader: async ({ params }) => fetch(`https://saha-reno-portfolio-backend.onrender.com/interns/${params.id}`),
            },
            
        ]
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>,
            },
            {
                path: 'adminCertificate',
                element: <AdminCertificate></AdminCertificate>,
            },
            {
                path: 'adminEducation',
                element: <AdminEducation></AdminEducation>,
            },
            {
                path: 'adminExperience',
                element: <AdminExperience></AdminExperience>,
            },
            {
                path: 'adminArticle',
                element: <AdminArticle></AdminArticle>,
            },


        ]
    }
])