import PropTypes from "prop-types";

const Fragment = ({propFragment}) => {
  return (
    <>
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

Fragment.propTypes = {
    propFragment: PropTypes.string.isRequired // Valida que a prop 'propFragment' é uma string obrigatória
  };

export default Fragment