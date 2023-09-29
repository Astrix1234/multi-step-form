import React from 'react';
import PropTypes from 'prop-types';
import css from './ButtonNextStep.module.css';

const ButtonNextStep = ({ onClick, type }) => {
  return (
    <button className={css.btnNextStep} type={type} onClick={onClick}>
      Next Step
    </button>
  );
};

ButtonNextStep.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default ButtonNextStep;
