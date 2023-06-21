import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store'; // Import createStore from Redux

import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage.jsx';
import MatchPage from './pages/MatchPage';
import SwipePage from './pages/SwipePage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/login',
//     element: <LoginPage />,
//   },
//   {
//     path: '/signup',
//     element: <SignupPage />,
//   },
//   {
//     path: '/matches',
//     element: <MatchPage />,
//   },
//   {
//     path: '/swipe',
//     element: <SwipePage />,
//   },
// ]);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);
