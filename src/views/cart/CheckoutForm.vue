<template>
<section class="form">
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

<div class="checkout__summary">
  <div class="checkout__summary-details">
   <p>TOTAL PAYMENT</p>
   <h6>N 1100</h6>
  </div>
  <!-- <h6 class="total-amount">N{{ localeString(totalOrder) }}</h6> -->
</div>

 <!-- Payment Button      -->
<div class="btn__container">
  <button class="app__button">
    <!-- PAY N{{ localeString(totalOrder) }} -->
    PAY N 1100
  </button>
</div>
</div>
</section>
</template>



<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TabContainer',


// data () {
//   return {
//     data: {
//       name: '',
//       email: '',
//       phone: ''
//     }
//   }
// },

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


<style scoped>
.form {
  margin: auto;
}
.form__container {
  padding: 1.5rem 2rem;
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

.checkout__summary {
   padding: 1rem 0;
}
.checkout__summary-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0 0.6rem 0;
}
.checkout__summary-details p {
  font-size: 14px;
  font-weight: 600;
}
.checkout__summary-details h6 {
  font-size: 20px;
  font-weight: 600;
}

.btn__container {
  max-width: 368px;
  height: 48px;
}
</style>
