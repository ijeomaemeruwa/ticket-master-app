<template>
<main class="cart">
<div class="cart__container">

<!-- 1. Cart Section-->
<section class="cart__section">
<header class="cart__close-btn">
  <button 
    @click.prevent="$router.go(-2)" 
    class="close-btn">
    x Close
  </button>
</header>
<section class="cart__content">
<h2>{{event.name}}</h2>
<h4>{{ new Date(event.start_time).toDateString() }}</h4>
<div class="cart__content-tickets">
    <div class="cart__content-ticket-type" v-for="(ticket, index) in tickets" :key="index">
    <p>{{ ticket.name }}</p>
    <p>N{{ localeString(ticket.price) }}</p>

    <div class="cart__content-ticket-count">
     <Decrement :id="ticket.id" @decrement="decrement" />
     <span> {{ ticket.count }} </span>
     <Increment :id="ticket.id" @increment="increment"  />
    </div>
    </div>
<div class="ticket_sale">
<p>Ticket sales end on 22nd November 2019</p>
</div>
</div>
</section>
</section>


<!-- 2. Order and Payment Section-->
<TabContainer>
<header class="summary__header">
<h4 v-if="currentTab !== 'CheckoutForm'">ORDER SUMMARY</h4>
<h4 v-else @click="currentTab = ''" class="back">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Go Back</span>
</h4>
</header>

<section v-if="currentTab === 'CheckoutForm'">
<keep-alive>
  <component 
  :totalOrder="totalOrder" :vat="vat" :subtotal="subtotal" :id="event.id" :is="currentTab">
  </component>
</keep-alive>
</section>

<section v-if="currentTab !== 'CheckoutForm'" class="summary__section">
<div class="summary__details-container">
<div class="summary__details-item">
<div class="summary__details" v-for="(ticket,index) in tickets" :key="index">
    <p class="name">{{ ticket.count }} - {{ ticket.name }}</p>
    <p class="total">N{{ localeString(ticket.price) }}</p>
</div>
</div>

<div class="summary__details-checkout">
<div class="summary__details">
    <p class="name">Sub-total</p>
    <p>N{{ localeString(subtotal) }}</p> 
</div>
    <div class="summary__details">
    <p class="name">VAT</p>
    <p class="total">N1000</p>
</div>
    <div class="summary__details">
    <p class="name">TOTAL PAYMENT</p>
    <h6>N{{ localeString(totalOrder) }}</h6>
</div>
</div>
</div> 
 <div class="btn__container">
   <button class="app__button" @click="currentTab = 'CheckoutForm'">
    CONTINUE
   </button>
 </div> 
</section>

<!-- Money back guaratee -->
<div class="warranty__section">
<svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.62 25.01l-1.846.828a1.857 1.857 0 01-2.265-.607l-1.185-1.64a.929.929 0 00-.658-.38l-2.013-.206a1.857 1.857 0 01-1.657-1.658l-.208-2.013a.929.929 0 00-.38-.658L.77 17.491a1.857 1.857 0 01-.607-2.265L.99 13.38a.929.929 0 000-.76l-.828-1.846A1.857 1.857 0 01.77 8.509l1.64-1.185a.929.929 0 00.38-.658l.207-2.013a1.857 1.857 0 011.657-1.657l2.013-.208a.929.929 0 00.658-.38L8.509.77a1.857 1.857 0 012.265-.607L12.62.99a.929.929 0 00.76 0l1.846-.828a1.857 1.857 0 012.265.607l1.185 1.64a.929.929 0 00.658.38l2.013.207c.875.09 1.567.782 1.657 1.657l.207 2.013a.929.929 0 00.38.658l1.64 1.185c.713.516.966 1.461.607 2.265l-.828 1.846a.928.928 0 000 .76l.828 1.846c.36.804.106 1.749-.607 2.265l-1.64 1.185a.929.929 0 00-.38.658l-.206 2.013a1.857 1.857 0 01-1.658 1.657l-2.013.207a.929.929 0 00-.658.38l-1.185 1.64a1.857 1.857 0 01-2.265.607l-1.846-.828a.928.928 0 00-.76 0zM7.983 11.243L6.407 12.82l5.29 5.29 8.122-8.12-1.576-1.577-6.546 6.546-3.714-3.715z" fill="#2D9CDB"/>
</svg>
<div class="warranty__details">
  <h6>100% customer protection</h6>
  <p>Money back guarantee</p>
