import css from './Filter.module.css'
import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';


export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.div}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={event => handleFilterChange(event.target.value)}
      ></input>
    </div>
  );
};


