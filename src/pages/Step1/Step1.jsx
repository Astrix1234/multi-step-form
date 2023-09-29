import React from 'react';
import css from './Step1.module.css';
import TitleSteps from '../../components/TitleSteps/TitleSteps';
import CommentSteps from 'components/CommentSteps/CommentSteps';

export default function Step1() {
  return (
    <div className={css.container}>
      <TitleSteps title="Personal info" />
      <CommentSteps comment="Please provide your name, email address, and phone number." />
    </div>
  );
}
