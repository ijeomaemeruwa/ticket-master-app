<template>
<div>
<Nav />
<main class="events">
  <h1>The best events happening now.</h1>

  <section v-if="loading" class="loading">
    <img src="../../assets/img/loading.svg" alt="loading" />
  </section>

  <section v-else class="card__container">
  <div v-for="event in events" :key="event.id">
  <router-link 
    role="link" class="event__link"  
    :to="{ name: 'EventDetails', params: { id: event.id }}"
  >
  <div class="card">
    <div class="card__img-container">
    <img v-if="event.image" 
      :src="event.image" 
      :alt="`${event.name} event`"
    />
    <img v-else 
      class="lazy"
      :src="require('../../assets/img/defaultimg.jpg')" 
      :alt="`${event.name} event`"
    />
    </div>
  <div class="card__content">
    <p>{{ new Date(event.start_time).toDateString() }}</p>
    <h4>{{ event.name }}</h4>
      <h5 class="free" v-if="event.is_free || Object.keys(event.tickets).length === 0">
        Free
      </h5>
      <h5 class="sold-out" v-else-if="event.is_sold_out">Sold out</h5>
      <h5 v-else>{{ getMinMax(event.tickets) }}</h5>
  </div>
  </div>
  </router-link>

  </div>
  </section>
</main>
<Footer />
</div>
</template>



<script>
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { mapActions, mapGetters } from 'vuex'

export default {
name: 'EventsListing',
components: {
  Nav,
  Footer
},

methods: {
  ...mapActions(["fetchEvents"]),

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

computed:{
 ...mapGetters(["events", "loading"])
},

created() {
  this.fetchEvents()
},

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
@media screen and (max-width: 768px){
  h1 {
     font-size: 24px;
     margin: auto;
  }
}

.loading {
  height: 60vh;
  margin: 0 auto;
  padding: 2rem 0;
  align-items: center;
  text-align: center;
}
.loading img {
  width: 40px;
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
  font-family: "SF Display";
  font-size: 12px;
  text-transform: uppercase;
  color: #4F4F4F;
}

h4 {
  font-weight: 700;
  font-size: 18px;
  color: #333333;
  padding: 5px 0 8px 0;
}

h5 {
  font-size: 14px;
  font-weight: 400;
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


.free, .sold-out {
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.5px;

}
.free {
  color: #219653;
}
.sold-out {
  color: #EB5757;
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