import PropTypes from "prop-types";

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

CarDetails.propTypes = {
    brand: PropTypes.string.isRequired, // Valida que a prop 'brand' é uma string obrigatória
    color: PropTypes.string.isRequired, // Valida que a prop 'color' é uma string obrigatória
    km: PropTypes.number.isRequired, // Valida que a prop 'km' é um número obrigatória
    newCar: PropTypes.bool.isRequired // Valida que a prop 'km' é um número obrigatória
  };

export default CarDetails