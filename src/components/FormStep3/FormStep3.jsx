import React from 'react';
import PropTypes from 'prop-types';
import css from './FormStep3.module.css';
import InputCheckboxPlaceholder from 'components/InputCheckboxPlaceholder/InputCheckboxPlaceholder';
import { SERVICES } from '../../plansConfig/plansConfig';

const FormStep3 = ({ plan, handleChoiceChange, selectedCheckbox }) => {
  return (
    <form className={css.form}>
      {Object.keys(SERVICES).map(serviceKey => (
        <label key={serviceKey} htmlFor={serviceKey}>
          <input
            id={serviceKey}
            className={css.visuallyHidden}
            type="checkbox"
            name="serviceChoice"
            value={serviceKey}
            onChange={handleChoiceChange}
            checked={selectedCheckbox.includes(serviceKey)}
          />
          <InputCheckboxPlaceholder
            className={css.inputPlaceholder}
            classNameBox={css.checkboxPlaceholder}
            title={SERVICES[serviceKey].name}
            comment={SERVICES[serviceKey].comment}
            price={
              plan === 'Monthly'
                ? SERVICES[serviceKey].monthlyPrice
                : SERVICES[serviceKey].yearlyPrice
            }
            period={
              plan === 'Monthly'
                ? SERVICES[serviceKey].monthlyPeriod
                : SERVICES[serviceKey].yearlyPeriod
            }
          />
        </label>
      ))}
    </form>
  );
};

FormStep3.propTypes = {
  plan: PropTypes.string.isRequired,
  handleChoiceChange: PropTypes.func.isRequired,
  selectedCheckbox: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FormStep3;
