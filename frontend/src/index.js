import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  return (
    <h1>
      THIS IS HOW IT STARTS
    </h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);