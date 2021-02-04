<template>
<nav class="nav">
<h3>Logo</h3>

<div class="nav__content">
<p>I didn't get my tickets</p>

<div class="button__container">
<button>Create your own event</button>
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
    width: 85%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 80px;
}

.nav__content {
    display: flex;
}

p {
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #333;
  margin-right: 1.2rem;
  margin-top: 0.6rem;
}

.button__container {
    width: 206px;
    height: 36.6px;
   
}

button {
    width: 100%;
    height: 100%;
    background: #F5A623;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 5px 15px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.5px;
    overflow: none;
}
</style>