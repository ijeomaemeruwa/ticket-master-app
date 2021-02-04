<template>
<section class="events">
<div class="events__container">
  <h1>The best events happening now.</h1>

  <section v-if="errored">
   <p>Error while loading events, try again!</p>
  </section>

  <section v-else class="card__container">
  <div v-if="loading">Loading...</div>

  <div v-else v-for="event in getEvents" :key="event.id">
  <div class="card">
  <router-link :to="`/eventPage/${event.id}`" class="router--link">
    <div class="card__img__container">
      <img :src="event.image" />
    </div>
    <div class="card__content">
      <p>{{ new Date(event.start_time).toDateString() }}
      <h4>{{ event.name }}</h4>
      <h5>Tickets: {{ event.num_of_tickets }}</h5>
    </div>
  </router-link>
  </div>
 
  </div>
  </section>

</div>
</section>
</template>


<script>
import axios from 'axios';

export default {
name: 'EventsListing',
data() {
  return {
  getEvents: [],
  loading: true,
  errored: false
} 
},
mounted() {
  this.fetchEvents()
},
methods: {
  async fetchEvents() {
    try {
     const response = await axios.get('https://eventsflw.herokuapp.com/v1/events');
     const data = response.data.data.events
     this.getEvents = data
     this.loading = false
    }
    catch(error) {
      console.log(error)
      this.errored = true
    }
  }
}
}
</script>



<style scoped>
.events {
  width: 100%;
  margin: 4rem 3rem;
}

/* .events__container {
  margin-top: 4rem;
} */

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

.router--link {
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

.card__img__container {
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