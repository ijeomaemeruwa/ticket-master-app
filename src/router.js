import Vue from 'vue';
import Router from 'vue-router';

import EventsListing from './views/events/EventsListing.vue';
import EventDetails from './views/events/EventDetails.vue';
Vue.use(Router)


export const router = new Router({
    routes: [
        {
            path: '/',
            name: 'eventsListing',
            component: EventsListing
        },
        {
            path: '/eventDetails/:eventId',
            name: 'eventsDetails',
            component: EventDetails,
            props: true
        },
    ]
})