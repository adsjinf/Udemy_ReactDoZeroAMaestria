import PropTypes from "prop-types";

const ExecuteFunctions = ({ myFunction }) => {
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para executar a funçãp!</button>
    </div>
  )
}

ExecuteFunctions.propTypes = {
    myFunction: PropTypes.func.isRequired, // Valida que a prop 'myFunction' é uma função obrigatória
  };


export default ExecuteFunctions