<template>
    <v-footer id="foot" app class="text-center d-flex flex-column ga-2 py-4" color="primary" v-if="!footerHidden">
        <v-container class="footer-top">
            <div class="d-flex ga-3">
                <app-link v-for="icon in icons" v-bind:key="icon.picture" v-bind:to="icon.link">
                    <v-btn :icon="icon.picture" density="comfortable" variant="text" class="icon"></v-btn>
                </app-link>
            </div>
            <v-btn icon size="small" color="white" variant="outlined" class="close-btn" v-on:click="hideOrShowFooter()">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-container>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>
        
        <div class="text-caption font-weight-regular opacity-60">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. 
            Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. 
            Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. 
            Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>

        <div>
        {{ currentYear }} — <strong>Vuetify + Vue Router + Vuex + Vue i18n</strong><br>
        <b>Project by MollDoy</b>
        </div>
    </v-footer>
    <v-footer app class="text-center d-flex flex-column ga-2 py-4" color="primary" v-else>
        <b>Why you did that? :(</b>
        <v-btn 
            v-on:click="hideOrShowFooter()"
            rounded="lg"
            elevation="2"
            color="indigo-lighten-3"
            variant="outlined"
            target="_blank">
            Sorry pls
        </v-btn>
    </v-footer>
</template>

<style>
.footer-hidden {
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
</style>
<script>
export default {
    data() {
        return {
            icons: [
                {picture: 'mdi-facebook', link: "/"},
                {picture: 'mdi-twitter', link: "/"},
                {picture: 'mdi-instagram', link: "/"},
                {picture: 'mdi-steam', link: "https://steamcommunity.com/profiles/76561198048922244/"},
            ],
            footerHidden: false,
        }
    },
    methods: {
        hideOrShowFooter() {
            this.footerHidden = !this.footerHidden;
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>
