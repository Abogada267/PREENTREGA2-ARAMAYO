// eslint-disable-next-line no-unused-vars
const Contenedor = (props) => {
    console.log(props);
    const estilos = {
        background: "grey",
        color: "white",
        padding: "20px",
        margin: "0 auto",
        maxWidth: "1100px",  
    };

    return (
        <div style={estilos}>
                  <h2>Un Titulo</h2>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa debitis, atque sunt assumenda quis, hic officiis aliquam ipsum consequuntur dolores quibusdam aspernatur quam corrupti sequi cum reiciendis, illum quia vel?</p>
        </div>  
    );
};

export default Contenedor