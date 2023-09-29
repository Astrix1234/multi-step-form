import React from 'react';
import PropTypes from 'prop-types';
import css from './CommentSteps.module.css';

const CommentSteps = ({ comment }) => {
  return <p className={css.comment}>{comment}</p>;
};

CommentSteps.propTypes = {
  comment: PropTypes.string.isRequired,
};

export default CommentSteps;
