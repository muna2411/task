
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

import CreateTask from './componants/CreateTask.jsx';
import TaskList from './componants/TaskList.jsx';
import Update from './componants/Update.jsx';
import React from 'react';



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
   
    ]
  },
  {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    
    children:[
      {
       path:'createTask',
       element:<CreateTask></CreateTask>
      },
      {
       path:'taskList',
       element: <TaskList></TaskList>,
       loader: () => fetch('http://localhost:5000/menu'),
      },
      {
        path:'menu/:id',
        element:<Update></Update>,
       loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
     
      
    ]
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>   
      <RouterProvider router={router} />
    </AuthProvider>
 
  
  
)
