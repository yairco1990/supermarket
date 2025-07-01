import React, { useState } from 'react';
import ProductGrid from './components/ProductGrid.jsx';
import OrderButton from './components/OrderButton.jsx';
import Header from './components/Header.jsx';
import OrderSummary from './components/OrderSummary.jsx';
import { products } from './data/products.js';
import './App.css';

function App() {
  const [order, setOrder] = useState({});
  const [orderSummary, setOrderSummary] = useState(null);

  const updateOrder = (productId, quantity) => {
    setOrder(prevOrder => ({
      ...prevOrder,
      [productId]: quantity
    }));
  };

  const sendOrder = () => {
    const summary = products
      .filter(product => order[product.id] > 0)
      .map(product => ({
        name: product.name,
        quantity: order[product.id],
        total: product.price * order[product.id]
      }));
    
    const totalAmount = summary.reduce((sum, item) => sum + item.total, 0);
    
    setOrderSummary({ items: summary, total: totalAmount });
  };

  return (
    <div className="App">
      <Header />
      <ProductGrid products={products} updateOrder={updateOrder} />
      <OrderButton sendOrder={sendOrder} />
      {orderSummary && <OrderSummary summary={orderSummary} />}
    </div>
  );
}

export default App;