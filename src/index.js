import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from './Pages/Main';
import Demos from './Pages/Demos';
import Apps from './Pages/Apps';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },

  {
    path: "/apps",
    element: <Apps />,
  },

  {
    path: "/demos",
    element: <Demos />,
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

root.render(
  <App />
);