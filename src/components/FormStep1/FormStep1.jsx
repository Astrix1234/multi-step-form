import React, { useContext } from 'react';
import css from './FormStep1.module.css';
import { validationSchema } from './validationSchema';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import ButtonNextStep from 'components/ButtonNextStep/ButtonNextStep';
import { PlanContext } from 'components/PlanContext/PlanContext';

const FormStep1 = () => {
  const navigate = useNavigate();
  const { setPlanDetails } = useContext(PlanContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      setPlanDetails(prevState => ({
        ...prevState,
        step1Completed: true,
      }));

      navigate('/step2-monthly');
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <div className={css.inputsContainer}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            id="name"
            placeholder="e.g. Stephen King"
            className={`${css.input} ${
              formik.touched.name && formik.errors.name ? css.error : ''
            }`}
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={css.formikMessage}>{formik.errors.name}</div>
          ) : null}
        </label>
        <label htmlFor="email" className={css.label}>
          Email Address
          <input
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className={`${css.input} ${
              formik.touched.email && formik.errors.email ? css.error : ''
            }`}
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={css.formikMessage}>{formik.errors.email}</div>
          ) : null}
        </label>
        <label htmlFor="phone" className={css.label}>
          Phone Number
          <input
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className={`${css.input} ${css.inputPhone} ${
              formik.touched.phone && formik.errors.phone ? css.error : ''
            }`}
            type="tel"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className={css.formikMessage}>{formik.errors.phone}</div>
          ) : null}
        </label>
      </div>
      <div className={css.button}>
        <ButtonNextStep type="submit" />
      </div>
    </form>
  );
};

export default FormStep1;
