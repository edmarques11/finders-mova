<template>
    <v-container v-if="countries.length > 0" fluid class="mb-8">
        <v-row cols="12" no-gutters> </v-row>
        <v-row cols="12" no-gutters>
            <v-col
                v-for="(country, index) in 9"
                :key="index"
                class="d-flex flex-column justify-space-around mb-4"
                xl="9"
                sm="4"
            >
                <NuxtLink
                    v-if="countries[countriesPerPage + index]"
                    :to="`/country/${countries[countriesPerPage + index].name}`"
                >
                    <v-card class="rounded-0" max-width="316">
                        <v-img
                            v-if="countries[countriesPerPage + index]"
                            max-height="181"
                            max-width="316"
                            :src="countries[countriesPerPage + index].flag"
                        ></v-img></v-card></NuxtLink
            ></v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ListCountries',

    components: {},

    data() {
        return {}
    },

    computed: {
        ...mapState(['countries', 'pagination']),

        countriesPerPage() {
            return (this.pagination.currentPage - 1) * 9
        },
    },
}
</script>
