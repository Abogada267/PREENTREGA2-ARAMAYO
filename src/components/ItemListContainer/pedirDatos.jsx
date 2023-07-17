const pedirDatos = () => {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const res = [
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" }
      ];
      resolve(res);
    }, 2000);
  });
};

export default pedirDatos;






