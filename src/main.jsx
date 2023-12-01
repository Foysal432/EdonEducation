import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Provider from './Config/Provider';
import { Toaster } from 'react-hot-toast';
import Dashbord from './Layout/Dashbord';
import Cart from './Pages/Dashboard/Cart/Cart';
import TeachOnEdon from './Pages/TeachOnEdon/TeachOnEdon';
import PrivateRoute from './Route/PrivateRoute';
import AllUsers from './ElementofDashbord/AllUsers';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import TeacherRequest from './Pages/Dashboard/Admin/TeacherRequest';
import Profile from './Pages/Dashboard/Admin/Profile';
import AllClasses from './Pages/Dashboard/Admin/Allclasses';
import AddClass from './Pages/Dashboard/Teacher/AddClass';
import MyClass from './Pages/Dashboard/Teacher/MyClass';
import Enroll from './Pages/Dashboard/Student/Enroll';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
  path:'/teachon',
  element:<PrivateRoute><TeachOnEdon></TeachOnEdon></PrivateRoute>
  }
  ],
    
  },
{
  path:'login',
  element:<Login></Login>
},
{
  path:'register',
  element:<Register></Register>
},
{
  path:'dashboard',
  element:<PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
 
  children:[{
    // admin
    path:'teacherrequest',
    element:<TeacherRequest></TeacherRequest>
  },
  {
path:'profile',
element:<Profile></Profile>
  },
  {
path:'allclasses',
element:<AllClasses></AllClasses>
  },

  {
    path:'users',
    element:<AllUsers></AllUsers>,
    // loader:()=>fetch('http://localhost:5000/users')
  },
  // teacher
  {
    path:'addclass',
    element:<AddClass></AddClass>
  },
{
  path:'myclass',
  element:<MyClass></MyClass>
},
// student
{
  path:'enrollClass',
  element:<Enroll></Enroll>
}
]
}
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <QueryClientProvider client={queryClient}>
       <Provider>
  <RouterProvider router={router} />
  </Provider>
    </QueryClientProvider>
  <Toaster></Toaster>
  </React.StrictMode>,
)
