import React, { useContext } from 'react';
import css from './Step4.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { PlanContext } from 'components/PlanContext/PlanContext';
import { useNavigationHandlers } from './navigationHandlers';
import ButtonConfirm from 'components/ButtonConfirm/ButtonConfirm';
import SummaryStep4 from 'components/SummaryStep4/SummaryStep4';

export default function Step4() {
  const { planDetails, setPlanDetails } = useContext(PlanContext);
  const plan = planDetails.plan;
  const planPrice = planDetails.price;

  const { onNextStep, onGoBack } = useNavigationHandlers(plan, setPlanDetails);

  return (
    <div className={css.container}>
      <TitleSteps title="Finishing up" />
      <CommentSteps comment="Double-check everything looks OK before confirming." />
      <SummaryStep4 planPrice={planPrice} />
      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonConfirm onClick={onNextStep} />
      </div>
    </div>
  );
}
