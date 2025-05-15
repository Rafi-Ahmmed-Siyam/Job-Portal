import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply/jobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../Pages/ViewApplications/ViewApplication";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <div>Route not found</div>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
          path:'/signin',
          element:<SignIn/>
        },
        {
          path:'/jobs/:ids',
          element:<PrivetRoute><JobDetails/></PrivetRoute>,
          loader: ({params})=>fetch(`https://job-portal-server-rho-sandy.vercel.app/jobs/${params.ids}`) 
        },
        {
          path:'/myApplications',
          element:<PrivetRoute><MyApplication/></PrivetRoute>
        },
        {
          path:'/addJobs',
          element: <PrivetRoute><AddJobs/></PrivetRoute>
        },
        {
          path:'/myPostedJobs',
          element:<PrivetRoute><MyPostedJobs/></PrivetRoute>
        },
        {
          path:'/viewApplications/:jobId',
          element:<PrivetRoute><ViewApplication/></PrivetRoute>,
          loader: ({params})=> fetch(`https://job-portal-server-rho-sandy.vercel.app/job-applications/jobs/${params.jobId}`)
        },
        {
          path:'/jobApply/:id',
          element: <PrivetRoute><JobApply/></PrivetRoute>
        }
      ]
    },
  ]);
  