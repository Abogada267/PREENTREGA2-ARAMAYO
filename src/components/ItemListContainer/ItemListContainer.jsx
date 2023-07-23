import { useEffect, useState } from 'react';
import pedirDatos from '../pedirDatos/pedirDatos.js';
import './ItemListContainer.css';


   
const ItemListContainer = () => {
  const [productos, setProductos] = useState([])


     useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res)
              })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  
  return (
    <div className="catalogo_contenedor">
      <h2>Item List Container</h2>
      <hr />
      <p>Hola mundo</p>
      {productos.map((prod) => (
        <div key={prod.id}> {}
          <h4>{prod.nombre}</h4>
          
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;





