import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './Layout';
import Home from './home';
import About from './about';
import Services from './services';
import User from './user';
import Github from './github';
import  './App.css';
// const router =createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//      {
//       path: "/about",
//       element:<About/>
//      },
//      {
//       path:"/services",
//       element:<Services/>
//      }
    
//     ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
     <Route path='' element={<Home />}/>
     <Route path='entertainment' element={<About />}/>
     <Route path='trending-news' element={<Services />}/>
     <Route path='user/:userid' element={<User />}/>
     <Route path='all-news' element={<Github />}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
);

