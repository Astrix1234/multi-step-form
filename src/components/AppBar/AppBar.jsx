import React from 'react';
import css from './AppBar.module.css';
import AppBarList from '../AppBarList/AppBarList';

const AppBar = () => {
  return (
    <aside className={css.aside}>
      <AppBarList />
    </aside>
  );
};

export default AppBar;
