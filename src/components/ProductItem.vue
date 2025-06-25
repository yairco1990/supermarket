<template>
  <div class="product-item">
    <h3>{{ product.name }}</h3>
    <p>${{ product.price.toFixed(2) }}</p>
    <div class="quantity-control">
      <button @click="handleDecrement">-</button>
      <span>{{ quantity }}</span>
      <button @click="handleIncrement">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    },
    updateOrder: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const quantity = ref(0);

    const handleIncrement = () => {
      quantity.value += 1;
      props.updateOrder(props.product.id, quantity.value);
    };

    const handleDecrement = () => {
      if (quantity.value > 0) {
        quantity.value -= 1;
        props.updateOrder(props.product.id, quantity.value);
      }
    };

    return {
      quantity,
      handleIncrement,
      handleDecrement
    };
  }
}
</script>

<style>
@import './ProductItem.css';
</style>