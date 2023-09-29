import { Helmet } from 'react-helmet';
import { Contacts } from 'components/Contacts/Contacts';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Contacts />
    </div>
  );
}
