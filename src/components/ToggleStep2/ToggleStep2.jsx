import React from 'react';
import PropTypes from 'prop-types';
import css from './ToggleStep2.module.css';

const ToggleStep2 = ({ plan, handleToggleChange }) => {
  return (
    <div className={css.toggleContainer}>
      <span className={plan === 'Monthly' ? css.activeText : css.inactiveText}>
        Monthly
      </span>
      <input
        type="checkbox"
        id="planToggle"
        className={css.toggleInput}
        checked={plan === 'Yearly'}
        onChange={handleToggleChange}
      />
      <label htmlFor="planToggle" className={css.toggleLabel}>
        <span className={css.toggleButton}></span>
      </label>
      <span className={plan === 'Yearly' ? css.activeText : css.inactiveText}>
        Yearly
      </span>
    </div>
  );
};

ToggleStep2.propTypes = {
  plan: PropTypes.string.isRequired,
  handleToggleChange: PropTypes.func.isRequired,
};

export default ToggleStep2;
