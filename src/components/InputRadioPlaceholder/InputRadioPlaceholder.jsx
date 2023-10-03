import React from 'react';
import PropTypes from 'prop-types';
import css from './InputRadioPlaceholder.module.css';

const InputRadioPlaceholder = ({
  className,
  children,
  plan,
  price,
  period,
  comment,
}) => {
  return (
    <div className={`${css.container} ${className}`}>
      <div className={css.icon}>{children}</div>
      <div className={css.textContainer}>
        <p className={css.plan}>{plan}</p>
        <p className={css.price}>{`$${price}/${period}`}</p>
        <p className={css.comment}>{comment}</p>
      </div>
    </div>
  );
};

InputRadioPlaceholder.propTypes = {
  children: PropTypes.node.isRequired,
  plan: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  comment: PropTypes.string,
};

export default InputRadioPlaceholder;
