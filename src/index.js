import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import Demos from './Pages/Demos';
import Apps from './Pages/Apps';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/demos",
    element: <Demos />
  },
  {
    path: "/apps",
    element: <Apps />
  },
  {
    path: "*",
    element: <div>404</div>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);