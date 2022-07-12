import PropTypes from 'prop-types';
import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import s from './Contacts.module.css';

import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactSlise';

import { SpinnerRoundOutlined } from 'spinners-react';

import Filter from 'components/Filter';
import { useState, useMemo } from 'react';

const Contacts = () => {
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteUser, result] = useDeleteContactMutation();

  const filteredDataByName = useMemo(
    () =>
      data?.filter(
        ({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()) ?? []
      ),
    [data, filter]
  );

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
