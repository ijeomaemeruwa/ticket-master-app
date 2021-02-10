<template>
<div>
<Nav />
<main class="event">

<!-- first row -->
<section class="event__content-main">
<div class="event__content-img">
  <img v-if="event.image" :src="event.image" />
  <img v-else :src="require('../../assets/img/defaultimg.jpg')" class="lazy"/>
</div>
<div class="event__content-details">
 <p>{{ new Date(event.start_time).toDateString() }}</p>
 <h2>{{ event.name }}</h2>
 <h4>
    Two-Time Grammy Award winner, Nathaniel Cole, who’s also just
    released an album, <strong> Into The Wild, </strong>will be having his first
    concert in Lagos, Nigeria!<br />
    Fans have waited so long for this announcement, and it promises to
    be everything anyone has imagined.
 </h4>
 <h6 v-if="event.tickets.length >= 1">
    {{ getMinMax(event.tickets) }}
 </h6>

<div class="btn__container">
    <button v-if="event.tickets.length === 0" class="app__button" @click="showModal">
     Register for free
    </button>
    <router-link v-else :to="{
      name: 'CartView',
      params: { id: event.id, event: event }
    }">
   <button class="app__button">Buy Tickets</button> 
   </router-link>
</div>
</div>
</section>

<!-- Second row -->
<section class="event__content-other">
<div class="event__content-venue">
  <h3>Venue</h3> 
  <h4>Eko Atlantic Beach, Off Ahmadu Bello Way, Victoria Island, {{event.venue}}</h4>
   <div class="event__map">
     <svg 
     width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g clip-path="url(#clip0)" stroke="#F5A623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <path d="M.75 4.5v12l5.25-3 6 3 5.25-3v-12L12 4.5l-6-3-5.25 3zM6 1.5v12M12 4.5v12"/></g>
     <defs><clipPath id="clip0"><path fill="#fff" d="M0 0h18v18H0z" /></clipPath></defs>
     </svg>
    <p>View map for directions</p>
   </div>
</div>
<div class="event__content-date">
  <h3>Date and Time</h3> 
   <h4>{{ new Date(event.start_time).toDateString() }}</h4>
   <div class="event__content-socials">
    <h6>SOCIAL LINKS</h6>
    <h6>https://nathanielcole.com</h6>
    <h6>https://twitter.com/nathanielcole</h6>
    <h6>https://instagram.com/nathanielcole/</h6>
   </div>
</div>
</section>
<Footer />

<!-- Form Modal -->
<Modal v-show="isModalVisible">
<section class="modal__container">
<div>
<header class="modal__header">
    <p>REGISTER FOR EVENT</p>
    <p>
      <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" @click="closeModal">
      <path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </p>
</header>
<div class="form">
<div class="form__container">
  <label for="name" class="form-label">Full name</label>
  <div class="form-input__container">
    <input
      class="form-input"
      v-model="name"
      type="text"
      name="name"
      aria-required="true"
    />
  </div>
  <label for="email" class="form-label">Email address</label>
  <div class="form-input__container">
    <input
      class="form-input"
      v-model="email"
      type="email"
      name="email"
      aria-required="true"
    />
  </div>
  <label for="phone" class="form-label">Phone number</label>
  <div class="form-input__container">
    <input
      class="form-input"
      id="name"
      v-model="phone"
      type="text"
      name="phone"
      aria-required="true"
    />
  </div>
</div>
<div class="btn__container">
  <button class="app__button">REGISTER</button>
</div>
</div>
</div>
</section>
</Modal>

</main>
</div>
</template>



<script>
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EventDetails',
  components: {
      Nav,
      Footer,
      Modal
  },

  props: ['id'],

  data() {
  return {
    event: {},
    isModalVisible: false,
  }
  },

  methods: {
  ...mapActions(['fetchEvents']),

  showModal() {
    this.isModalVisible = true;
  },

  closeModal() {
    this.isModalVisible = false;
  },

// get minimum and maximum of a price
  getMinMax: function (tickets) {
    const price = []
  tickets.map(ticket => {
    price.push(ticket.price)
  })
  const min = Math.min(...price)
  const max = Math.max(...price)
  let minMax
  max === min ? minMax = `N${max.toLocaleString()}` : minMax = `N${min.toLocaleString()} - N${max.toLocaleString()}`
  return minMax
  },
 },

