import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import Demos from './Pages/Demos';
import Apps from './Pages/Apps';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/demos" element={<Demos />} />
      </Routes>
    </HashRouter>
  );
}

root.render(
  <App/>
);