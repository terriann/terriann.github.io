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
            <a href="index.html" class="standard-logo" data-dark-logo="./../assets/images/logo-media-dark.png"><img src="./../assets/images/logo-media.png" alt="Canvas Logo"></a>
            <a href="index.html" class="retina-logo" data-dark-logo="./../assets/images/logo-media-dark@2x.png"><img src="./../assets/images/logo-media@2x.png" alt="Canvas Logo"></a>
          </div><!-- #logo end -->

          <!-- Primary Navigation
          ============================================= -->
          <nav id="primary-menu" class="style-2">

            <ul>
              <li><a href="#" data-scrollto="#section-about" data-easing="easeInOutExpo" data-speed="1250" data-offset="200"><div>About</div></a></li>
              <li><a href="#" data-scrollto="#section-services" data-easing="easeInOutExpo" data-speed="1250" data-offset="60"><div>Services</div></a></li>
              <li><a href="#" data-scrollto="#section-portfolio" data-easing="easeInOutExpo" data-speed="1250" data-offset="60"><div>Portfolio</div></a></li>
              <li><a href="#" data-scrollto="#section-contact" data-easing="easeInOutExpo" data-speed="1250" data-offset="60"><div>Contact</div></a></li>
            </ul>

            <div class="header-social-set">
              <a href="#" class="social-icon si-small si-borderless si-facebook">
                <i class="icon-facebook"></i>
                <i class="icon-facebook"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless si-twitter">
                <i class="icon-twitter"></i>
                <i class="icon-twitter"></i>
              </a>

              <a href="#" class="social-icon si-small si-borderless si-github">
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
