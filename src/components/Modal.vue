<template>
<transition name="modal-fade">
<div class="modal-backdrop">
<div class="modal"   
    role="dialog"
    aria-labelledby="modalTitle"
    aria-describedby="modalDescription"
 >
 <div class="modal-content">
   <slot></slot>
 </div> 
</div>
</div>
</transition>
</template>

<script>
export default {
 name: 'Modal',

props: ['show'],
// methods: {
//     close() {
//     this.$emit('close');
//     },
// }, 
}
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
   opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 400px;
    height: 500px;
  }

.modal-content {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
</style>