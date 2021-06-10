<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="event.id"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    EventCard,
  },

  // async fetch({ store, error }) {
  //   try {
  //     await store.dispatch('fetchEvents')
  //   } catch (err) {
  //     error({
  //       statusCode: 503,
  //       message: 'Unable to fetch events at this time, please try again',
  //     })
  //   }
  // },
  // computed: {
  //   // ...mapState({ events: 'events' }),
  //   events: (state) => state.events.events,
  // },

  head() {
    return {
      title: 'Event Listing',
    }
  },

  async fetch({ store, error }) {
    try {
      // console.log(this.fetchEvents())
      await store.dispatch('events/fetchEvents')
      // await console.log('Jolaoso')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },

  methods: {
    ...mapActions({
      fetchEvents: 'events/fetchEvents',
    }),
  },

  computed: mapGetters({
    events: 'events/getEvents',
  }),
}
</script>

<style lang="scss" scoped></style>
