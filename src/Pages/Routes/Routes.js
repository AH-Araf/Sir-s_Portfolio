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
            
        ]
    }
])