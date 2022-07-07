import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import { getFilter, getState } from 'redux/todoSlice';
import s from './App.module.css';

function App() {
  const users = useSelector(getState);
  const filter = useSelector(getFilter);

  const filterByName = () => {
    return [...users].filter(contacts =>
      contacts.name.toLowerCase().startsWith(filter)
    );
  };
  const data = filterByName();

  return (
    <div className={s.app}>
      <h1 className={s.text}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.text}>Contacts</h2>
      <Filter />
      <Contacts data={data} />
    </div>
  );
}

export default App;
