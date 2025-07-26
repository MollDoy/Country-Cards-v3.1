<template>
    <v-container>
        <v-card v-if="countryInfo.errorMessage" color="primary" max-width="570" max-height="600" variant="outlined" class="card">
            <v-container class="card-top">
                <v-card-title style="text-align: center">Error Message</v-card-title>
                <v-btn icon size="small" color="primary" variant="outlined" class="close-btn" v-on:click="deleteCountryCard">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-container>
            <v-card-text style="text-align: center">{{countryInfo.errorMessage}}</v-card-text>
        </v-card>
        <v-card v-if="countryInfo.name" color="primary" max-width="570" max-height="600" variant="outlined" class="card">
            <v-container class="card-top">
                <v-card-title style="text-align: center">{{countryInfo.name.official}}</v-card-title>
                <v-btn icon size="small" color="primary" variant="outlined" class="close-btn" v-on:click="deleteCountryCard">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-container>
            <v-card-subtitle>..also known as {{countryInfo.name.common}}</v-card-subtitle>
            <v-card-text>
                <p>{{countryInfo.name.common}} is located in <b>{{countryInfo.subregion}}</b></p>
                <p>The capital of {{countryInfo.name.common}} is <b>{{countryInfo.capital[0]}}</b></p>
                <p>
                    The primary currency is the 
                    <b>{{Object.values(countryInfo.currencies)[0].name}} ({{Object.values(countryInfo.currencies)[0].symbol}})</b>
                </p>
                <p>
                    About <b>{{countryInfo.population}}</b> {{countryInfo.demonyms.eng.f}} people live here
                </p>
                <br>
                <v-row justify="center">
                    <v-col cols="auto" class="text-center">
                        <p><b>Flag</b> of the {{ countryInfo.name.common }} is:</p>
                        <v-img :src="countryInfo.flags.png" class="mx-auto countryImage"></v-img>
                    </v-col>

                    <v-col cols="auto" class="text-center">
                        <p><b>Coat of Arms</b> of the {{ countryInfo.name.common }} is:</p>
                        <v-img :src="countryInfo.coatOfArms.png" class="mx-auto countryImage"></v-img>
                    </v-col>
                </v-row>
                <br>
                <v-row>
                    <v-col cols="10">
                        <v-btn
                            append-icon="mdi-chevron-right"
                            rounded="lg"
                            elevation="2"
                            color="primary"
                            text="Learn more"
                            variant="outlined"
                            v-bind:href=linkToWiki
                            rel="noopener"
                            target="_blank"
                            block>
                        </v-btn>
                    </v-col>
                    <v-col cols="2">
                        <v-btn 
                        color="primary" 
                        variant="outlined" 
                        v-on:click="changeCountryFavoriteState(countryInfo.name.common)" 
                        elevation="2"
                        rounded="lg"
                        block>
                            <v-icon v-if="isCountryFavorite(countryInfo.name.common)">mdi-heart</v-icon>
                            <v-icon v-else>mdi-heart-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios"
    import { mapActions, mapGetters } from "vuex"

    export default {
        props: {
            country: {type: String, required: true},
        },
        data() {
            return {
                countryInfo: {},
            }
        },
        computed: {
            ...mapGetters("FavoriteCountries", ["isCountryFavorite"]),
            linkToWiki() {
                return `https://en.wikipedia.org/wiki/${this.country}`
            }
        },
        methods: {
            ...mapActions("FavoriteCountries", ["changeCountryFavoriteState"]),

            deleteCountryCard() {
                return this.$emit('remove');
            }
        },
        async created() {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${this.country}`);
                this.countryInfo = response.data[0];
            } catch (error) {
                this.countryInfo.errorMessage = error;
            }
        }
    }
</script>