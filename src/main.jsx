import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import './main.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar.jsx';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Topbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
