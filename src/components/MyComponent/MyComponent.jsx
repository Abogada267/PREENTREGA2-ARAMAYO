import Button from './Button'; // Asegúrate de proporcionar la ruta correcta hacia el componente Button.

const MyComponent = () => {
  const handleButtonClick = () => {
    // Lógica para manejar el clic del botón.
  };

  return (
    <div>
      {/* Asegúrate de pasar la prop color al usar el componente Button */}
      <Button color="blue" label="Click Me" callback={handleButtonClick} />
    </div>
  );
};

export default MyComponent;