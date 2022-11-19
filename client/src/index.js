import React from 'react';
import { UserContextProvider } from './context/UserContext';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
      <App />
  </UserContextProvider>
  
);
