import React, { useContext } from 'react';
import css from './Step3.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonNextStep from 'components/ButtonNextStep/ButtonNextStep';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { PlanContext } from 'components/PlanContext/PlanContext';
import FormStep3 from 'components/FormStep3/FormStep3';
import { useNavigationHandlers } from './navigationHandlers';
import { handleChoiceChange } from './handleChoiceChange';

export default function Step3() {
  const { planDetails, setPlanDetails } = useContext(PlanContext);
  const plan = planDetails.plan;

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
