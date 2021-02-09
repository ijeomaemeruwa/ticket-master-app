<template>
<div >
<Nav />
<section class="gettickets">
<h5>Enter your email address and we'll send your tickets right away!</h5>
<div class="getticket__container">
    <div class="getticket__card">
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
<div class="btn__container">
  <button class="app__button" @click="showModal">
    CONFIRM AND SEND TICKET
  </button>
</div>
</div>
</div>

<Modal v-show="isModalVisible">
<div class="success__modal">
    <div class="success__modal-check">
    <div class="success__modal-check-icon">
    <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="checkmark__circle" d="M125.583 63.2476V68.4993C125.576 80.8089 121.59 92.7864 114.22 102.646C106.849 112.505 96.4894 119.717 84.685 123.207C72.8806 126.698 60.2642 126.278 48.7174 122.013C37.1707 117.747 27.3122 109.862 20.6124 99.5359C13.9126 89.2093 10.7303 76.9937 11.5402 64.7108C12.3502 52.4279 17.1089 40.7358 25.1067 31.3784C33.1045 22.021 43.9128 15.4996 55.9197 12.7868C67.9267 10.074 80.4889 11.3151 91.7328 16.3251"
    stroke="#F5A623"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
    <path class="checkmark__check" d="M125.583 22.8335L68.5 79.9739L51.375 62.8489" stroke="#F5A623" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  </div>
    <h5 class="success__modal-text">
    Your tickets have been confirmed and sent to your email at <span>ted@flutterwave.com</span>
    </h5>
<div class="btn__container">
<router-link to="/">
  <button class="app__button" @click="showModal">
    BUY MORE TICKETS
  </button>
</router-link>
</div>
</div>
</Modal>

<Footer />
</section>

</div>
</template>


<script>
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
export default {
    name: 'GetTicket',
    components: {
        Nav,
        Footer,
        Modal
    },

    isModalVisible: false,

    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },
}
</script>


<style scoped>

.getticket {
     height: 100vh;
    padding-top: 4rem;
    background-image: url("../../assets/img/bglines.png");
    background-repeat: no-repeat;
    background-size: cover;
}


h5 {
   font-weight: bold;
   font-size: 18px;
   text-align: center;
   margin: 0 auto;
   color: #333333;
   width: 35%;
}

.getticket__container {
    width: 470px;
    height: 253px;
    margin: 0 auto;
}

.getticket__card {
    width: 100%;
    height: 100%;
    margin: 1rem 0 5rem 0;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 3rem;
    
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


@media screen and (max-width: 768px) {
    h5 {
        width: 80%;
    }
}
</style>