import React from 'react';
import PropTypes from 'prop-types';
import css from './TitleSteps.module.css';

const TitleSteps = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

TitleSteps.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSteps;
