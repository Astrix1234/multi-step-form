import React from 'react';
import InputRadioPlaceholder from 'components/InputRadioPlaceholder/InputRadioPlaceholder';
import css from './FormStep2.module.css';
import PropTypes from 'prop-types';
import { PLANS } from '../../plansConfig/plansConfig';

const FormStep2 = ({ plan, handleChoiceChange, selectedInput }) => {
  return (
    <form className={css.form}>
      {Object.entries(PLANS).map(([key, planData]) => (
        <label key={key} htmlFor={key.toLowerCase()}>
          <input
            className={css.visuallyHidden}
            id={key.toLowerCase()}
            type="radio"
            name="planChoice"
            value={key.toLowerCase()}
            checked={selectedInput === key.toLowerCase()}
            onChange={handleChoiceChange}
          />
          <InputRadioPlaceholder
            className={css.inputPlaceholder}
            plan={planData.name}
            price={
              plan === 'Monthly' ? planData.monthlyPrice : planData.yearlyPrice
            }
            period={
              plan === 'Monthly'
                ? planData.monthlyPeriod
                : planData.yearlyPeriod
            }
            comment={
              plan === 'Monthly'
                ? planData.monthlyComment
                : planData.yearlyComment
            }
          >
            {React.createElement(planData.icon)}
          </InputRadioPlaceholder>
        </label>
      ))}
    </form>
  );
};

FormStep2.propTypes = {
  plan: PropTypes.string.isRequired,
  handleChoiceChange: PropTypes.func.isRequired,
  selectedInput: PropTypes.string.isRequired,
};

export default FormStep2;
