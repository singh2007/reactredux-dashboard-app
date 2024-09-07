import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: You can create this file for global styles
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
//import reportWebVitals from './reportWebVitals';

// Create the root for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app and wrap it with the Redux Provider for state management
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Optional: If you want to measure performance in your app, you can use this function
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
