import React, { useState } from "react";
import "./pay.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate=useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    alert(`Payment successful using ${paymentMethod}`);
    navigate("/");
  };

  return (
    <div className="payment-container">
      <h2>Billing Details</h2>

      <form onSubmit={handleSubmit} className="payment-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={billingDetails.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={billingDetails.address}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={billingDetails.phone}
          onChange={handleChange}
          required
        />

        <h3>Select Payment Method:</h3>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment"
              value="Credit/Debit Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI (Google Pay / PhonePe)
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>

        <button type="submit" className="pay-btn">Proceed to Pay</button>
      </form>
    </div>
  );
}

export default Payment;
