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





            

            <article class="portfolio-item pf-illustrations">
              <div class="portfolio-image imagescale">
                <a href="#">
                  <img src="./../assets/images/portfolio/thumb/2.jpg" alt="Locked Steel Gate">
                </a>
                <div class="i-overlay on-hover" style="background: rgba(255,255,255,0.7);">
                  <a href="#"><i class="icon-line-plus"></i></a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3><a href="#">Locked Steel Gate</a></h3>
                <span><a href="#">Illustrations</a></span>
              </div>
            </article>

            <article class="portfolio-item pf-graphics pf-uielements">
              <div class="portfolio-image imagescale">
                <a href="#">
                  <img src="./../assets/images/portfolio/thumb/3.jpg" alt="Mac Sunglasses">
                </a>
                <div class="i-overlay on-hover" style="background: rgba(255,255,255,0.7);">
                  <a href="#"><i class="icon-line-plus"></i></a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3><a href="#">Mac Sunglasses</a></h3>
                <span><a href="#">Graphics</a>, <a href="#">UI Elements</a></span>
              </div>
            </article>

            <article class="portfolio-item pf-media pf-icons wide">
              <div class="portfolio-image imagescale">
                <a href="#">
                  <img src="./../assets/images/portfolio/thumb/4.jpg" alt="Open Imagination">
                </a>
                <div class="i-overlay on-hover" style="background: rgba(255,255,255,0.7);">
                  <a href="#"><i class="icon-line-stack-2"></i></a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3><a href="#">Open Imagination</a></h3>
                <span><a href="#">Media</a>, <a href="#">Icons</a></span>
              </div>
            </article>

            <article class="portfolio-item pf-uielements pf-icons">
              <div class="portfolio-image imagescale">
                <a href="#">
                  <img src="./../assets/images/portfolio/thumb/11.jpg" alt="Backpack Contents">
                </a>
                <div class="i-overlay on-hover" style="background: rgba(255,255,255,0.7);">
                  <a href="#"><i class="icon-line-play"></i></a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3><a href="#">The Orange Bag</a></h3>
                <span><a href="#">Illustrations</a></span>
              </div>
            </article>

            <article class="portfolio-item pf-media pf-icons">
              <div class="portfolio-image imagescale">
                <a href="#">
                  <img src="./../assets/images/portfolio/thumb/6.jpg" alt="Open Imagination">
                </a>
                <div class="i-overlay on-hover" style="background: rgba(255,255,255,0.7);">
                  <a href="#"><i class="icon-line-plus"></i></a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3><a href="#">Open Imagination</a></h3>
                <span><a href="#">Media</a>, <a href="#">Icons</a></span>
              </div>
            </article>

            <article class="portfolio-item pf-uielements pf-icons">
              <div class="portfolio-image imagescale">
                <a href="#">
                  <img src="./../assets/images/portfolio/thumb/7.jpg" alt="Backpack Contents">
                </a>
                <div class="i-overlay on-hover" style="background: rgba(255,255,255,0.7);">
                  <a href="#"><i class="icon-line-play"></i></a>
                </div>
              </div>
              <div class="portfolio-desc">
                <h3><a href="#">Backpack Contents</a></h3>
                <span><a href="#">UI Elements</a>, <a href="#">Icons</a></span>
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
