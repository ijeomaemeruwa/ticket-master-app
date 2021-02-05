<template>
<footer class="footer">
<p>Copyright 2019</p>

<div class="footer__links">
  <p>Terms and Conditions</p>
  <p>Privacy Policy</p>
</div>
</footer>
</template>



<style lang="scss" scoped>
 .footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 6rem auto 1rem auto;
    

  p {
    padding-left: 60px;
  }
 }

 .footer__links {
    display: flex;
    flex-flow: row wrap;

  p {
   padding-right: 40px;
  }
 }

 p {
  font-size: 14px;
  color: #4A4A4A;
 }

 
</style>