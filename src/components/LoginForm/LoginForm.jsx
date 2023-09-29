import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(form));
    setForm({ email: '', password: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>
      <button className={css.button} type="submit">
        Log In
      </button>
    </form>
  );
};
