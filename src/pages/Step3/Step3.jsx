import React, { useContext, useEffect } from 'react';
import css from './Step3.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonNextStep from 'components/ButtonNextStep/ButtonNextStep';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { PlanContext } from 'components/PlanContext/PlanContext';
import FormStep3 from 'components/FormStep3/FormStep3';
import { useNavigationHandlers } from './navigationHandlers';
import { handleChoiceChange } from './handleChoiceChange';
import { useNavigate } from 'react-router-dom';

export default function Step3() {
  const navigate = useNavigate();
  const { planDetails, setPlanDetails } = useContext(PlanContext);
  const plan = planDetails.plan;

  useEffect(() => {
    if (
      !planDetails.planName ||
      !planDetails.price ||
      !planDetails.selectedInput ||
      !planDetails.step1Completed
    ) {
      navigate('/step1');
    }
  }, [
    planDetails.planName,
    planDetails.price,
    planDetails.selectedInput,
    planDetails.step1Completed,
    navigate,
  ]);

  const { onNextStep, onGoBack } = useNavigationHandlers(plan);

  const handleChoice = e => {
    handleChoiceChange(e, plan, setPlanDetails);
  };

  return (
    <div className={css.container}>
      <div className={css.contentContainer}>
        <TitleSteps title="Pick add-ons" />
        <CommentSteps comment="Add-ons help enhance your gaming experience." />
        <FormStep3
          plan={plan}
          handleChoiceChange={handleChoice}
          selectedCheckbox={planDetails.selectedCheckbox}
        />
      </div>
      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonNextStep type="button" onClick={onNextStep} />
      </div>
    </div>
  );
}
