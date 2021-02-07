<template>
<section class="form">

<form>
<div class="form__input">
  <label for="name">Full name</label>
  <input type="text" v-model="data.name" />
</div>
<div class="form__input">
  <label  for="email"> Email address</label>
  <input type="email" v-model.trim="data.email" />
</div>
<div class="form__input">
  <label for="number">Phone number</label>
  <input type="text" v-model.trim="data.phone" />
</div>


<div>
  <div class="checkout__summary-details-item">
  <p class="total-label tof">Total payment</p>
  <p class="total-amount">N{{ localeString(totalOrder) }}</p>
  </div>

 <!-- Payment Button      -->
  <div class="button-wrapper">
  <button class="app__button">
    PAY N{{ localeString(total) }}
  </button>
  </div>
</div>

</form>
</section>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
data () {
  return {
    data: {
      name: '',
      email: '',
      phone: ''
    }
  }
},

props: ['totalOrder', 'vat', 'subtotal', 'id'],

computed: {
    ...mapGetters(['tickets'])
  },
methods: {
   localeString: (price) => {
      return price.toLocaleString()
    }
}

}
</script>


<style lang="scss">

</style>
