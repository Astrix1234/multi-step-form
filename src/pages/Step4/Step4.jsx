import React, { useContext, useEffect } from 'react';
import css from './Step4.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { PlanContext } from 'components/PlanContext/PlanContext';
import { useNavigationHandlers } from './navigationHandlers';
import ButtonConfirm from 'components/ButtonConfirm/ButtonConfirm';
import SummaryStep4 from 'components/SummaryStep4/SummaryStep4';
import { getStep4Data } from 'components/SummaryStep4/step4Helpers';
import { useNavigate } from 'react-router-dom';

export default function Step4() {
  const navigate = useNavigate();
  const { planDetails } = useContext(PlanContext);
  const step4Data = getStep4Data(planDetails);

  // console.log(planDetails);

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

  const { handleFormSubmit, onGoBack } = useNavigationHandlers(step4Data.plan);

  return (
    <form onSubmit={handleFormSubmit} className={css.container}>
      <div className={css.contentContainer}>
        <TitleSteps title="Finishing up" />
        <CommentSteps comment="Double-check everything looks OK before confirming." />
        <SummaryStep4 />
      </div>
      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonConfirm />
      </div>
    </form>
  );
}
