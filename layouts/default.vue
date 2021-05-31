<template>
  <v-app dark>
    <Header></Header>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Pagination />
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Header,
    Pagination,
  },
  data() {
    return {}
  },
}
</script>
