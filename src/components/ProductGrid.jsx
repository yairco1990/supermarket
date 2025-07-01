import React from 'react';
import ProductItem from './ProductItem.jsx';
import './ProductGrid.css';

function ProductGrid({ products, updateOrder }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductItem 
          key={product.id}
          product={product}
          updateOrder={updateOrder}
        />
      ))}
    </div>
  );
}

export default ProductGrid;