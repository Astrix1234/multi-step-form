import React from 'react';
import PropTypes from 'prop-types';
import css from './InputCheckboxPlaceholder.module.css';

const InputCheckboxPlaceholder = ({
  classNameBox,
  className,
  plan,
  price,
  period,
  comment,
}) => {
  return (
    <div className={`${css.container} ${className}`}>
      <div className={`${css.checkbox} ${classNameBox}`}></div>
      <div className={css.description}>
        <p className={css.plan}>{plan}</p>
        <p className={css.comment}>{comment}</p>
      </div>
      <p className={css.price}>{`$${price}/${period}`}</p>
    </div>
  );
};

InputCheckboxPlaceholder.propTypes = {
  classNameBox: PropTypes.string,
  className: PropTypes.string,
  plan: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default InputCheckboxPlaceholder;
