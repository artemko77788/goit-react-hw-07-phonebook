import PropTypes from 'prop-types';
import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import s from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/todoSlice';

const Contacts = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {data.map(({ name, id, number }) => {
        return (
          <li key={id} className={s.item}>
            <span>{name}</span>: <span>{number}</span>
            <button
              key={id}
              onClick={() => dispatch(deleteUser(id))}
              className={s.btn}
            >
              <BiArrowBack className={s.arrow} />
              <GrBasket />
            </button>
          </li>
        );
      })}
    </ul>
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
