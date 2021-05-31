<template>
  <ListCountries />
</template>

<script>
import ListCountries from '@/components/ListCountries'
import { mapActions } from 'vuex'

export default {
  components: {
    ListCountries,
  },

  data() {
    return {}
  },

  beforeMount() {
    this.getAllCountries()
  },

  methods: {
    ...mapActions(['getAllCountries']),
  },
}
</script>
