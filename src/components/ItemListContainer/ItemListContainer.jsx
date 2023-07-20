import { useEffect, useState } from 'react';
import '../ItemList/ItemList';
import './ItemListContainer.css';
import './ItemListContainer.scss';
import './pedirDatos';
import pedirDatos from './pedirDatos';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  console.log (productos, loading,setLoading)

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
        console.log(pedirDatos)
      });
  }, []);

  const usuarios = [
    { id: 1, nombre: "Malvina" },
    { id: 2, nombre: "Ivan" },
    { id: 3, nombre: "juan" }
  ];
  const resultado = usuarios.map(() => "Hola");
  console.log(resultado);

  return (
    <div className="catalogo_contenedor">
      <h2>Item List Container</h2>
      <hr />
      <p>Hola mundo</p>
     
    </div>
  );
};

export default ItemListContainer;




