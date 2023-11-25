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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    }],
    
  },
{
  path:'login',
  element:<Login></Login>
},
{
  path:'register',
  element:<Register></Register>
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
