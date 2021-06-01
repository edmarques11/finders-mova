<template>
  <v-app-bar height="100px" class="white" app>
    <div class="container-images">
      <NuxtLink to="/">
        <v-img
          max-height="61.66"
          max-width="94"
          src="/logo_principal.png"
        ></v-img>
      </NuxtLink>
      <NuxtLink to="/">
        <v-img max-height="36" max-width="134" src="/return_button.png"></v-img>
      </NuxtLink>
    </div>
  </v-app-bar>
</template>

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
</style>
