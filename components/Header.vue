<template>
  <v-app-bar height="100px" class="white" app>
    <div class="container-images">
      <div class="logo-mova" @click="goHome()">
        <v-img
          max-height="61.66"
          max-width="94"
          src="/logo_principal.png"
        ></v-img>
      </div>
      <div class="logo-mova" @click="goHome()">
        <v-img
          class="mova-back-big"
          max-height="36"
          max-width="134"
          src="/return_button.png"
        ></v-img>
        <v-img
          class="mova-back-small"
          max-height="24"
          max-width="24"
          src="/keyboard_return.png"
        ></v-img>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  computed: {},

  methods: {
    goHome() {
      if (this.$route.path !== '/') {
        this.$store.commit('change_countries', [])
        this.$store.commit('change_pagination', { currentPage: 1 })
        this.$store.commit('change_filter', { typeFilter: '', endpoint: '' })
        this.$router.push('/')
      }
    },
  },
}
</script>

<style scoped>
.container-images {
  width: 100%;
  padding-left: 30px;
  padding-right: 51px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo-mova {
  cursor: pointer;
}

.mova-back-small {
  display: none;
}

@media screen and (max-width: 600px) {
  .mova-back-big {
    display: none !important;
  }

  .mova-back-small {
    display: block !important;
  }
}
</style>
