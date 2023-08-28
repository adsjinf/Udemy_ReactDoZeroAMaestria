import PropTypes from "prop-types";

const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <p>O valor é: {myValue}</p>
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.object.isRequired, // Valida que a prop 'children' é uma string obrigatória
    myValue: PropTypes.string.isRequired// Valida que a prop 'myValue' é uma string obrigatória
  };

export default Container
