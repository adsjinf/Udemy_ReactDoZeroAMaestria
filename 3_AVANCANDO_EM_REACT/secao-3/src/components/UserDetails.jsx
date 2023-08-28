import PropTypes from "prop-types";

const UserDetails = ({nome, profissao, idade}) => {
  return (
    <div>
        <p>====================================================================</p>
        <h2>Nome: {nome}</h2>
        <p>Profissão: {profissao}</p>
        <p>Idade: {idade}</p>
        <p>{idade >= 18 ? `Com ${idade} anos é permitido tirar a Carteira de Motorista` : `Infelizmente, pessoas com ${idade} anos não podem tirar carteira de Motorista`}</p>
    </div>
  )
}

UserDetails.propTypes = {
    nome: PropTypes.string.isRequired, // Valida que a prop 'nome' é uma string obrigatória
    profissao: PropTypes.string.isRequired, // Valida que a prop 'profissao' é uma string obrigatória
    idade: PropTypes.number.isRequired, // Valida que a prop 'idade' é um número obrigatória
  };

export default UserDetails