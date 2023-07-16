
import PropTypes from 'prop-types';

const ItemCard = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;

