import React from 'react';
import './OrderButton.css';

function OrderButton({ sendOrder }) {
  return (
    <button className="order-button" onClick={sendOrder}>
      Place Order
    </button>
  );
}

export default OrderButton;