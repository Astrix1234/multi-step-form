import React from 'react';
import InputRadioPlaceholder from 'components/InputRadioPlaceholder/InputRadioPlaceholder';
import IconArcade from 'components/IconArcade/IconArcade';
import IconAdvanced from 'components/IconAdvanced/IconAdvanced';
import IconPro from 'components/IconPro/IconPro';
import css from './FormStep2.module.css';
import PropTypes from 'prop-types';
import { plansConfig } from '../../config/plansConfig';

const FormStep2 = ({ plan, handleChoiceChange }) => {
  const arcadeConfig = plansConfig.arcade[plan];
  const advancedConfig = plansConfig.advanced[plan];
  const proConfig = plansConfig.pro[plan];

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
          plan={arcadeConfig.name}
          price={arcadeConfig.price}
          period={arcadeConfig.period}
          comment={arcadeConfig.comment}
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
          plan={advancedConfig.name}
          price={advancedConfig.price}
          period={advancedConfig.period}
          comment={advancedConfig.comment}
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
          plan={proConfig.name}
          price={proConfig.price}
          period={proConfig.period}
          comment={proConfig.comment}
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
