<template>
    <v-container class="d-flex justify-center">
        <v-card
        class="pa-6"
        max-width="1000"
        color="primary"
        variant="outlined">
            <v-card-title class="text-h5 text-center">
                {{$t("homeCard.title")}}
            </v-card-title>

            <v-card-text class="text-body-1">
                <p>{{$t("homeCard.firstParagraph")}}</p>
                <p>{{$t("homeCard.secondParagraph")}}</p>
                <ul style="margin-left: 35px">
                    <li v-for="listElement in listElements">{{listElement}}</li>
                </ul>
                <p>
                    {{$t("homeCard.thirdParagraph")}}
                    <app-link to="https://restcountries.com/"><b>{{$t("homeCard.nameOfApiSite")}}</b></app-link>.
                </p>
                <p class="mt-4">
                    {{$t("homeCard.conclusionStart")}} <b><app-link v-bind:to="{name: 'countryCards'}">Country Cards</app-link></b> {{$t("homeCard.conclusionEnd")}}
                </p>
            </v-card-text>

            <v-card-actions class="justify-center">
                <v-btn 
                v-for="link in links"
                color="primary" 
                variant="outlined" 
                v-bind:to="{name: link.name}"
                append-icon="mdi-arrow-right">
                {{ link.text }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import i18n from '@/i18n/i18n';

export default {
    computed: {
        listElements() {
            return i18n.global.tm("homeCard.listElements")
        },
        links() {
            return i18n.global.tm("homeCard.links")
        }
    }
}
</script>