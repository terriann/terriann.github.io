<template>
  <div id="app">
  	<cover-photos></cover-photos>
    <router-view></router-view>
  </div>
</template>

<script>
require('./assets/css/style.css')

import CoverPhotos from './components/cover-photos.vue'

export default {
  name: 'app',
  components: {
    'cover-photos': CoverPhotos
  }
}
</script>

<style lang="scss">
	@import "assets/css/media-agency/media-agency.css";
	@import "assets/css/font-icons.css";
	@import "assets/css/et-line.css";
	@import "assets/css/animate.css";
	@import "assets/css/magnific-popup.css";
	@import "assets/css/media-agency/fonts.css";
	@import "assets/css/responsive.css";
</style>
