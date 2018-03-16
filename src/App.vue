<template>
  <div id="app">
    <pw-header></pw-header>
    <pw-banner></pw-banner>
    <!---<pw-menu></pw-menu>---->
    <router-view></router-view>
    <pw-footer></pw-footer>
  </div>
</template>

<script>

import pwHeader from '@/components/layouts/header.vue';
//import pwMenu from '@/components/layouts/menu.vue';
import pwFooter from '@/components/layouts/footer.vue';
import pwBanner from '@/components/layouts/banner.vue';

export default {
  name: 'app',
  components : {
    pwFooter, pwHeader, pwBanner
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
