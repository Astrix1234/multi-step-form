import InputRadioPlaceholder from 'components/InputRadioPlaceholder/InputRadioPlaceholder';
import IconArcade from 'components/IconArcade/IconArcade';
import IconAdvanced from 'components/IconAdvanced/IconAdvanced';
import IconPro from 'components/IconPro/IconPro';
import css from './FormStep2.module.css';
import PropTypes from 'prop-types';

const FormStep2 = ({
  plan,
  handleChoiceChange,
  selectedInput,
  setSelectedInput,
}) => {
  return (
    <form className={css.form}>
      <label htmlFor="arcade">
        <input
          className={css.visuallyHidden}
          id="arcade"
          type="radio"
          name="planChoice"
          value="arcade"
          checked={selectedInput === 'arcade'}
          onChange={e => {
            handleChoiceChange(e);
            setSelectedInput(e.target.value);
          }}
        />
        <InputRadioPlaceholder
          className={css.inputPlaceholder}
          plan="Arcade"
          price={plan === 'Monthly' ? 9 : 90}
          period={plan === 'Monthly' ? 'mo' : 'yr'}
          comment={plan === 'Monthly' ? '' : '2 months free.'}
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
          checked={selectedInput === 'advanced'}
          onChange={e => {
            handleChoiceChange(e);
            setSelectedInput(e.target.value);
          }}
        />
        <InputRadioPlaceholder
          className={css.inputPlaceholder}
          plan="Advanced"
          price={plan === 'Monthly' ? 12 : 120}
          period={plan === 'Monthly' ? 'mo' : 'yr'}
          comment={plan === 'Monthly' ? '' : '2 months free.'}
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
          checked={selectedInput === 'pro'}
          onChange={e => {
            handleChoiceChange(e);
            setSelectedInput(e.target.value);
          }}
        />
        <InputRadioPlaceholder
          className={css.inputPlaceholder}
          plan="Pro"
          price={plan === 'Monthly' ? 15 : 150}
          period={plan === 'Monthly' ? 'mo' : 'yr'}
          comment={plan === 'Monthly' ? '' : '2 months free.'}
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
  selectedInput: PropTypes.string.isRequired,
  setSelectedInput: PropTypes.func.isRequired,
};

export default FormStep2;
