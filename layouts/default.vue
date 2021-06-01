<template>
  <v-app dark>
    <Header></Header>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <div class="pages-footer">
      <Pagination />
    </div>
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

<style scoped>
.pages-footer {
  position: relative;
  bottom: 50px;
}
</style>
