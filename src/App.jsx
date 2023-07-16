import './App.css';
import Brand from './components/Brand';
import Button from "./components/Button.jsx";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

const handleClick = () => {
  console.log('Botón clickeado');
};

const App = () => {
  return (
    <div>
      <Button color="blue" label="Hola Haz Click y ve las ofertas del día!!!" callback={handleClick} />
      <NavBar />
      <Header />
      <Brand />
    </div>
  );
};

export default App;

