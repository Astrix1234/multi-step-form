import React from 'react';
import PropTypes from 'prop-types';
import css from './InputLabel.module.css';

const InputLabel = ({ name, value, onChange, type, pattern, title, id }) => {
  return (
    <label className={css.labelBook} htmlFor={id}>
      {name}
      <input
        className={css.inputBook}
        id={id}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

InputLabel.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputLabel;
