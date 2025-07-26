<template>
    <v-container class="d-flex flex-column align-center justify-center" style="min-height: 860px; gap: 24px;">
        <v-btn id="home-menu-activator" color="primary">{{ $t('homeCard.langSelectorButton') }}</v-btn>
        <v-menu activator="#home-menu-activator" location="top">
            <v-list>
                <v-list-item v-for="item in items" :key="item.key" v-on:click="switchLang(item.key)">{{ item.text }}</v-list-item>
            </v-list>
        </v-menu>
        <HomeCard />
    </v-container>
</template>

<script>
import HomeCard from "@/components/HomeCard.vue"

export default {
    components: {HomeCard},
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