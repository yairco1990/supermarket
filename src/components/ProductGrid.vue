<template>
  <div class="product-grid">
    <ProductItem 
      v-for="product in products" 
      :key="product.id" 
      :product="product" 
      :updateOrder="updateOrder" 
    />
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductGrid',
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    updateOrder: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
@import './ProductGrid.css';
</style>