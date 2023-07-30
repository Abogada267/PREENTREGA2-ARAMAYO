import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
      <div className='nav-container'>
      <nav className='navbar'></nav>
      <h1 className='navbar-logo'>Recorre la pagina y ve las Ofertas!!!</h1>
      <Link className='seeCarrito' to="/cart">🛒</Link> 
    </div>
  );
};

export default NavBar;


