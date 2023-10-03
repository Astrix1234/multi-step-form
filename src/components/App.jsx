import React, { useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PlanContext } from './PlanContext/PlanContext';

const Step1 = lazy(() => import('../pages/Step1/Step1'));
const Step2 = lazy(() => import('../pages/Step2/Step2'));
const Step3 = lazy(() => import('../pages/Step3/Step3'));
const Step4 = lazy(() => import('../pages/Step4/Step4'));
const Step5 = lazy(() => import('../pages/Step5/Step5'));

export const App = () => {
  const [planDetails, setPlanDetails] = useState({
    plan: 'Monthly',
    planName: '',
    price: 0,
    period: 'mo',
    services: {},
    selectedInput: '',
    selectedCheckbox: [],
  });
  return (
    <PlanContext.Provider value={{ planDetails, setPlanDetails }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Step1 />} />
          <Route path="step2-monthly" element={<Step2 />} />
          <Route path="step2-yearly" element={<Step2 />} />
          <Route path="step3-monthly" element={<Step3 />} />
          <Route path="step3-yearly" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
          <Route path="step5" element={<Step5 />} />
          <Route path="*" element={<Step1 />} />
        </Route>
      </Routes>
    </PlanContext.Provider>
  );
};
