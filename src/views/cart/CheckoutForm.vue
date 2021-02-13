<template>
<form class="form" @submit.prevent="makePayment">
<div class="form__container">

<div class="form__container-section">
<label 
  for="name" class="form-label">Full name<span>*</span>
</label>
<div class="form-input__container">
  <input
    class="form-input"
    :class="{ 'is-invalid': validationStatus($v.name) }"
    v-model.trim="$v.name.$model"
    type="text"
    name="name"
    placeholder="Firstname Lastname"
  />
</div>
</div>

<div class="form__container-section"> 
<label 
  for="email" class="form-label">Email address<span>*</span>
</label>
<div class="form-input__container">
  <input
    class="form-input"
    :class="{ 'is-invalid': validationStatus($v.email) }"
    v-model.trim="$v.email.$model"
    type="email"
    name="email"
    placeholder="name@example.com"
  />
</div>
</div>
  
<div class="form__container-section"> 
<label 
  for="phone" class="form-label">Phone number<span>*</span>
</label>
<div class="form-input__container">
  <input
    class="form-input"
    :class="{ 'is-invalid': validationStatus($v.phone) }"
    v-model="$v.phone.$model"
    type="text"
    name="phone"
  />
</div>
</div>

<div class="checkout__summary">
  <div class="checkout__summary-details">
   <p>TOTAL PAYMENT</p>
   <h6>N{{ localeString(totalOrder) }}</h6>
  </div>
</div>


 <!-- Payment Button      -->
<div class="btn__container">
<button 
  class="app__button"  
  :disabled="$v.$invalid || $v.$error"
  >
  PAY N{{ localeString(totalOrder) }}
</button>
</div>
</div>
</form>
</template>


<script>
import { mapGetters } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
import axios from 'axios';
export default {
  name: 'TabContainer',

data () {
return {
  name: '',
  email: '',
  phone: ''
}
},


validations: {
  name: { required },
  email: { required, email },
  phone: { required }
},

props: ['totalOrder', 'vat', 'subtotal', 'id'],

methods: {
validationStatus: function(validation) {
  return typeof validation !== "undefined" ? validation.$error: false
},

localeString: function(price) {
  return price.toLocaleString();
},

makePayment: function () {
this.$v.$touch()
if (this.$v.$invalid || this.$v.$error) return

const tickets = {}
this.tickets.map(ticket => {
if (ticket.count >= 1) {
  tickets[ticket.id] = ticket.count
}
})
const data = {
  ...this.data,
  base_amount: this.totalOrder,
  value_added_tax: this.vat,
  event_id: parseInt(this.id),
  tickets_bought: tickets
}
const TEST_KEY = 'FLWPUBK_TEST-9b90c33d1d220b19acf9bd4e05b8a3dc-X'
  window.FlutterwaveCheckout({
  public_key: TEST_KEY,
  tx_ref: 'ticket-order' + new Date(),
  amount: this.totalOrder,
  currency: 'NGN',
  country: 'NG',
  payment_options: 'card',
  customer: {
    email: this.email,
    phone_number: this.phone,
    name: this.name
  },
  callback: function () {
  axios.post('https://eventsflw.herokuapp.com/v1/orders', data)
    .then(response => {
      console.log(response)
      this.clear
      window.location.href = '/'
    })
    .catch(err => console.error(err))
  },
  onclose: function () {},
    customizations: {
      title: 'Ticket Master',
      description: 'Payment for Event'
    }
    })
  }
},

computed: {
  ...mapGetters(['tickets', 'clear'])
},

created() {
  const script = document.createElement("script");
  script.src = "https://checkout.flutterwave.com/v3.js";
  document.getElementsByTagName("head")[0].appendChild(script);
},
}
</script>



<style scoped>
.form {
  margin: auto;
}
.form__container {
  padding: 2rem;
}
.form__container-section {
  padding-bottom: 20px;
}
.form-label {
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #333333;
}
.form-label span {
  color: red;
}
.form-input__container {
  display: flex;
  flex-direction: column;
  max-width: 368px;
  height: 48px; 
  margin-top: 10px;
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
  font-family: 'Open Sans', sans-serif;
}
.is-invalid {
  border: 1px solid red;
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
