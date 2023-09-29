import React from 'react';
import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';

const Step1 = lazy(() => import('../pages/Step1/Step1'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Step1 />} />
        {/* <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> */}
        {/* <Route path="*" element={<HomePage />} /> */}
      </Route>
    </Routes>
  );
};
