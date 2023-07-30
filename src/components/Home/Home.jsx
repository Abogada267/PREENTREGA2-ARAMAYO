import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Contenedor from "../Contenedor/Contenedor";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";


const Home = () => {
    const handleButtonClick = () => {

    };
    return (
        <>
            <NavBar />
            <Banner />
            <Contenedor />
            <Button color="blue" label="Click Me" callback={handleButtonClick} />
            <div className='product-card-container'>
             <Products/>   
                <Header /> 
            </div>
        </>
        
    );
};

export default Home;