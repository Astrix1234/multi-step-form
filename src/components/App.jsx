import React from 'react';
import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Step1 = lazy(() => import('../pages/Step1/Step1'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Step1 />} />

        <Route path="*" element={<Step1 />} />
      </Route>
    </Routes>
  );
};
