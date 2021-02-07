import Vue from 'vue';
import Router from 'vue-router';

import EventsListing from './views/events/EventsListing';
import EventDetails from './views/events/EventDetails';
import CartView from './views/cart/CartView';
// import Payment from './views/cart/Payment';
// import UserInformation from './views/cart/UserInformation.vue';
import NoTicket from './views/ticket/NoTicket.vue';
Vue.use(Router)


export const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'EventsListing',
            component: EventsListing
        },
        {
            path: '/event/:id',
            name: 'EventDetails',
            component: EventDetails,
            props: true
        },
        {
            path: '/event/:id/checkout',
            name: 'CartView',
            component: CartView,
            props: true
        },
        {
            path: '/noTicket',
            name: 'NoTicket',
            component: NoTicket
        },
        { path: '*', redirect: '/' }
        // {
        //     path: '/payment',
        //     component: Payment
        // },
        // {
        //     path: '/userinfo',
        //     component: UserInformation 
        // },
        ]
})