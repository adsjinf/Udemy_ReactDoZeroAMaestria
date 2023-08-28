import PropTypes from "prop-types";

const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário: {props.name}</h2>
    </div>
  )
}

ShowUserName.propTypes = {
    name: PropTypes.string.isRequired, // Valida que a prop 'name' é uma string obrigatória
  };

export default ShowUserName