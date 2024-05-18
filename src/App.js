import './App.css';
import React from 'react';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Index from './pages/Index';

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
          <Route path='/' element={<Navigate to='/index/aboutme' />} />
          <Route path='/index' element={<Navigate to='/index/aboutme' />} />
          <Route path='/index/*' element={<Index />} />
          {/* <Route path='/index/*' element={<Navigate to={*} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
