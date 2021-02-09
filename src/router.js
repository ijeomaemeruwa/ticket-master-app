import Vue from 'vue';
import Router from 'vue-router';

import EventsListing from './views/events/EventsListing';
import EventDetails from './views/events/EventDetails';
import CartView from './views/cart/CartView';
import GetTicket from './views/getTicket/GetTicket.vue';
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
            path: '/getTicket',
            name: 'GetTicket',
            component: GetTicket
        },
        { path: '*', redirect: '/' },
       
        ]
})