<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex ma-0 pr-sm-15 pl-xs-6" cols="12" sm="4">
        <v-select
          v-model="selection1"
          :items="items1"
          label="Filtrar por"
        ></v-select>
      </v-col>

      <v-col
        v-if="selection1"
        class="d-flex ma-0 pl-sm-1 pr-sm-16 pl-xs-6"
        cols="12"
        sm="4"
      >
        <v-select
          v-model="selection2"
          :items="items2"
          item-text="name"
          item-value="iso639_2"
          :label="selection1"
        ></v-select>
      </v-col>

      <v-col
        v-if="selection1"
        class="d-flex ma-0 pl-sm-0 pl-xs-6"
        cols="12"
        sm="4"
      >
        <v-btn :disabled="!selection2" class="mova" @click="search()"
          >Pesquisar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      selection1: this.$store.state.filter.typeFilter,
      items1: [
        { text: 'Região', value: 'region' },
        { text: 'Capital', value: 'capital' },
        { text: 'Língua', value: 'lang' },
        { text: 'País', value: 'name' },
        { text: 'Código de Ligação', value: 'callingcode' },
      ],

      selection2: this.$store.state.filter.endpoint,
      items2: [this.$store.state.filter.endpoint],
    }
  },

  computed: {
    ...mapState(['allCountries']),
  },

  watch: {
    selection1() {
      this.populateItems2(this.selection1)
    },
  },

  methods: {
    async search() {
      try {
        const typeSearch = this.selection1
        const endpoint = this.selection2
        const response = await this.$axios.$get(`/${typeSearch}/${endpoint}`)
        this.$store.commit('change_countries', response)
        this.$store.commit('change_pagination', { currentPage: 1 })
      } catch (error) {
        throw new Error(error)
      }
    },

    populateItems2(typeFilter) {
      if (typeFilter === 'lang') {
        const objetctKey = 'languages'
        let elems = this.allCountries.map((value, index) => {
          return value[objetctKey]
        })

        elems = elems.flat(Infinity)

        this.items2 = elems
      } else if (typeFilter === 'callingcode') {
        const objetctKey = 'callingCodes'
        let elems = this.allCountries.map((value, index) => {
          return value[objetctKey]
        })

        elems = elems.flat(Infinity)
        elems = [...new Set(elems)]
        const indexEmpty = elems.indexOf('')
        elems.splice(indexEmpty, 1)

        this.items2 = elems
      } else {
        const elems = this.allCountries.map((value, index) => {
          return value[typeFilter]
        })

        const elemsReduce = [...new Set(elems)]
        const indexEmpty = elemsReduce.indexOf('')
        elemsReduce.splice(indexEmpty, 1)

        this.items2 = elemsReduce
      }
    },
  },
}
</script>

<style scoped>
.mova {
  background-color: #6d2080 !important;
  color: #fff !important;
}
</style>
