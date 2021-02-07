<template>
<nav class="nav">
<h3>Logo</h3>
<div class="nav__links">
  <router-link to="/cart"><p>I didn't get my tickets</p></router-link>
  <div class="button__container">
    <button class="app__button">
      Create your own event
    </button>
  </div>
</div>
</nav>
</template>


<script>
export default {
    name: 'Nav'
}
</script>


<style scoped>
.nav {
    display: flex;
    flex-flow: row wrap;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 60px;
}

h3 {
    padding-left: 25px;
}

.nav__links {
    display: flex;
    align-items: center;
}

p {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #333;
  margin-top: 0.6rem;
}

.button__container {
    width: 206px;
    height: 36.6px;
   
}
/* 
button {
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
} */

</style>