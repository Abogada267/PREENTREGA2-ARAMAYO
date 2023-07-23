import MOCK_DATA from '../ItemListContainer/MOCK_DATA.js';

export const pedirDatos = () => {
  return new Promise((resolve) => {
    
    setTimeout(() => {
      resolve(MOCK_DATA); // 
    }, 2000);
  });
};

export default pedirDatos