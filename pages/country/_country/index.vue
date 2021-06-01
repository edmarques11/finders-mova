<template>
  <v-container fluid>
    <v-row v-if="country">
      <v-col cols="5">
        <v-card class="rounded-0" max-width="443">
          <v-img max-height="258" max-width="443" :src="country.flag"></v-img>
        </v-card>
      </v-col>

      <v-col class="d-flex flex-column justify-space-between">
        <div>Nome: {{ country.name }}</div>
        <div>Capital: {{ country.capital }}</div>
        <div>Região: {{ country.region }}</div>
        <div>Sub-região: {{ country.subregion }}</div>
        <div>População: {{ country.population }}</div>
        <div>Linguas: {{ formatLanguages }}</div>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col>
        <div>Países vizinhos:</div>
      </v-col>
    </v-row>

    <v-row>
      <ListCountries class="mb-16" />
    </v-row>
  </v-container>
</template>

<script>
import ListCountries from '@/components/ListCountries'
import { mapState } from 'vuex'

export default {
  name: 'Country',
  components: {
    ListCountries,
  },
  data() {
    return {
      country: '',
      countryName: this.$route.params.country,
    }
  },

  computed: {
    ...mapState(['allCountries']),
    formatLanguages() {
      const languages = this.country.languages.map((value) => {
        return value.nativeName
      })

      return languages.join(', ')
    },
  },

  watch: {
    country() {
      this.filterBorders()
    },
  },

  mounted() {
    this.getCountry()
  },

  methods: {
    async getCountry() {
      try {
        const country = await this.$axios.$get(`/name/${this.countryName}`)
        this.country = country[0]
      } catch (error) {
        throw new Error(error)
      }
    },

    filterBorders() {
      const borders = this.country.borders
      const countriesBorders = []
      for (const index in borders) {
        const finderCountry = this.allCountries.findIndex((value) => {
          return value.alpha3Code === borders[index]
        })
        countriesBorders.push(this.allCountries[finderCountry])
      }
      this.$store.commit('change_countries', countriesBorders)
    },
  },
}
</script>
