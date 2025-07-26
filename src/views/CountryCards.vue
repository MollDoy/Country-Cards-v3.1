<template>
    <v-container>
        <v-container>
            <v-row>
                <v-col cols="10">
                    <v-text-field color="primary" v-bind:label="$t('countryCards.inputField')" v-model="newCountry" v-on:keyup.enter="addCountry()"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn block rounded="lg" color="primary" variant="outlined" v-on:click="addCountry()" append-icon="mdi-check-circle" style="top: 10px">{{$t("countryCards.addButton")}}</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row justify="center">
                <v-col v-for="country in countries" v-bind:key="country.id" cols="12" sm="12" md="6" lg="4" xl="3">
                    <CountryCard v-bind:country="country.name" v-on:remove="removeCountry(country.id)"></CountryCard>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script> 
  import CountryCard from '@/components/CountryCard.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    components: {
      CountryCard
    },
    data() {
        return {
            newCountry: "",
        }
    },
    methods: {
        ...mapActions("Countries", ["removeCountry"]),
        addCountry() {
            this.$store.dispatch("Countries/addCountry", this.newCountry);
            this.newCountry = "";
        }
    },
    computed: {
        ...mapState({
            countries: state => state.Countries.countries
        })
    }
}
</script>