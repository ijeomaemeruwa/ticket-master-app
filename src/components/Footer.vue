<template>
<footer class="footer">
<p>Copyright 2019</p>

<div class="footer__links">
  <p>Terms and Conditions</p>
  <p>Privacy Policy</p>
</div>
</footer>
</template>



<style scoped>
 .footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 6rem auto 1rem auto;
 }

 /* .footer p {
    padding-left: 30px;
  } */

 .footer__links {
    display: flex;
    flex-flow: row wrap;
 }

.footer__links  p {
   padding-right: 50px;
  }

 p {
  font-size: 14px;
  color: #4A4A4A;
 }

@media screen and (max-width: 768px) {
.footer {
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   text-align: center;
   width: 100%;
}

.footer p {
   padding: 0;
}
.footer__links p {
   padding: 15px;
}
}
 
</style>