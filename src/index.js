import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

if (window.top != window.self) {
  window.top.location = window.self.location; // 替换顶级窗口的地址
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


