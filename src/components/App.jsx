import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Step1 = lazy(() => import('../pages/Step1/Step1'));
const Step2 = lazy(() => import('../pages/Step2/Step2'));
const Step3 = lazy(() => import('../pages/Step3/Step3'));
const Step4 = lazy(() => import('../pages/Step4/Step4'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Step1 />} />
        <Route path="step2-monthly" element={<Step2 />} />
        <Route path="step2-yearly" element={<Step2 />} />
        <Route path="step3-monthly" element={<Step3 />} />
        <Route path="step3-yearly" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
        <Route path="*" element={<Step1 />} />
      </Route>
    </Routes>
  );
};
