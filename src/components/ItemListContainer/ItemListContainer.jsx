import { useEffect, useState } from 'react';
import ItemList from './ItemListContainer';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simular llamada a una API con un retraso de 5 segundos
    setTimeout(() => {
      const fetchedItems = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
      ];
      setItems(fetchedItems);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>Loading items...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
