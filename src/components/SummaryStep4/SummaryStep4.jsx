import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import css from './SummaryStep4.module.css';
import PropTypes from 'prop-types';
import { getStep4Data } from './step4Helpers';
import { PlanContext } from 'components/PlanContext/PlanContext';

const SummaryStep4 = () => {
  const { planDetails } = useContext(PlanContext);
  const step4Data = getStep4Data(planDetails);

  return (
    <div className={css.mainContainer}>
      <div className={css.container}>
        <div className={css.plan}>
          <div>
            <p className={css.planName}>
              {step4Data.planName}({step4Data.periodName})
            </p>
            <Link className={css.link} to={step4Data.path}>
              Change
            </Link>
          </div>
          <p
            className={css.planPrice}
          >{`$${step4Data.planPrice}/${step4Data.period}`}</p>
        </div>
        <hr className={css.line} />
        {step4Data.online ? (
          <div className={css.service}>
            <p className={css.serviceName}>Online service</p>
            <p
              className={css.servicePrice}
            >{`$${step4Data.priceOnline}/${step4Data.period}`}</p>
          </div>
        ) : null}
        {step4Data.larger ? (
          <div className={css.service}>
            <p className={css.serviceName}>Larger storage</p>
            <p
              className={css.servicePrice}
            >{`$${step4Data.priceLarger}/${step4Data.period}`}</p>
          </div>
        ) : null}
        {step4Data.custom ? (
          <div className={css.service}>
            <p className={css.serviceName}>Customizable Profile</p>
            <p
              className={css.servicePrice}
            >{`$${step4Data.priceCustom}/${step4Data.period}`}</p>
          </div>
        ) : null}
      </div>
      <div className={css.total}>
        <p className={css.totalText}>Total({step4Data.perPeriod})</p>
        <p
          className={css.totalPrice}
        >{`$${step4Data.totalPrice}/${step4Data.period}`}</p>
      </div>
    </div>
  );
};
SummaryStep4.propTypes = {
  planName: PropTypes.string.isRequired,
  periodName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  priceOnline: PropTypes.number.isRequired,
  priceLarger: PropTypes.number.isRequired,
  priceCustom: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  perPeriod: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  online: PropTypes.bool.isRequired,
  larger: PropTypes.bool.isRequired,
  custom: PropTypes.bool.isRequired,
};

export default SummaryStep4;
