<template>
  <v-container v-if="countries.length > 0" fluid>
    <v-row cols="12" no-gutters>
      <FilterCountries />
    </v-row>
    <v-row cols="12" no-gutters>
      <v-col v-for="(country, index) in 3" :key="index"
        ><v-img
          v-if="countries[countriesPerPage + index]"
          max-height="181"
          max-width="316"
          :src="countries[countriesPerPage + index].flag"
        ></v-img
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import FilterCountries from '@/components/FilterCountries'
import { mapState } from 'vuex'

export default {
  components: {
    FilterCountries,
  },

  data() {
    return {}
  },

  computed: {
    ...mapState(['countries', 'pagination']),

    countriesPerPage() {
      return (this.pagination.currentPage - 1) * 3
    },
  },
}
</script>
