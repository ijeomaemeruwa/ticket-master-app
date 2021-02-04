<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>



<script>
import Nav from './components/Nav';
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>



<style>
*, ::before, ::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --background: #f2f2f2;
  --primary-color: #333;
  --accent: #F5A623;

}
body {
  background: #f2f2f2;
  font-family: 'Poppins', sans-serif;
 }
</style>
