<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex p-0" cols="12" sm="4">
        <v-select :items="items1" label="Filtrar por"></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="4">
        <v-select :items="items2" filled label="Filled style"></v-select>
      </v-col>

      <v-col class="d-flex" cols="12" sm="4">
        <v-btn class="mova">Pesquisar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items1: [
        { text: 'Região', value: 'region' },
        { text: 'Capital', value: 'capital' },
        { text: 'Língua', value: 'lang' },
        { text: 'País', value: 'country' },
        { text: 'Código de Ligação', value: 'callingcode' },
      ],

      items2: [],
    }
  },
}
</script>

<style scoped>
.mova {
  background-color: #6d2080 !important;
  color: #fff !important;
}
</style>
