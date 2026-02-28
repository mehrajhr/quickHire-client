import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Authentication/Login';
import SignUp from '../Pages/Authentication/SignUp';
import FindJobs from '../Pages/FindJobs/FindJobs';
import JobDetails from '../Pages/JobDetails/JobDetails';
import JobApply from '../Pages/JobApply/JobApply';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/signup',
            Component: SignUp
        },
        {
            path: '/find-jobs',
            Component: FindJobs
        },
        {
            path: '/job/:id',
            Component: JobDetails
        },
    ]
  },
]);

export default router;