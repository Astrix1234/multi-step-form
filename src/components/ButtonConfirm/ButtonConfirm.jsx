import React from 'react';
import css from './ButtonConfirm.module.css';

const ButtonConfirm = () => {
  return (
    <button className={css.btnConfirm} type="submit">
      Confirm
    </button>
  );
};

export default ButtonConfirm;
