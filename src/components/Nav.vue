<template>
<nav class="nav">
<div class="logo">
<router-link to="/">
<img src="../assets/img/Logo.png" alt="logo" />
</router-link>
</div>

<div class="nav__links">
  <router-link 
   to="/getTicket" 
   class="router__link">
   <p>I didn't get my tickets</p>
  </router-link>
  <div class="btn__container">
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
  height: 100px;
  padding: 10px 60px;
}

.logo {
  padding-left: 25px;
}
@media screen and (max-width: 768px) {
  .logo {
     padding-left: 10px; 
  }
}

.nav__links {
  display: flex;
  align-items: center;
}

.router__link {
  text-decoration: none;
}

.nav__links p {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #333;
  margin-top: 0.6rem;
  padding-right: 30px;
}

.nav__links p:hover {
  color: #000;
}

.btn__container {
  width: 206px;
  height: 36.6px;
}

.btn__container button {
  font-size: 12px;
}


@media screen and (max-width: 768px) {
  .nav {
    height: 80px;
  }

  .nav__links {
    display: none;
  }
}
</style>