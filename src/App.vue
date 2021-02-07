<template>
  <div id="app">
    <router-view />
  </div>
</template>



<script>
export default {
  name: 'App'
  
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


.app__button {
    width: 100%;
    height: 100%;
    background: #F5A623;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    margin-left: 30px;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    overflow: none;
    box-shadow: 0px 1.01673px 1.01673px rgba(0, 0, 0, 0.5);
}

.content__button {

}
</style>
