import ContactForm from 'components/ContactForm';
import Contacts from 'components/Contacts';

import { ToastContainer } from 'react-toastify';

import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <ToastContainer />
      <h1 className={s.text}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.text}>Contacts</h2>

      <Contacts />
    </div>
  );
}

export default App;
