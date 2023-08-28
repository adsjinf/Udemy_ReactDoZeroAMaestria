import PropTypes from "prop-types";

const ExecuteFunctions = ({ myFunction }) => {
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para executar a funçãp!</button>
    </div>
  )
}

ExecuteFunctions.propTypes = {
    myFunction: PropTypes.func.isRequired, // Valida que a prop 'myFunction' é uma string obrigatória
  };


export default ExecuteFunctions