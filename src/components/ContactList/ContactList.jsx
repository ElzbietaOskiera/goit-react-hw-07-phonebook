import css from './ContactList.module.css'
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

import { ContactListItem } from './ContactListItem/ContactListItem';


export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.ul}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem id={id} name={name} number={number} key={id} />
      ))}
    </ul>
  );
};