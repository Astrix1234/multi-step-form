import React from 'react';
import css from './AppBarList.module.css';
import AppBarItem from '../AppBarItem/AppBarItem';
import { useLocation } from 'react-router-dom';

const AppBarList = () => {
  const location = useLocation();

  return (
    <ul className={css.appBarList}>
      <AppBarItem
        stepNumber={1}
        step="STEP 1"
        title="YOUR INFO"
        isActive={location.pathname === '/'}
      />
      <AppBarItem
        stepNumber={2}
        step="STEP 2"
        title="SELECT PLAN"
        isActive={
          location.pathname === '/step2-monthly' ||
          location.pathname === '/step2-yearly'
        }
      />
      <AppBarItem
        stepNumber={3}
        step="STEP 3"
        title="ADD-ONS"
        isActive={
          location.pathname === '/step3-monthly' ||
          location.pathname === '/step3-yearly'
        }
      />
      <AppBarItem
        stepNumber={4}
        step="STEP 4"
        title="SUMMARY"
        isActive={location.pathname === '/step4'}
      />
    </ul>
  );
};

export default AppBarList;
