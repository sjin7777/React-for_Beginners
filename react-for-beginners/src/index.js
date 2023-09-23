import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App05 from './App05';
// import App0601 from './App06_01';
// import App0602 from './App06_02';
// import App0603 from './App06_03';
// import App0701 from './App07_01';
// import App0702 from './App07_02';
// import App0703 from './App07_03';
// import App0704 from './App07_04';
// import App0705 from './App07_05';
// import App0706 from './App07_06';
// import App0707 from './App07_07';
import App0708 from './App07_08';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App05 />
    // <App0601 />
    // <App0602 />
    // <App0603 />
    // <App0701 />
    // <App0702 />
    // <App0703 />
    // <App0704 />
    // <App0705 />
    // <App0706 />
    // <App0707 />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App0708 />
    </BrowserRouter>
);