</div>
</div>
</TabContainer>
</div>
</main>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';
import Increment from '../../components/Increment';
import Decrement from '../../components/Decrement';
import TabContainer from './TabContainer';
import CheckoutForm from './CheckoutForm';

export default {
 name: 'CartView',

 components: {
    Increment,
    Decrement,
    TabContainer,
    CheckoutForm
 },

props: ['id'],

data () {
    return {
      event: {},
      currentTab: ''
    }
},

computed: {
...mapGetters(['tickets', 'events']),

subtotal: function() {
    let total = 0;
    this.tickets.forEach(ticket => {
    total = total + ticket.count * ticket.price
    });
    return total;
},
vat: function() {
    const vat = this.subtotal * (5 / 100);
    return vat;
},
totalOrder: function() {
    const total = this.vat + this.subtotal;
    return total;
},
order: function() {
    const value = this.tickets.some(ticket => ticket.count >= 1);
    return !value;
}
},

methods: {
    ...mapActions(['incrementCount', 'decrementCount', 'setTickets']),

    increment: function(event) {
      this.incrementCount(event);
    },
    decrement: function(event) {
      this.decrementCount(event);
    },
    localeString: function(price) {
      return price.toLocaleString();
    }
},

created () {
    const id = this.$route.params.id
    const eventTicket = this.events.find(event => parseInt(event.id) === parseInt(id))
    this.setTickets(eventTicket.tickets)
    this.event = { ...eventTicket }
  },
}
</script>



<style scoped>
.cart {
    height: 100%;
}
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
   margin: 2rem 0 1rem 7rem;
}
.cart__close-btn .close-btn {
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
    font-weight: 700;
}
.cart__close-btn .close-btn:hover {
    opacity: 0.5;
}

.cart__content {
    padding: 3rem 7rem;
}
.cart__content h2 {
    font-weight: 900;
    margin-bottom: 0.2rem;
    font-size: 30px;
}
.cart__content h4 {
    margin-top: 0.5rem;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 14px;
    color: #4F4F4F;
    font-family: 'Open Sans', sans-serif;
}


.cart__content-tickets {
    margin-top: 5rem;
}
.cart__content-ticket-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid #bdbdbd;
}
.cart__content-ticket-type p,
.cart__content-ticket-type span {
    font-size: 18px;
    letter-spacing: 0.5px;
    color: #333;
}
.cart__content-ticket-type p {
   width: 100px; 
}
.cart__content-ticket-type span {
    padding: 0 10px;
}

.cart__content-ticket-count {
    display: flex;
    align-items: center;
}
.ticket_sale p {
    font-size: 12px;
    letter-spacing: 0.5px;
    color: #828282;
}


@media screen and (max-width: 768px) {
.cart__section {
    width: 100%;
}
.cart__close-btn {
   width: 100px;
   height: 49px;
   margin: 2rem 0 1rem 1rem;
}
.cart__content {
   padding: 2rem;
}
}


@media screen and (min-width: 900px) {
.cart__content h2 {
  font-size: 36px;
}
.cart__content h4 {
  font-size: 18px;
}
.cart__content-ticket-type p,
.cart__content-ticket-type span {
    font-size: 24px;
}
}



.summary__header {
    padding: 2rem 2rem 0 2rem;  
}
.back {
    cursor: pointer;
    display: flex;
    align-items: center;
}
.summary__header h4 {
  padding-bottom: 1.2rem;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.065em;
  color: #333333;
  border-bottom: 1px solid #bdbdbd;
}
.summary__section {
    padding: 2rem;
}
.summary__details-item {
   padding-bottom: 12rem;
   border-bottom: 1px solid #bdbdbd;
}
.summary__details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.summary__details p,
.summary__details h6 {
    padding-bottom: 0.6rem;
}
.summary__details p {
   font-size: 14px;
}
.summary__details h6 {
    font-size: 20px;
    font-weight: 600;
}
.summary__details .name {
    font-weight: 600;
}
.summary__details .total {
    font-weight: normal;
}
.summary__details-checkout {
   padding-top: 2rem;
}
.btn__container {
    max-width: 368px;
    height: 48px;
    margin-top: 1rem;
}


.warranty__section {
    display: flex;
    align-items: center;
    margin-left: 2.2rem;
}
.warranty__details {
    padding-left: 10px;
}
.warranty__details h6 {
   font-weight: bold;
   font-size: 14px;
   letter-spacing: 0.5px;
   color: #333;
}
.warranty__details p {
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #828282;
}
</style>