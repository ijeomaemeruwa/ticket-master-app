<template>
  <div class="ticket__counter" @click="$emit('decrement', id)">
   <img 
    :src="require('../assets/img/decrement.png')" 
    alt="decrement">
  </div>
</template>

<script>
export default {
  name: 'Decrement',
  props: ['id']
}
</script>

<style scoped>
</style>