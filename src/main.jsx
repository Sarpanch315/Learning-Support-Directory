import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ProviderContextProvider } from './context/ProviderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderContextProvider>
        <App />
      </ProviderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
