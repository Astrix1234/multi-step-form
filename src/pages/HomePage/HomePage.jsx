import css from './HomePage.module.css';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Contacts manager</title>
      </Helmet>
      <h1 className={css.title}>
        CONTACTS MANAGER WELCOME PAGE{' '}
        <span role="img" aria-label="Greeting icon" className={css.emoji}>
          📚
        </span>
      </h1>
    </div>
  );
}
