<template>
<div>
<Nav />
<main class="event">

<!-- first row -->
<section class="event__content-main">
<div class="event__content-details">
 <p>{{ new Date(event.start_time).toDateString() }}</p>
 <h2>{{ event.name }}</h2>
 <h4>
    Two-Time Grammy Award winner, Nathaniel Cole, who’s also just
    released an album, <b> Into The Wild, </b>will be having his first
    concert in Lagos, Nigeria!<br />
    Fans have waited so long for this announcement, and it promises to
    be everything anyone has imagined.
 </h4>
 <h6 class="event__details-price" v-if="event.tickets.length >= 1">
    {{ getMinMax(event.tickets) }}
 </h6>

 <!-- remember free ticket modal and ui -->
<div class="button_container">
    <button v-if="event.tickets.length === 0" class="app__button"  @click="isFreeModalOpen = true">
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

<div>
<div class="event__content-img">
  <img v-if="event.image" :src="event.image" />
  <img v-else :src="require('../../assets/img/defaultimg.jpg')"/>
</div>
</div>
</section>

<!-- second row -->
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
</main>
</div>
</template>



<script>
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EventDetails',
    components: {
        Nav,
        Footer
    },

    props: ['id'],

    data() {
    return {
        event: {}
    }
    },

    methods: {
    ...mapActions(['fetchEvents']),

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
  }
 },

  computed: {
      ...mapGetters(['events', 'loading'])
    },

  created () {
    const id = this.$route.params.id
    this.event = this.events.find(event => parseInt(event.id) === parseInt(id))
  }   
}
</script>



<style lang="scss" scoped>
.event {
    padding: 3rem 6rem 0 6rem;
    background-image: url("../../assets/img/bglines.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
} 

.event__content-main,
.event__content-other {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
}

.event__content-main {
    border-bottom: 1px solid #CCB7B1;
    padding-bottom: 3rem;
}

.event__content-other {
   padding: 3rem 0.5rem 0 0.5rem;
}

.event__content-details {
    width: 50%;
}

.event__content-details p {
  font-size: 18px;
  text-transform: uppercase;
  color: #12122C;  
}

.event__content-details h2 {
  font-size: 36px;
  color: #12122C;
  padding: 0.8rem 0 0.3rem 0;
}

.event__content-details h4 {
  font-size: 18px;
  line-height: 28px;
  color: #4A4A4A;
  font-style: italic;
  font-weight: normal;
  padding: 0.6rem 0 5rem 0;
  width: 90%;
}

.event__content-details h6 {
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #333333;
}


// .event__content-img {
//   width: 50%;
// }

img {
    width: 460px;
    height: 430px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.306764));
    border-radius: 6px;
    object-fit: cover;
}

.event__content-venue h3,
.event__content-date h3 {
   font-weight: normal;
   font-size: 18px;
   line-height: 24px;
   align-items: center;
   text-transform: uppercase;
   color: #333333;
}

.event__content-venue h4,
.event__content-date h4 {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
  margin: 1rem 0;
}

.event__content-venue h4 {
    width: 50%;
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

.button_container {
  width: 348px;
  height: 50px;
//   margin-right: auto;
}


.event__content-other h6 {
  font-size: 18px;
  font-weight: normal;
  line-height: 20px;
  color: #12122C;
  padding-bottom: 10px;

}


</style>