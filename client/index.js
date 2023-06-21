import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store'; // Import createStore from Redux

import App from './App';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MatchPage from './pages/MatchPage';
import SwipePage from './pages/SwipePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/matches',
    element: <MatchPage />,
  },
  {
    path: '/swipe',
    element: <SwipePage />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </App>
  </Provider>
);
