<template>
  <div class="ticket__counter" @click="$emit('increment', id)">
   <img 
    :src="require('../assets/img/increment.png')" 
    alt="increment">
  </div>
</template>


<script>
export default {
  name: 'Increment',
  props: ['id']
}
</script>


<style scoped>
</style>