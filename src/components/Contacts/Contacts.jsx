import PropTypes from 'prop-types';
import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import s from './Contacts.module.css';
import { useDeleteContactMutation } from 'redux/contactSlise';
import { SpinnerRoundOutlined } from 'spinners-react';
import Filter from 'components/Filter';
import { useFulter } from 'redux/contacts-selector';

const Contacts = () => {
  const [deleteUser, result] = useDeleteContactMutation();
  const {
    error,
    filter,
    setFilter,
    isLoading,
    filteredDataByName,
  } = useFulter();
  return (
    <div>
      {<Filter value={filter} onChange={setFilter} />}
      {error && <p>Somesing wrong</p>}

      {isLoading || result.isLoading ? (
        <SpinnerRoundOutlined className={s.spiner} />
      ) : (
        <ul className={s.list}>
          {filteredDataByName.map(({ name, id, number }) => {
            return (
              <li key={id} className={s.item}>
                <span>{name}</span>: <span>{number}</span>
                <button
                  key={id}
                  onClick={() => deleteUser(id)}
                  className={s.btn}
                >
                  <BiArrowBack className={s.arrow} />
                  <GrBasket />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
