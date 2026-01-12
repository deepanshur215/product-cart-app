import { useSelector } from "react-redux";
import '../App.css'
import ProductItem from "./ProductItem";
export default function Product() {
  const prodList = useSelector(state => state['product-price']);
  const state = useSelector(state => state);
  return (
    <>
      <h2>Product List</h2>
      {Object.keys(prodList).map((item) => {
        return (
          <ProductItem name={item} price={prodList[item]} />
        )
      })}
    </>
  );
}