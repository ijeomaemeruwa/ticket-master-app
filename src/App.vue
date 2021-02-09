<template>
  <div id="app">
  <transition name="app" mode="out-in">
    <router-view />
  </transition>
  </div>
</template>



<script>
export default {
  name: 'App'
  
}
</script>



<style>
@import "../src/assets/main.css";

*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* :root {
  --background: #f2f2f2;
  --dark-1: #333;
  --dark-2: #12122c;
  --dark-3: #4a4a4a;
  --dark-4: #4f4f4f;
  --white: #fff;
  --accent-1: #F5A623;
  --accent-2: #828282;
  --accent-input: #fdfdfd;
} */


body {
  background: #f2f2f2;
  font-family: 'Flutterwave';
 }

.app-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}
.app-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}

.app__button {
  width: 100%;
  height: 100%;
  background: #F5A623;
  border: none;
  border-radius: 4px;
  outline: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0px 1.01673px 1.01673px rgba(0, 0, 0, 0.5);
}


.ticket__counter {
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: #fff;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-shadow: 0px 1.01673px 1.01673px rgba(0, 0, 0, 0.5);
}

</style>
