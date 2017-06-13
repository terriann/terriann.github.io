<template>

<!-- Content
============================================= -->
<section id="content">

  <div class="content-wrap">

    <div id="section-portfolio" class="container-fluid page-section clearfix">

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
              <span v-for="tag in item.tags" class="item">
                {{ tag }}
              </span>
            </div>
          </article>

        </div><!-- #portfolio end -->

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

<style lang="scss">
#section-portfolio {
  .portfolio-desc span {
    display: inline;

  }
  .item + .item:before {
    content: ", ";
  }
}
</style>
