import { useSelector } from "react-redux";
import '../App.css'
import CartItem from "./CartItem";
export default function Cart() {
  const cart = useSelector(state => state['cart']);
  const productPrice = useSelector(state => state['product-price']);
  const subTotal = useSelector(state => state['subTotal']);
  const savings = useSelector(state => state['savings']);
  const totalAmount = useSelector(state => state['totalAmount']);
  return (
    <>
      <h2>Cart List</h2>
      {/* <button onClick={()=> console.log(Object.keys(prodList))}>click</button> */}
      {Object.keys(cart)?.map((item) => {
        return (
          <CartItem name={item} price={productPrice[item]} quantity={cart[item]} />
        )
      })}
      <span className="cart-summary"><p>Sub Total:</p> <strong>&#163;{subTotal?.toFixed(2) || 0.00}</strong></span>
      <span className="cart-summary"><p>Savings:</p> <strong>&#163;{savings?.toFixed(2) || 0.00}</strong></span>
      <span className="cart-summary"><p>Total Amount:</p> <strong>&#163;{totalAmount?.toFixed(2) || 0.00}</strong></span>
    </>
  );
}