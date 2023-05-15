import PropTypes from 'prop-types';

const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Введите название"
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
