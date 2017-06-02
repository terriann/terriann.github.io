<template>
  <div id="app">
  	<cover-photos></cover-photos>
    <router-view></router-view>
  </div>
</template>

<script>

import CoverPhotos from './components/cover-photos.vue'

export default {
  name: 'app',
  components: {
    'cover-photos': CoverPhotos
  }
}
</script>

<style lang="scss">
  @import "assets/style.scss";
</style>
