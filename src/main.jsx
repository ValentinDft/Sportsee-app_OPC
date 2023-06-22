import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home.jsx';
import './main.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar.jsx';
import Error from './pages/Error/Error.jsx';

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
        element: <Home userId={12} />,
      },
      {
        path: '/user/:id',
        element: <Home />,
      },
    ],
  },
  {
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
