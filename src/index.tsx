import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 <React.StrictMode>
   {/* I am lazy, so I will just drop my css library here isntead of properly installing. (No, it's bcs I have templates from prev projects that I inted to use) */}
    <script src="https://unpkg.com/@tabler/core@1.0.0-beta3/dist/js/tabler.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@tabler/core@1.0.0-beta3/dist/css/tabler.min.css"></link>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
