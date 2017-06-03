<template>
    <!-- Header
    ============================================= -->
    <header id="header" class="nobottomborder no-sticky">

      <div id="header-wrap">

        <div class="container-fluid clearfix">

          <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

          <!-- Logo
          ============================================= -->
          <div id="logo">
              <router-link to="/"class="standard-logo" data-dark-logo="./../assets/images/logo-media-dark.png"><img src="./../assets/images/logo-media.png" alt="Canvas Logo"></router-link>
              <router-link to="/"class="retina-logo" data-dark-logo="./../assets/images/logo-media-dark@2x.png"><img src="./../assets/images/logo-media@2x.png" alt="Canvas Logo"></router-link>
          </div><!-- #logo end -->

          <!-- Primary Navigation
          ============================================= -->
          <nav id="primary-menu" class="style-2">

            <ul>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/portfolio">Portfolio</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
          </ul>

          <div class="header-social-set">
              <a href="https://www.facebook.com/terri.a.swallow" class="social-icon si-small si-borderless si-facebook">
                <i class="icon-facebook"></i>
                <i class="icon-facebook"></i>
            </a>

            <a href="https://www.instagram.com/terriann/" class="social-icon si-small si-borderless si-instagram">
                <i class="icon-instagram"></i>
                <i class="icon-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/terriannswallow/" class="social-icon si-small si-borderless si-linkedin">
                <i class="icon-linkedin"></i>
                <i class="icon-linkedin"></i>
            </a>

            <a href="https://github.com/terriann" class="social-icon si-small si-borderless si-github">
                <i class="icon-github"></i>
                <i class="icon-github"></i>
            </a>
        </div>

    </nav><!-- #primary-menu end -->

</div>

</div>

</header><!-- #header end -->
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
