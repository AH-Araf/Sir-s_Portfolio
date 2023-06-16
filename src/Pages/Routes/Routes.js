import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import ArticleandPaper from "../ArticleandPaper/ArticleandPaper";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Work from "../Work/Work";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

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
                path: '/article-paper',
                element: <ArticleandPaper></ArticleandPaper>,
            },
            {
                path: '/skills',
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
            
        ]
    }
])