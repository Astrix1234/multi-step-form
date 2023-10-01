import React from 'react';
import css from './Step2.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonNextStep from 'components/ButtonNextStep/ButtonNextStep';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanDetails } from 'redux/selectors';
import { togglePlan } from 'redux/slice';
import { useNavigate } from 'react-router-dom';
import { useNavigationHandlers } from './navigationHandlers';
import { handlePlanChoiceChange } from './handlePlanChoiceChange';
import FormStep2 from 'components/FormStep2/FormStep2';
import ToggleStep2 from 'components/ToggleStep2/ToggleStep2';

export default function Step2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const planDetails = useSelector(selectPlanDetails);
  const plan = planDetails.plan;

  const handleChoiceChange = e => {
    handlePlanChoiceChange(e, plan, dispatch);
  };

  const handleToggleChange = () => {
    dispatch(togglePlan());
    if (plan === 'monthly') {
      navigate('/step2-yearly');
    } else {
      navigate('/step2-monthly');
    }
  };

  const { onGoBack, onNextStep } = useNavigationHandlers(plan);

  return (
    <div className={css.container}>
      <TitleSteps title="Select your plan" />
      <CommentSteps comment="You have the option of monthly or yearly billing." />
      <FormStep2 plan={plan} handleChoiceChange={handleChoiceChange} />
      <ToggleStep2 plan={plan} handleToggleChange={handleToggleChange} />
      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonNextStep onClick={onNextStep} type="button" />
      </div>
    </div>
  );
}
