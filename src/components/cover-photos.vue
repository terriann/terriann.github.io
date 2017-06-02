<template>
  <div class="side-cover-wrapper full-screen visible-lg visible-md">
    <div class="fslider" data-speed="3000" data-pause="5000" data-animation="fade" data-arrows="false" data-pagi="false" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; background-color: #333;">
      <div class="flexslider" style="height: 100% !important;">
        <div class="slider-wrap" style="height: inherit !important;">
          <div class="slide full-screen force-full-screen" style="background: url('../static/images/1.jpg') center right; background-size: cover; height: 100% !important;"></div>
          <div class="slide full-screen force-full-screen" style="background: url('../static/images/2.jpg') center right; background-size: cover; height: 100% !important;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cover-photos',
  data () {
    return {
      msg: 'Welcome to Your *New* Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
