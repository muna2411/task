import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home.jsx';
import AuthProvider from './componants/AuthProvider.jsx';
import Main from './componants/Main.jsx';
import Login from './componants/Login.jsx';
import Register from './componants/Register.jsx';
import PrivateRoute from './componants/PrivateRoute.jsx';
import Dashboard from './componants/Dashboard.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
          path:"/register",
          element:<Register></Register>
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>   
      <RouterProvider router={router} />
    </AuthProvider>
 
  
  </React.StrictMode>,
)
