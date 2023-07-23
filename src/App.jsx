import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Brand from './components/Brand';
import Button from './components/Button.jsx';
import Clicker from './components/Clicker.jsx';
import Contenedor from './components/Contenedor.jsx';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import PokeApi from './components/PokeApi.jsx';
import Usuario from './components/Usuario.jsx';
import './components/variables/_general.scss';

const handleClick = () => {
  console.log('Botón clickeado');
};

const App = () => {
  const nombreUsuario = 'John Doe';
  const edadUsuario = 25;
  const rolUsuario = 'Admin';

  return (
    <BrowserRouter>
      <div>
        <Button color="black" label="Haz Click y ve las ofertas del día!!!" imgSrc="/bhuo.svg" callback={handleClick} />
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/" element={<PokeApi />} />
        </Routes>
        <NavBar />
        <Clicker />
        <Usuario nombre={nombreUsuario} edad={edadUsuario} rol={rolUsuario} />
        <Contenedor />
        <Brand />
        <ItemListContainer />
        <PokeApi />
      </div>
    </BrowserRouter>
  );
};

export default App;

