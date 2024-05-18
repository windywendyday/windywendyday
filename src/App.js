import './App.css';
import React from 'react';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Aboutme from './pages/Aboutme/Aboutme';
import Blogs from './pages/Blogs/Blogs';
import Ideas from './pages/Ideas/Ideas';



function App() {
  // const sideBar = [
  //   {
  //     key:'aboutme',
  //     title:'About Me'
      
  //   },
  // ]

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/aboutme' />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/ideas' element={<Ideas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
