<template>
  <div id="app">
  	<cover-photos></cover-photos>

    <!-- Document Wrapper
    ============================================= -->
    <div id="wrapper" class="clearfix">

      <header-here></header-here>
      <div class="clear"></div>

      <router-view></router-view>

      <footer-here></footer-here>

    </div><!-- #wrapper end -->
  </div>
</template>

<script>

  import CoverPhotos from './components/cover-photos.vue'
  import header from './components/header.vue'
  import footer from './components/footer.vue'

  export default {
    name: 'app',
    components: {
      'cover-photos': CoverPhotos,
      'header-here': header,
      'footer-here': footer
    }
  }
</script>

<style lang="scss">
 @import "./assets/css/media-agency/media-agency.css";
 @import "./assets/css/font-icons.css";
 @import "./assets/css/et-line.css";
 @import "./assets/css/animate.css";
 @import "./assets/css/magnific-popup.css";
 @import "./assets/css/media-agency/fonts.css";
 @import "./assets/css/responsive.css";

#app  {
  #wrapper {
    margin: 0;
    width: 75%;
    box-shadow: none;
  }
  
  .content-wrap {
    padding: 40px 0;
  }

  .container-fluid {
    padding-left: 120px;
    padding-right: 120px;
  }
}
</style>
