<template>
  <div class="order-summary">
    <h2>Order Summary</h2>
    <p v-for="(item, index) in summary.items" :key="index">
      {{ item.name }}: {{ item.quantity }} x ${{ item.total.toFixed(2) }}
    </p>
    <p><strong>Total: ${{ summary.total.toFixed(2) }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'OrderSummary',
  props: {
    summary: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.order-summary {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>