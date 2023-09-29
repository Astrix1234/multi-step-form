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
      <AppBarItem stepNumber={2} step="STEP 2" title="SELECT PLAN" />
      <AppBarItem stepNumber={3} step="STEP 3" title="ADD-ONS" />
      <AppBarItem stepNumber={4} step="STEP 4" title="SUMMARY" />
    </ul>
  );
};

export default AppBarList;
