import React from 'react';
import { Link } from 'react-router-dom';
import css from './SummaryStep4.module.css';
import PropTypes from 'prop-types';

const SummaryStep4 = ({
  planName,
  periodName,
  path,
  planPrice,
  price,
  period,
  perPeriod,
  totalPrice,
  online,
  larger,
  custom,
}) => {
  return (
    <div className={css.mainContainer}>
      <div className={css.container}>
        <div className={css.plan}>
          <div>
            <p className={css.planName}>
              {planName}({periodName})
            </p>
            <Link className={css.link} to={path}>
              Chang
            </Link>
          </div>
          <p className={css.planPrice}>{`$${planPrice}/${period}`}</p>
        </div>
        <hr className={css.line} />
        {online ? (
          <div className={css.service}>
            <p className={css.serviceName}>Online service</p>
            <p className={css.servicePrice}>{`$${price}/${period}`}</p>
          </div>
        ) : null}
        {larger ? (
          <div className={css.service}>
            <p className={css.serviceName}>Larger storage</p>
            <p className={css.servicePrice}>{`$${price}/${period}`}</p>
          </div>
        ) : null}
        {custom ? (
          <div className={css.service}>
            <p className={css.serviceName}>Customizable Profile</p>
            <p className={css.servicePrice}>{`$${price}/${period}`}</p>
          </div>
        ) : null}
      </div>
      <div className={css.total}>
        <p className={css.totalText}>Total({perPeriod})</p>
        <p className={css.totalPrice}>{`$${totalPrice}/${period}`}</p>
      </div>
    </div>
  );
};
SummaryStep4.propTypes = {
  planName: PropTypes.string.isRequired,
  periodName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  perPeriod: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  online: PropTypes.bool.isRequired,
  larger: PropTypes.bool.isRequired,
  custom: PropTypes.bool.isRequired,
};

export default SummaryStep4;
