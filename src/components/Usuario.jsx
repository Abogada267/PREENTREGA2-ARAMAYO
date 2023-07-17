import PropTypes from 'prop-types';

export const Usuario = ({ nombre, edad, rol }) => {
  return (
    <li>
      <h3>{nombre}</h3>
      <p>Edad: {edad}</p>
      <p>Rol: {rol}</p>
    </li>
  );
};

Usuario.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  rol: PropTypes.string.isRequired,
};

export default Usuario;
