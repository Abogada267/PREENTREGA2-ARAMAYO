import styles from './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className={styles.navBar}>
        <ul>
          <li><a href="#">INICIO </a></li>
          <li><a href="#">ACERCA DE</a></li>
          <li><a href="#">SERVICIOS</a></li>
          <li><a href="#"> CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
