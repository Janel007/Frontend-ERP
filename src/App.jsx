import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Year from "./pages/Year.jsx";
import Option from "./pages/Option.jsx";
import School from "./pages/School.jsx";
import Parent from "./pages/Parent.jsx";
import Student from "./pages/Student.jsx";
import Class from "./pages/Class.jsx";
import Teacher from "./pages/Teacher.jsx";
import User from "./pages/User.jsx";
import Subject from "./pages/Subject.jsx";
import Transport from "./pages/Transport.jsx";


export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                {
                    path: "/create/year",
                    element: <Year />,
                },
                {
                    path: "/create/option",
                    element: <Option />,
                },
                {
                    path: "/create/school",
                    element: <School />,
                },
                {
                    path: "/create/parent",
                    element: <Parent />,
                },
                {
                    path: "/create/student",
                    element: <Student />,
                },
                {
                    path: "/create/class",
                    element: <Class />,
                },
                {
                    path: "/create/teacher",
                    element: <Teacher />,
                },
                {
                    path: "/create/user",
                    element: <User />,
                },
                {
                    path: "/create/subject",
                    element: <Subject />,
                },
                {
                    path: "/create/transport",
                    element: <Transport />,
                },
                /*
                {
                    path: "/create/user",
                    element: <User />,
                },
                {
                    path: "/create/user",
                    element: <User />,
                },
                {
                    path: "/create/user",
                    element: <User />,
                },
                {
                    path: "/create/user",
                    element: <User />,
                },
                */
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}
