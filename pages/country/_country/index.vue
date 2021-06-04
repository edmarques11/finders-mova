<template>
  <v-container fluid>
    <v-row v-if="country">
      <v-col cols="5">
        <v-card class="rounded-0" min-width="264" max-width="443">
          <v-img max-height="258" max-width="443" :src="country.flag"></v-img>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          min-width="264"
          height="100%"
          class="rounded-0 pa-0 d-flex flex-column justify-space-between"
          flat
        >
          <div attr-name>Nome: {{ country.name }}</div>
          <div attr-capital>Capital: {{ country.capital }}</div>
          <div attr-region @click="setFilter(country.region)">
            Região: <a>{{ country.region }}</a>
          </div>
          <div attr-subregion>Sub-região: {{ country.subregion }}</div>
          <div attr-population>População: {{ country.population }}</div>
          <div attr-lang>Linguas: {{ formatLanguages }}</div>
        </v-card>
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

    async setFilter(region) {
      let regionCountries
      try {
        regionCountries = await this.$axios.$get(`/region/${region}`)
      } catch (error) {
        throw new Error(error)
      }

      this.$store.commit('change_filter', {
        typeFilter: 'region',
        endpoint: region,
      })
      this.$store.commit('change_countries', regionCountries)
      this.$store.commit('change_pagination', { currentPage: 1 })

      this.$router.push('/')
    },

    async filterBorders() {
      let allCountries = []
      try {
        allCountries = await this.$axios.$get()
      } catch (error) {
        throw new Error(error)
      }

      const borders = this.country.borders
      const countriesBorders = []
      for (const index in borders) {
        const finderCountry = allCountries.findIndex((value) => {
          return value.alpha3Code === borders[index]
        })
        countriesBorders.push(allCountries[finderCountry])
      }
      this.$store.commit('change_countries', countriesBorders)
    },
  },
}
</script>
