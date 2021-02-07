<template>
  <article class="form">
    <div class="form__content">
      <label class="form__content-label" for="name">Full name</label>
      <input
        class="form__content-input"
        type="text"
        v-model="data.name"
        :class="{ 'form__content-input-error': $v.data.name.$error }"
      />
      <div v-if="$v.data.name.$error" class="form__content-warning">
        Name is required.
      </div>
    </div>

    <div class="form__content">
      <label class="form__content-label" for="email">Email Address</label>
      <input
        class="form__content-input"
        type="email"
        v-model="data.email"
        :class="{ 'form__content-input-error': $v.data.email.$error }"
      />
      <div v-if="$v.data.email.$error" class="form__content-warning">
        Email is required.
      </div>
    </div>
    <div class="form__content">
      <label class="form__content-label" for="number">Phone Number</label>
      <input
        class="form__content-input"
        type="text"
        v-model="data.phone"
        :class="{ 'form__content-input-error': $v.data.phone.$error }"
      />
      <div v-if="$v.data.phone.$error" class="form__content-warning">
        Phone Number is required.
      </div>
    </div>

    <div>
    <div class="checkout__summary-details-item">
     <p>Total payment</p>
     <p>N{{ localeString(total) }}</p>
    </div>
    <div class="payment__btn">
     <button 
     @click="MakePayment"
     :disabled="$v.$error || $v.$invalid"
     >
        PAY N{{ localeString(total) }}
     </button>
    </div>
    </div>

  </article>
</template>



<script>
export default {
  name: 'UserInformation',
  data () {
    return {
    data: {
      name: '',
      email: '',
      phone: ''
    }
    }
  },
  props: ['total', 'vat', 'subtotal', 'id']
 
}
</script>



<style lang="scss">

</style>
