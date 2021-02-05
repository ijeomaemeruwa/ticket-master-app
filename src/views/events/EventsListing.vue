<template>
<section class="events">
  <h1>The best events happening now.</h1>

  <section class="card__container">
    <!-- <div v-if="loading"> -->
        <!-- <Loader /> -->
      <!-- <p>Loading...</p>
    </div> -->

  <div v-for="event in events" :key="event.id">
  <router-link role="link" class="event__link" :to="{
      name: 'EventDetails',
      params: { id: event.id }
    }">
  <div class="card">
    <div class="card__img-container">
      <img v-if="event.image" :src="event.image" />
      <img v-else :src="require('../../assets/img/defaultimg.jpg')"/>
    </div>
  <div class="card__content">
    <p>{{ new Date(event.start_time).toDateString() }}
    <h4>{{ event.name }}</h4>
    <h5>
      <span class="free" v-if="event.is_free || Object.keys(event.num_of_tickets).length === 0">
        Free
      </span>
      <span class="sold" v-else-if="event.is_sold_out">Sold out</span>
      <span>Price: {{ event.price }}</span>
    </h5>
  </div>
  </div>
  </router-link>

  </div>
  </section>
</section>
</template>




<script>
// import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'

export default {
name: 'EventsListing',

data() {
  return {
  // getEvents: [],
  // // getTicketType: [],
  loading: true,
  errored: false
} 
},

methods: {
  ...mapActions(["fetchEvents"])
},

computed: mapGetters(["events", "event", "loading"]),

created() {
  this.fetchEvents()
}

// mounted() {
//   this.fetchEvents()
// },

// methods: {
//   async fetchEvents() {
//     try {
//      const response = await axios.get('https://eventsflw.herokuapp.com/v1/events')
//         // axios.get('https://eventsflw.herokuapp.com/v1/ticket-types/events/{{event_id}}')

//      const eventsData = response.data.data.events;
//     //  const ticketsData = response.data;
//      this.getEvents = eventsData;
//     //  this.getTicketType = ticketsData;
//      this.loading = false
//     }
//     catch(error) {
//       console.log(error)
//       this.errored = true
//     }
//   }
// }
}
</script>



<style scoped>
.events {
  width: 100%;
  margin: 4rem 3rem;
}


h1 {
 font-weight: 900;
 font-size: 36px;
 color: #333;
 margin-bottom: 1.5rem;
 margin-left: 2rem;
}

.card__container {
  display: flex;
  flex-flow: row wrap;
}

.card {
  margin: 1.5rem 0.6rem 1rem 0.6rem;
}

.event__link {
  text-decoration: none;
}

p {
  font-size: 12px;
  text-transform: uppercase;
  color: #4F4F4F;
}

h4 {
  font-weight: bold;
  font-size: 18px;
  color: #333333;
}

h5 {
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #4F4F4F;
}

.card__img-container {
  width: 100%;
}

img {
  width: 400px;
  height: 231px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.306764));
  border-radius: 6px;
}

.card__content {
  width: 90%;
  margin-top: 0.5rem;
}

@media screen and (max-width: 480px) {

  .events {
    margin: 2rem auto;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>