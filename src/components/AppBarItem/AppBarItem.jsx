import React from 'react';
import PropTypes from 'prop-types';
import css from './AppBarItem.module.css';

const AppBarItem = ({ stepNumber, step, title }) => {
  return (
    <li className={css.item}>
      <p className={css.stepNumber}>{stepNumber}</p>
      <div className={css.description}>
        <p className={css.step}>{step}</p>
        <h4 className={css.title}>{title}</h4>
      </div>
    </li>
  );
};

AppBarItem.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AppBarItem;
