import React from 'react';
import InputRadioPlaceholder from 'components/InputRadioPlaceholder/InputRadioPlaceholder';
import IconArcade from 'components/IconArcade/IconArcade';
import IconAdvanced from 'components/IconAdvanced/IconAdvanced';
import IconPro from 'components/IconPro/IconPro';
import css from './FormStep2.module.css';
import PropTypes from 'prop-types';

const FormStep2 = ({ plan, handleChoiceChange }) => {
  return (
    <form className={css.form}>
      <label htmlFor="arcade">
        <input
          className={css.visuallyHidden}
          id="arcade"
          type="radio"
          name="planChoice"
          value="arcade"
          defaultChecked
          onChange={handleChoiceChange}
        />
        <InputRadioPlaceholder
          className={css.inputPlaceholder}
          plan="Arcade"
          price={plan === 'monthly' ? 9 : 90}
          period={plan === 'monthly' ? 'mo' : 'yr'}
          comment={plan === 'monthly' ? '' : '2 months free.'}
        >
          <IconArcade />
        </InputRadioPlaceholder>
      </label>
      <label htmlFor="advanced">
        <input
          className={css.visuallyHidden}
          id="advanced"
          type="radio"
          name="planChoice"
          value="advanced"
          onChange={handleChoiceChange}
        />
        <InputRadioPlaceholder
          className={css.inputPlaceholder}
          plan="Advanced"
          price={plan === 'monthly' ? 12 : 120}
          period={plan === 'monthly' ? 'mo' : 'yr'}
          comment={plan === 'monthly' ? '' : '2 months free.'}
        >
          <IconAdvanced />
        </InputRadioPlaceholder>
      </label>
      <label htmlFor="pro">
        <input
          className={css.visuallyHidden}
          id="pro"
          type="radio"
          name="planChoice"
          value="pro"
          onChange={handleChoiceChange}
        />
        <InputRadioPlaceholder
          className={css.inputPlaceholder}
          plan="Pro"
          price={plan === 'monthly' ? 15 : 150}
          period={plan === 'monthly' ? 'mo' : 'yr'}
          comment={plan === 'monthly' ? '' : '2 months free.'}
        >
          <IconPro />
        </InputRadioPlaceholder>
      </label>
    </form>
  );
};

FormStep2.propTypes = {
  plan: PropTypes.string.isRequired,
  handleChoiceChange: PropTypes.func.isRequired,
};

export default FormStep2;
