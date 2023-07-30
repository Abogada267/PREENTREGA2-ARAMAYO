import { useContext } from "react";
import DataContext from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
const CartElements = () => {
  const { cart } = useContext(DataContext);
  return cart.map((product) => {
    return (
      <div className='CartContent' key={product.id}>
        <img src={product.img} alt='product-card' />
        <h3 className='name'>{product.name}</h3>
        <CartItemCounter />
        <h4 className='price'>{product.price}$</h4>
      </div>
    );
  });
};

export default CartElements;
