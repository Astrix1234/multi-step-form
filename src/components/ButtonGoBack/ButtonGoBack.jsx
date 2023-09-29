import React from 'react';
import PropTypes from 'prop-types';
import css from './ButtonGoBack.module.css';

const ButtonGoBack = ({ onClick }) => {
  return (
    <button className={css.btnGoBack} type="button" onClick={onClick}>
      Go Back
    </button>
  );
};

ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonGoBack;
