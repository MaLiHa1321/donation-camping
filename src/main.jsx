import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './components/MainLayout/Mainlayout.jsx';
import Home from './components/Home/Home.jsx';
import Donation from './components/Donation/Donation.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Categorie from './components/Categorie/Categorie.jsx';
import ErrorPage from './components/error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
       
        loader: ()=> fetch('data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: ()=> fetch('data.json')
      },
      {
        path: "/cate/:id",
        element: <Categorie></Categorie>,
        loader:() => fetch('data.json')
      },
     
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
