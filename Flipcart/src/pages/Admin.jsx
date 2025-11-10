import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Admin.css'
import Items from'./Items'
import Cart from './Cart'   

function  Home() {
const [cartItems, setCart] = useState([]);
const addToCart = (item) => {
  setCart((prevCart) => [...prevCart, item]);
};
//  const removeFromCart = (indexToRemove) => {
//     setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
//   }
  
  return (
    <>
    < nav className= "navbar">
    <div className= "navdiv">
        <ul>
      <li><a href= "/Admin">Home</a></li>
      <li><a href= "/Login">Login</a></li>
      </ul>
      <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNit-5k7lXLMpGsJt2iDIeB9PSNqxo0E9a9w&s'></img></div>   
    </div>
    </nav>
    <div>
     <Items addToCart={addToCart}/>
     </div>
     <>
     <Cart cartItems={cartItems}/>
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
     </>
    </>
  )
}
 
export default Home