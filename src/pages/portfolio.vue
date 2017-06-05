<template>

<!-- Content
============================================= -->
<section id="content">

  <div class="content-wrap">

    <div id="section-about" class="container-fluid page-section clearfix">

      <div id="section-portfolio" class="page-section">

        <h1 class="bottommargin">Portfolio</h1>

          <!-- Portfolio Items
          ============================================= -->
          <div id="portfolio" class="portfolio grid-container portfolio-nomargin portfolio-full portfolio-3 portfolio-masonry mixed-masonry clearfix">

            <article class="portfolio-item pf-media pf-icons wide" v-for="item in item_collection">
              <div class="portfolio-image imagescale">
                <router-link :to="item.url">
                  <img :src="item.thumbnail" :alt="item.title">
                </router-link>
                <div class="i-overlay on-hover" style="background: rgba(255,255,255,0.7);">
                  <router-link :to="item.url"><i class="icon-line-plus"></i></router-link>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3><router-link :to="item.url">{{ item.title }}</router-link></h3>
                <span><a href="#">Media</a>, <a href="#">Icons</a></span>
              </div>
            </article>

          </div><!-- #portfolio end -->

        </div>

      </div>

    </div>

  </section><!-- #content end -->

</template>


<script>
export default {
  name: 'portfolio',
  components: {
  },
  created () {
  },
  computed:
  {
    item_collection () {
      return this.$store.state.portfolio.items
    }
  }
}
</script>

<style>
</style>
