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
  <button class="app__button">Create your own event</button>
</div>
</div>


<!-- Mobile Icon -->
<!-- <div class="mobile_nav-icon" v-if="mobileView" @click="showNav = !showNav">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style=" fill:#000000;">
  <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" 
  stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
  <path d="M0,172v-172h172v172z" fill="none"></path>
  <g fill="#333333"><path d="M0,26.46154v13.23077h172v-13.23077zM0,79.38462v13.23077h172v-13.23077zM0,132.30769v13.23077h172v-13.23077z">
</path>
</g></g>
</svg>
</div> -->
</nav>
</template>


<script>
export default {
name: 'Nav',

// data() {
//   return {
//     mobileView: true,
//     showNav: false
//   }
// },

// method: {
//   handleMobileView() {
//     this.mobileView = window.innerWidth <= 768;
//   }
// },

// created() {
//   this.handleMobileView();
// }
}
</script>


<style scoped>
.nav {
  display: flex;
  /* flex-flow: row wrap; */
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 10px 60px;
}
.logo {
  padding-left: 25px;
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
  color: #F5A623;
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
  width: 100%;
  padding: 10px 10px;
}

.logo {
  padding-left: 10px; 
}

.nav__links p {
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0;
  margin-top: 0.6rem;
  padding: 0;
}

.nav__links {
  display: none;
}
}

</style>