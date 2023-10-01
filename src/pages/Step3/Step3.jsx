import React, { useState } from 'react';
import css from './Step3.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonNextStep from 'components/ButtonNextStep/ButtonNextStep';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import FormStep3 from 'components/FormStep3/FormStep3';
import { useNavigationHandlers } from './navigationHandlers';
import { handleChoiceChange } from './handleChoiceChange';

export default function Step3() {
  const storedPlanDetails = sessionStorage.getItem('planDetails');
  const initialPlanDetails = storedPlanDetails
    ? JSON.parse(storedPlanDetails)
    : {
        plan: 'monthly',
        planName: 'Arcade',
        price: 0,
        period: 'mo',
        services: {},
      };

  const [planDetails, setPlanDetails] = useState(initialPlanDetails);
  const plan = planDetails.plan;

  const { onNextStep, onGoBack } = useNavigationHandlers(plan);

  const handleChoice = e => {
    handleChoiceChange(e, plan, planDetails, setPlanDetails);
  };

  console.log(planDetails);

  return (
    <div className={css.container}>
      <TitleSteps title="Pick add-ons" />
      <CommentSteps comment="Add-ons help enhance your gaming experience." />
      <FormStep3 plan={plan} handleChoiceChange={handleChoice} />
      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonNextStep type="button" onClick={onNextStep} />
      </div>
    </div>
  );
}
