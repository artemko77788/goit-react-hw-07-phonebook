import { DebounceInput } from 'react-debounce-input';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactSlise';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);
  return (
    <form>
      <label className={s.label}>
        Find contacts by name
        <DebounceInput
          type="text"
          minLength={2}
          debounceTimeout={300}
          onChange={e => dispatch(setFilter(e.target.value))}
          value={filter}
          className={s.input}
        />
      </label>
    </form>
  );
}

export default Filter;
