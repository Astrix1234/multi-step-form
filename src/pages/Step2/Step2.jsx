import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Step2.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonNextStep from 'components/ButtonNextStep/ButtonNextStep';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { PlanContext } from 'components/PlanContext/PlanContext';
import { useNavigationHandlers } from './navigationHandlers';
import { handlePlanChoiceChange } from './handlePlanChoiceChange';
import FormStep2 from 'components/FormStep2/FormStep2';
import ToggleStep2 from 'components/ToggleStep2/ToggleStep2';

export default function Step2() {
  const navigate = useNavigate();
  const { planDetails, setPlanDetails } = useContext(PlanContext);
  const plan = planDetails.plan;
  const selectedInput = planDetails.selectedInput;

  useEffect(() => {
    if (!planDetails.step1Completed) {
      navigate('/step1');
    }
  }, [planDetails.step1Completed, navigate]);

  const { onNextStep, onGoBack, handleToggleChange } = useNavigationHandlers(
    plan,
    setPlanDetails,
    planDetails,
    selectedInput
  );

  const handleChoiceChange = e => {
    handlePlanChoiceChange(e, plan, setPlanDetails);
  };

  return (
    <div className={css.container}>
      <div className={css.contentContainer}>
        <TitleSteps title="Select your plan" />
        <CommentSteps comment="You have the option of monthly or yearly billing." />
        <FormStep2
          plan={plan}
          handleChoiceChange={handleChoiceChange}
          selectedInput={selectedInput}
        />
        <ToggleStep2 plan={plan} handleToggleChange={handleToggleChange} />
      </div>
      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonNextStep onClick={onNextStep} type="button" />
      </div>
    </div>
  );
}
