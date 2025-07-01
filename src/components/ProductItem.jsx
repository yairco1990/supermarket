import React, { useState } from 'react';
import './ProductItem.css';

function ProductItem({ product, updateOrder }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateOrder(product.id, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateOrder(product.id, newQuantity);
    }
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <div className="quantity-control">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default ProductItem;