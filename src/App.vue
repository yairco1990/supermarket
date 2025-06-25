<template>
  <div class="App">
    <Header />
    <ProductGrid :products="products" :updateOrder="updateOrder" />
    <OrderButton :sendOrder="sendOrder" />
    <OrderSummary v-if="orderSummary" :summary="orderSummary" />
  </div>
</template>

<script>
import { ref } from 'vue';
import ProductGrid from './components/ProductGrid.vue';
import OrderButton from './components/OrderButton.vue';
import Header from './components/Header.vue';
import OrderSummary from './components/OrderSummary.vue';
import { products } from './data/products.js';

export default {
  name: 'App',
  components: {
    ProductGrid,
    OrderButton,
    Header,
    OrderSummary
  },
  setup() {
    const order = ref({});
    const orderSummary = ref(null);

    const updateOrder = (productId, quantity) => {
      order.value = {
        ...order.value,
        [productId]: quantity
      };
    };

    const sendOrder = () => {
      const summary = products
        .filter(product => order.value[product.id] > 0)
        .map(product => ({
          name: product.name,
          quantity: order.value[product.id],
          total: product.price * order.value[product.id]
        }));
      
      const totalAmount = summary.reduce((sum, item) => sum + item.total, 0);
      
      orderSummary.value = { items: summary, total: totalAmount };
    };

    return {
      order,
      orderSummary,
      products,
      updateOrder,
      sendOrder
    };
  }
};
</script>

<style>
@import './App.css';
</style>