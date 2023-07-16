import PropTypes from 'prop-types';
import Item from './ItemList';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemList;

