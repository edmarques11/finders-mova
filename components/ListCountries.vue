<template>
  <v-container v-if="countries.length > 0" fluid>
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
import { mapState } from 'vuex'

export default {
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
