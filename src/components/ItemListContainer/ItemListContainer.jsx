import { useEffect, useState } from 'react';
import './ItemListContainer.scss';
import pedirDatos from './pedirDatos';

const ItemListContainer = () => {
  const [product, setProductos] = useState([]);
  console.log(product)

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const usuarios = [
    { id: 1, nombre: "Malvina" },
    { id: 2, nombre: "Ivan" },
    { id: 3, nombre: "juan" }
  ];
  const resultado = usuarios.map(() => "Hola");
  console.log(resultado);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((resp) => resp.text())
      .then((data) => {
        console.log(data)
      });
  },  []);
  
  return (
    <div className="catalogo_contenedor">
      <h2>Item List Container</h2>
      <hr />
      <p>Hola mundo</p>
     {}
    </div>
  );
};

export default ItemListContainer;
