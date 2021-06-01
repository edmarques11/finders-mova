<template>
  <div>
    <FilterCountries />
    <ListCountries />
  </div>
</template>

<script>
import ListCountries from '@/components/ListCountries'
import FilterCountries from '@/components/FilterCountries'
import { mapActions } from 'vuex'

export default {
  components: {
    ListCountries,
    FilterCountries,
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
