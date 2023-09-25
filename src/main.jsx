import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
import Showsearch from './components/ShowSearch/Showsearch.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/sarch",
        element: <Showsearch></Showsearch>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
