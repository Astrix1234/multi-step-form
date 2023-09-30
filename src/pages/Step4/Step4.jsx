import React, { useContext } from 'react';
import css from './Step4.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonNextStep from 'components/ButtonNextStep/ButtonNextStep';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { PlanContext } from 'components/PlanContext/PlanContext';
import { useNavigationHandlers } from './navigationHandlers';

export default function Step4() {
  const { planDetails, setPlanDetails } = useContext(PlanContext);
  const plan = planDetails.plan;

  const { onNextStep, onGoBack } = useNavigationHandlers(plan, setPlanDetails);

  return (
    <div className={css.container}>
      <TitleSteps title="Finishing up" />
      <CommentSteps comment="Double-check everything looks OK before confirming." />

      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonNextStep type="button" onClick={onNextStep} />
      </div>
    </div>
  );
}
