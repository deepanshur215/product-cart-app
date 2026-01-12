import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import { useSelector } from 'react-redux';
import Cart from './components/Cart';

function App() {
  const [active,setActive] = useState('product');
  
  const cartItems = useSelector(state => Object.values(state.cart)?.reduce((acc,val) => acc+val,0) || 0)

  return (
    <div className='home-page'>
    <button onClick={()=>setActive('product')} >Product Page</button>
    <button onClick={()=>setActive('cart')}>Cart Page ({cartItems})</button>
    {active === "product" ? <Product /> : <Cart/>}
    </div>
  )
}

export default App
