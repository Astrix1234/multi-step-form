import React from 'react';
import PropTypes from 'prop-types';
import css from './ButtonConfirm.module.css';

const ButtonConfirm = ({ onClick }) => {
  return (
    <button className={css.btnConfirm} type="button" onClick={onClick}>
      Confirm
    </button>
  );
};

ButtonConfirm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonConfirm;
