<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="length"
      :total-visible="5"
    ></v-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pagination',

  data() {
    return {
      page: 1,
      length: 0,
    }
  },

  computed: {
    ...mapState(['countries']),
  },

  watch: {
    countries() {
      this.length = Math.trunc(this.countries.length / 3) + 1
    },

    page() {
      this.$store.commit('change_pagination', {
        currentPage: this.page,
      })
    },
  },
}
</script>
