<template>
<footer class="footer">
<p>Copyright 2019</p>

<div class="footer__links">
  <p>Terms and Conditions</p>
  <p>Privacy Policy</p>
</div>
</footer>
</template>


<script>
export default {
    
}
</script>


<style scoped>
 .footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 6rem auto 1rem auto;
    height: 80px;
 }

 .footer__links {
    display: flex;
    flex-flow: row wrap;
 }

 p {
   font-size: 14px;
   line-height: 16px;
   letter-spacing: 0.0028px;
   color: #4A4A4A;
 }
</style>