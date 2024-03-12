import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import data from './data';

function App() {
  return (
    <h2>{data.map((item) => {
      return <h2>{item.name}</h2>
    })}</h2>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
