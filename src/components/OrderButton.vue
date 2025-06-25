<template>
  <button class="order-button" @click="sendOrder">
    Place Order
  </button>
</template>

<script>
export default {
  name: 'OrderButton',
  props: {
    sendOrder: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
@import './OrderButton.css';
</style>