import PropTypes from "prop-types";

const Message = ({msg}) => {
  return (
    <div>A mesagem é: {msg}</div>
  )
}

Message.propTypes = {
    msg: PropTypes.object.isRequired, // Valida que a prop 'msg' é um object obrigatória
  };
export default Message