computed: {
  ...mapGetters(['events'])
},

created() {
  const id = this.$route.params.id
  this.event = this.events.find(event => parseInt(event.id) === parseInt(id))
},
}
</script>



<style scoped>
.event {
  padding: 3rem 1.2rem;
  background-image: url("../../assets/img/bglines.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.event__content-main,
.event__content-other {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.event__content-main {
    border-bottom: 1px solid #CCB7B1;
    padding-bottom: 3rem;
}
.event__content-other {
   padding-top: 3rem;
}


.event__content-img {
  width: 40%;
}
img {
  width: 460px;
  height: 430px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.306764));
  border-radius: 6px;
  object-fit: cover;
}


.event__content-details {
  width: 100%;
}
.event__content-details p {
  font-size: 15px;
  font-family: "SF Display";
  text-transform: uppercase;
  color: #12122C; 
  padding-top: 1rem; 
}
.event__content-details h2 {
  font-size: 30px;
  color: #12122C;
  font-weight: 700;
  padding: 0.8rem 0 0.3rem 0;
}
.event__content-details h4 {
  font-size: 16px;
  color: #4A4A4A;
  line-height: 28px;
  font-style: italic;
  font-weight: 400;
  padding: 0.6rem 0 5rem 0;
  width: 90%;
}
.event__content-details h6 {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #333;
  padding-bottom: 1rem;
}
@media screen and (min-width: 768px) and (min-width: 1200px) {
  .event__content-details {
    width: 50%;
}

.event__content-details p {
  font-size: 20px;
  padding: 0;  
}

.event__content-details h2 {
  font-size: 36px;
}

.event__content-details h4 {
  font-size: 18px;
  width: 90%;
}

.event__content-details h6 {
  font-size: 24px;
}
}


.event__content-venue,
.event__content-date {
  width: 100%;
}
.event__content-venue h3,
.event__content-date h3 {
   font-family: "SF Display";
   font-weight: 500;
   font-size: 16px;
   align-items: center;
   text-transform: uppercase;
   color: #333333;
}

.event__content-venue h4,
.event__content-date h4 {
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #333333;
  margin: 1rem 0;
}
.event__map {
    display: flex;
    align-items: center;
}
.event__map p {
    padding-left: 10px;
    font-size: 16px;
    color: #F5A623;
}
.event__content-other h6 {
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  color: #12122C;
  padding-bottom: 10px;
}


.modal__container {
  padding: 2rem 3rem 3rem 2rem;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;
  border-bottom: 1px solid #BDBDBD;
}
.modal__header p {
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.065em;
  color: #333333;
}

.form {
  margin: auto;
}
.form__container {
  padding: 1rem 0.2rem;
}
.form-label {
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #333333;
}
.form-input__container {
  display: flex;
  flex-direction: column;
  max-width: 368px;
  height: 48px; 
  margin: 10px 0;
}
.form-input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  background: #FDFDFD;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  color: #333;
  outline-color: #E0E0E0;
}
.btn__container {
  max-width: 368px;
  height: 48px;
}



@media screen and (min-width: 768px) and (min-width: 1200px) {
.event__content-venue h3,
.event__content-date h3 {
  font-weight: normal;
  font-size: 18px;;
}
.event__content-venue h4,
.event__content-date h4 {
  font-weight: 600;
  font-size: 24px;
}
.event__content-other h6{
  font-size: 18px;
} 
}

@media screen and (min-width: 1040px) {
 .event{
   padding: 3rem 9rem;
 } 
 .event__content-main{
   display: flex;
   flex-direction: row-reverse;
  }
  .event__content-other {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .event__content-date{
   width: 45%;
   padding-left: 3rem;
  }
  .event__content-venue {
    width: 45%;
    margin-bottom: 4rem;
    padding-right: 4rem;
  }
}

@media screen and (max-width: 768px) {
.event__content-img {
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
}
.event__content-date{
  padding: 1.5rem 0;
}
}
</style>