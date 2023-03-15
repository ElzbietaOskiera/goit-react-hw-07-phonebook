import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';


export const App = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {contactsItems.length > 0 && <Filter />}
      {contactsItems.length > 0 && <ContactList />}
    </>
  );
};
