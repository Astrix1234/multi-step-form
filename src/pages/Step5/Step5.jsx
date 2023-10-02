import React from 'react';
import css from './Step5.module.css';

export default function Step5() {
  return (
    <div className={css.container}>
      <div className={css.icon}></div>
      <h2 className={css.title}>Thank you!</h2>
      <p className={css.thanks}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
