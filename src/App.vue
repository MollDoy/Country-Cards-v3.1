<template>
  <v-app>
      <navigation-bar></navigation-bar>
      <v-main>
        <router-view v-slot="{Component}">
          <transition name="fade" mode="out-in">
              <component v-bind:is="Component" v-bind:key="$route.path"></component>
          </transition>
        </router-view>
      </v-main>
      <custom-footer></custom-footer>
  </v-app>
</template>
<script>
import NavigationBar from '@/components/NavigationBar.vue';
import CustomFooter from '@/components/CustomFooter.vue';
export default {
  components: {NavigationBar, CustomFooter}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity:0;
}
/* unnecessary, just for more understanding */
.fade-enter-to,
.fade-leave-from {
opacity: 1;
}

/* moveUp && fadeIn transition
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-400px); }
} */
</style>
