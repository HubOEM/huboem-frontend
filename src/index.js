import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux';
// import configureStore from "./store"
import store from './redux/store.js'; // Import the store directly

import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
// import AdminRoutes from './pages/admin/AdminRoutes'

// const store = configureStore();

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        {/* <AdminRoutes /> */}
      </BrowserRouter>
      
        <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
