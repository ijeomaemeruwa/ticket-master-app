<template>
<section class="noticket">
    <h5>Enter your email address and we'll send your tickets right away!</h5>
    <div class="noticket__card-container">
     <div class="noticket__card">

     </div>
    </div>
</section>
</template>


<script>
export default {
    
}
</script>


<style scoped>
.noticket {
    height: 70vh;
    padding: 40px 0;
}

h5 {
   font-weight: bold;
   font-size: 18px;
   text-align: center;
   margin: auto;
   color: #333333;
   width: 35%;
}

.noticket__card-container {
    width: 470px;
    height: 253px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 1rem auto;
}

/* .noticket__card {
     
} */

@media screen and (max-width: 768px) {
    h5 {
        width: 80%;
    }
}
</style>