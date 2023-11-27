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
import TeachOn from './Pages/TeachOn/TeachOn';
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
  element:<TeachOn></TeachOn>
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
  element:<Dashbord></Dashbord>,
  children:[{
    path:'cart',
    element:<Cart></Cart>
  }]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider>
  <RouterProvider router={router} />
  </Provider>
  <Toaster></Toaster>
  </React.StrictMode>,
)
