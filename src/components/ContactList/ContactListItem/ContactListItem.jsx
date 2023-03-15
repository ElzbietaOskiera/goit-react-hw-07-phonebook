import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'
import { useDispatch } from 'react-redux';

import { deleteContacts } from 'redux/operations';


export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <li className={css.li}>
      <p>
        {name}: {number}
      </p>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
