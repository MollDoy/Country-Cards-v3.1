<template>
    <v-toolbar id="nav" app color="primary" class="mx-auto">
        <v-btn icon>
            <app-link to="/home">
                <v-icon>mdi-home</v-icon>
            </app-link>
        </v-btn>

        <v-toolbar-title>
            <app-link to="/countryCards">Country Cards</app-link>
        </v-toolbar-title>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <app-link v-bind:to="{name: 'favoriteCountries'}">
                <v-icon>mdi-heart</v-icon>
            </app-link>
        </v-btn>

        <v-btn id="menu-activator">{{$t("navigationBar.langSelectorButton")}}</v-btn>
        <v-menu activator="#menu-activator" location="bottom">
            <v-list>
                <v-list-item v-for="item in items" :key="item.key" v-on:click="switchLang(item.key)">{{ item.text }}</v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>

export default {
    data() {
        return {
            items: [
                { text: "English", key: "en" },
                { text: "Русский", key: "ru" },
                { text: "العربية", key: "ar" }
            ]
        }
    },
    methods: {
        switchLang(key) {
            this.$i18n.locale = key;
            localStorage.setItem("lang", key)
        }
    }
}
</script>