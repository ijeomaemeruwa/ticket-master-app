<template>
<main class="cart">
<div class="cart__container">

<!-- Cart -->
<section class="cart__section">
<header class="cart__close-btn">
<button @click.prevent="$router.go(-1)">x Close</button>
</header>

<section class="cart__content">
<h2>Event Name</h2>
<h4>Event Date</h4>
<div class="cart__content-tickets">
    <!-- <div class="cart__content-ticket-item" v-for="(ticket, index) in cartItem" :key="index"> -->
<div class="cart__content-ticket-item">
    <p>Ticket Name</p>
    <p>Ticket Price</p>
    <div class="cart__content-item-count">
    <!-- Add drement and increment components -->
    + <span>0</span> -
    </div>
</div>
</div>
</section>
</section>


<!-- Form and Payment -->
<Tab />


</div>
</main>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';
// import UserInformation from './UserInformation';
import Tab from './Tab';
export default {
 name: 'CartView',

 components: {
    // UserInformation
    Tab
 },

 props: ['id'],
  data () {
    return {
      currentTab: '',
      event: {}
    }
  },

computed: {
...mapGetters(['cartItem', 'events']),
subtotal: function () {
    let total = 0
    this.cartItem.forEach(ticket => {
    total = total + ticket.count * ticket.price
    })
    return total
},
vat: function () {
    const vat = this.subtotal * (5 / 100)
    return vat
},
total: function () {
    const total = this.vat + this.subtotal
    return total
},
order: function () {
    const value = this.cartItem.some(ticket => ticket.count >= 1)
    return !value
}
},

methods: {
  ...mapActions([]),
}
}
</script>



<style scoped lang="scss">
.cart {
    height: 100%;
    // padding: 2rem 3rem;
   

.cart__container {
    display: flex;
    flex-flow: row wrap;
}

.cart__section {
    width: 70%;
}

.cart__close-btn {
   width: 100px;
   height: 49px;
   margin: 1rem 0 1rem 3rem;

button {
    width: 100%;
    outline: inherit;
    box-shadow: -1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 60px;
    background-color: #fff;
    color: #333333;
    border: 0;
    padding: 0.8rem 1.5rem;
    display: flex;
    align-items: center;

  &:hover {
        opacity: 0.7;
    }
}
}

.cart__content {
    margin: 3rem;

h2 {
    font-weight: 900;
    margin-bottom: 0.2rem;
    // margin-top: 4rem;
    font-size: 36px;
}

h4 {
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-size: 18px;
    color: #4F4F4F;
    font-family: 'Open Sans', sans-serif;
}


&-tickets {
    margin-top: 5rem;
}

&-ticket-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #bdbdbd;
}

p, span {
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #333;
}
}


// .payment {

// &__section {
//     // width: 470px;
//     width: 30%;
//     height: 1024px;
//     right: 970px;
//     top: 0px;
//     background: #fff;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// }
// }

}
</style>