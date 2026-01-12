import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slice/slice";
export default function CartItem({ name, price, quantity }) {
  const dispatch = useDispatch();
  const savings = useSelector(state => state.offers?.[name]);
  return (
    <div className="cart-item">
      <section>
        <p>{name}</p>
        <strong>&#163; {price.toFixed(2)}</strong>
        <span>
          <button onClick={() => dispatch(removeFromCart({ name, price }))}>-</button>
          {quantity || 0}
          <button onClick={() => dispatch(addToCart({ name, quantity: 1 }))}>+</button>
        </span>
      </section>
      <p style={{textAlign: 'end', marginRight: '25vw',marginTop:'10px', color: 'grey'}}>Item Price &#163;{price.toFixed(2)} * {quantity || 0} = &#163;{(price.toFixed(2) * quantity).toFixed(2) || 0}</p>
      {savings && <p style={{textAlign: 'end', marginRight: '25vw',marginTop:'10px', color: 'red'}}>Savings &#163;{(-savings).toFixed(2) || 0.00}</p>}
      <p style={{textAlign: 'end', marginRight: '25vw',marginTop:'10px', color: 'grey'}}>Item Cost &#163;{savings ? (price * quantity + savings).toFixed(2) : (price * quantity).toFixed(2) || 0.00}</p>
    </div>
  );
}