import PropTypes from "prop-types";

function Cousin({ name }) {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

export default Cousin;

Cousin.propTypes = {
  name: PropTypes.string,
};
