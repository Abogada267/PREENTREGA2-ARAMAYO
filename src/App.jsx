import './App.css';
import Brand from './components/Brand';
import Button from './components/Button.jsx';
import Clicker from './components/Clicker.jsx';
import Contenedor from './components/Contenedor.jsx';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';
import Usuario from './components/Usuario.jsx';

const handleClick = () => {
  console.log('Botón clickeado');
};

const App = () => {
  const nombreUsuario = 'John Doe';
  const edadUsuario = 25;
  const rolUsuario = 'Admin';
  return (
    <div>
      <Button color="black" label="Haz Click y ve las ofertas del día!!!" imgSrc="/bhuo.svg" callback={handleClick} />
      <Header />
      <NavBar />
      <Clicker />
      <Usuario  nombre={nombreUsuario} edad={edadUsuario} rol={rolUsuario}/>
      <Contenedor />
      <Brand />
      <ItemListContainer />
      
    </div>
  );
};

export default App;
