<template>
  <div class="side-cover-wrapper full-screen visible-lg visible-md">
    <div class="fslider" data-speed="3000" data-pause="5000" data-animation="fade" data-arrows="false" data-pagi="false" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; background-color: #333;">
      <div class="flexslider" style="height: 100% !important;">
        <div class="slider-wrap" style="height: inherit !important;">
          <div class="slide full-screen force-full-screen" id="slide1"></div>
          <div class="slide full-screen force-full-screen" id="slide2"></div>
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

<style scoped>
#slide1 {
  background: url('./../assets/images/3.jpg') center right;
  background-size: cover;
  height: 100% !important;
}
#slide2 {
  background: url('./../assets/images/4.jpg') center right;
  background-size: cover;
  height: 100% !important;
}
</style>
