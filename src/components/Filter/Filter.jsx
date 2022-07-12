import { DebounceInput } from 'react-debounce-input';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <form>
      <label className={s.label}>
        Find contacts by name
        <DebounceInput
          type="text"
          minLength={2}
          debounceTimeout={300}
          onChange={e => onChange(e.target.value)}
          value={value}
          className={s.input}
        />
      </label>
    </form>
  );
}

export default Filter;
