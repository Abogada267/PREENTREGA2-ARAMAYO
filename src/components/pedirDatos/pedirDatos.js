/* eslint-disable no-undef */

export const pedirDatos = () => {
  return new Promise((resolve) => {
    
    setTimeout(() => {
      resolve(MOCK_DATA); // 
    }, 2000);
  });
};

export default pedirDatos