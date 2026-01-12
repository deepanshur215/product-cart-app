import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slice/slice";

export default function ProductItem({ name, price }) {
  const cart = useSelector(state => state['cart']);
  const dispatch = useDispatch();
  return (
    <div className="product-item">
      <p>{name}</p>
      <strong>&#163; {price.toFixed(2)}</strong>
      {/* <button>Add</button> */}
      {Object.keys(cart).includes(name) ? 
       <><button onClick={() => dispatch(removeFromCart({ name }))} className="product-item-button">-</button>
          {cart[name]}
          <button onClick={() => dispatch(addToCart({ name, quantity: 1 }))} className="product-item-button">+</button>
          </>
          : 
          <button onClick={() => dispatch(addToCart({ name, quantity: 1 }))}>Add</button>
        }
    </div>
  );
}