import React from "react";
import { useNavigate } from "react-router-dom";
function Cart({ cartItems }) {
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
  const goToPayment = () => {
    navigate("/payment", { state: { cartItems, totalAmount } });
  };
  return (
<div>
<h2>🛒 Your Cart</h2>
{cartItems.length === 0 ? (
<p>No items in cart</p>
) : (
<>
 <ul>
{cartItems.map((item, index) => (
<li key={index}>
{item.name} - ₹{item.price}
{/* <button
// onClick={() => removeFromCart(index)}>Remove</button> */}
</li>
))}
</ul>
 <h3>Total Amount: ₹{totalAmount}</h3>
  <button onClick={goToPayment}>Proceed to Payment</button>
</>
)}
</div>
  );
}

export default Cart;
