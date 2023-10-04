import React, { useContext } from 'react';
import css from './Step4.module.css';
import TitleSteps from 'components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';
import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import { PlanContext } from 'components/PlanContext/PlanContext';
import { useNavigationHandlers } from './navigationHandlers';
import ButtonConfirm from 'components/ButtonConfirm/ButtonConfirm';
import SummaryStep4 from 'components/SummaryStep4/SummaryStep4';
import { getStep4Data } from './step4Helpers';

export default function Step4() {
  const { planDetails } = useContext(PlanContext);

  const step4Data = getStep4Data(planDetails);

  console.log(planDetails);

  const { handleFormSubmit, onGoBack } = useNavigationHandlers(step4Data.plan);

  return (
    <form onSubmit={handleFormSubmit} className={css.container}>
      <div className={css.contentContainer}>
        <TitleSteps title="Finishing up" />
        <CommentSteps comment="Double-check everything looks OK before confirming." />
        <SummaryStep4
          planName={step4Data.planName}
          periodName={step4Data.periodName}
          planPrice={step4Data.planPrice}
          online={step4Data.online}
          larger={step4Data.larger}
          custom={step4Data.custom}
          period={step4Data.period}
          priceOnline={step4Data.priceOnline}
          priceLarger={step4Data.priceLarger}
          priceCustom={step4Data.priceCustom}
          perPeriod={step4Data.perPeriod}
          totalPrice={step4Data.totalPrice}
          path={step4Data.path}
        />
      </div>
      <div className={css.buttons}>
        <ButtonGoBack onClick={onGoBack} />
        <ButtonConfirm />
      </div>
    </form>
  );
}
