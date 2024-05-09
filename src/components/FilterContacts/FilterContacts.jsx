import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterContacts/slice';
import { getFilter } from '../../redux/selectors';

const FilterContacts = () => {
  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'filter') {
      dispatch(setFilter(value));
    }
  };

  return (
    <div className="search-container">
      <label htmlFor="filter" className="search-lable">
        Find contacts by name
      </label>
      <input
        value={filter}
        onChange={evt => handleChange(evt)}
        className="form-imput"
        type="text"
        id="filter"
        name="filter"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </div>
  );
};

export default FilterContacts;
