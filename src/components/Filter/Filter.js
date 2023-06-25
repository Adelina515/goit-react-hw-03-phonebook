import PropTypes from 'prop-types';
import style from 'components/Filter/Filter.module.css';

const Filter = ({ hendleChange }) => {
  return (
    <>
      <label className={style.labelFil}> Find contacts by name </label>
      <input
        className={style.inputFil}
        type="text"
        onChange={hendleChange}
        name="filter"
      />
    </>
  );
};

Filter.propTypes = {
  hendleChange: PropTypes.func.isRequired,
};
export default Filter;
