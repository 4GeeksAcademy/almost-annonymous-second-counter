import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Start counting
let seconds = 0;

// This function will re-render every second
setInterval(() => {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>
  );
  seconds++;
}, 1000);