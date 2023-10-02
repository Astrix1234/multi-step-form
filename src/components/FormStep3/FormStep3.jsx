import React from 'react';
import PropTypes from 'prop-types';
import css from './FormStep3.module.css';
import InputCheckboxPlaceholder from 'components/InputCheckboxPlaceholder/InputCheckboxPlaceholder';

const FormStep3 = ({ plan, handleChoiceChange }) => {
  return (
    <form className={css.form}>
      <label htmlFor="online">
        <input
          id="online"
          className={css.visuallyHidden}
          type="checkbox"
          name="serviceChoice"
          value="online"
          onChange={handleChoiceChange}
        />
        <InputCheckboxPlaceholder
          className={css.inputPlaceholder}
          classNameBox={css.checkboxPlaceholder}
          title="Online service"
          comment="Access to multiplayer games"
          price={plan === 'Monthly' ? 1 : 10}
          period={plan === 'Monthly' ? 'mo' : 'yr'}
        />
      </label>
      <label htmlFor="larger">
        <input
          id="larger"
          className={css.visuallyHidden}
          type="checkbox"
          name="serviceChoice"
          value="larger"
          onChange={handleChoiceChange}
        />
        <InputCheckboxPlaceholder
          className={css.inputPlaceholder}
          classNameBox={css.checkboxPlaceholder}
          title="Larger storage"
          comment="Extra 1TB of cloud save"
          price={plan === 'Monthly' ? 2 : 20}
          period={plan === 'Monthly' ? 'mo' : 'yr'}
        />
      </label>
      <label htmlFor="custom">
        <input
          id="custom"
          className={css.visuallyHidden}
          type="checkbox"
          name="serviceChoice"
          value="custom"
          onChange={handleChoiceChange}
        />
        <InputCheckboxPlaceholder
          className={css.inputPlaceholder}
          classNameBox={css.checkboxPlaceholder}
          title="Customizable profile"
          comment="Custom theme on your profile"
          price={plan === 'Monthly' ? 2 : 20}
          period={plan === 'Monthly' ? 'mo' : 'yr'}
        />
      </label>
    </form>
  );
};

FormStep3.propTypes = {
  plan: PropTypes.string.isRequired,
  handleChoiceChange: PropTypes.func.isRequired,
};

export default FormStep3;
