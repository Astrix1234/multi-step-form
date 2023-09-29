import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className={css.contactItem}>
    <p className={css.contactName}>
      {name}: {number}
    </p>

    <button
      className={css.buttonDelete}
      type="button"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
