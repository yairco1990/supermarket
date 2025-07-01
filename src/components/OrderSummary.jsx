import React from 'react';
import './OrderSummary.css';

function OrderSummary({ summary }) {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {summary.items.map((item, index) => (
        <p key={index}>
          {item.name}: {item.quantity} x ${item.total.toFixed(2)}
        </p>
      ))}
      <p><strong>Total: ${summary.total.toFixed(2)}</strong></p>
    </div>
  );
}

export default OrderSummary;