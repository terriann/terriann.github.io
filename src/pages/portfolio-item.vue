<template>

<!-- Content
============================================= -->
<section id='content'>

  <div class='content-wrap'>

    <div id='section-about' class='container-fluid page-section clearfix'>

      <div id='section-portfolio' class='page-section'>

        <span class=''>Portfolio Item</span>
        <h1 class='bottommargin'>{{ title}}</h1>


          <div class='postcontent bothsidebar nobottommargin'>

            <!-- Portfolio Single Video
            ============================================= -->
            <div class='col_full portfolio-single-image'>
              <iframe src='http://player.vimeo.com/video/80975867' width='500' height='281' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div><!-- .portfolio-single-image end -->

            <!-- Portfolio Single Content
            ============================================= -->
            <div class='col_full portfolio-single-content'>

              <!-- Portfolio Single - Description
              ============================================= -->
              <div class='fancy-title title-dotted-border'>
                <h2>Project Info:</h2>
              </div>

              <p>{{ description }}</p>
              <!-- Portfolio Single - Description End -->

            </div><!-- .portfolio-single-content end -->

            <div class='line'></div>

            <div class='col_full nobottommargin'>

              <!-- Portfolio Single - Meta
              ============================================= -->
              <ul class='portfolio-meta bottommargin'>
                <li><span><i class='icon-calendar3'></i>Completed on:</span> 17th March 2014</li>
                <li><span><i class='icon-lightbulb'></i>Skills:</span> {{ skills }}</li>
                <li><span><i class='icon-link'></i>Client:</span> <a href='#'>Google</a></li>
              </ul>
              <!-- Portfolio Single - Meta End -->

              <!-- Portfolio Single - Share
              ============================================= -->
              <div class='si-share clearfix'>
                <span>Share:</span>
                <div>
                  <a href='#' class='social-icon si-borderless si-facebook'>
                    <i class='icon-facebook'></i>
                    <i class='icon-facebook'></i>
                  </a>
                  <a href='#' class='social-icon si-borderless si-twitter'>
                    <i class='icon-twitter'></i>
                    <i class='icon-twitter'></i>
                  </a>
                  <a href='#' class='social-icon si-borderless si-pinterest'>
                    <i class='icon-pinterest'></i>
                    <i class='icon-pinterest'></i>
                  </a>
                  <a href='#' class='social-icon si-borderless si-gplus'>
                    <i class='icon-gplus'></i>
                    <i class='icon-gplus'></i>
                  </a>
                  <a href='#' class='social-icon si-borderless si-rss'>
                    <i class='icon-rss'></i>
                    <i class='icon-rss'></i>
                  </a>
                  <a href='#' class='social-icon si-borderless si-email3'>
                    <i class='icon-email3'></i>
                    <i class='icon-email3'></i>
                  </a>
                </div>
              </div>
              <!-- Portfolio Single - Share End -->

            </div>

          </div>


        </div>

      </div>

    </div>

  </section><!-- #content end -->

</template>


<script>
export default
{
  name: 'portfolio-item',
  components:
  {
  },
  props: ['slug'],
  /*
  data()
  {
    return
    {
      text: 'ERROR 404, sorry no todo found!',
      note: '',
      disabled: 'disabled'
    }
  },
  */
  created () {
    this.slug = this.$route.params.slug
    if (typeof this.item_collection[ this.slug ] === 'object') {
      let item = this.item_collection[ this.slug ]
      this.title = item.title
      this.skills = item.skills
      this.client = item.client
      this.photos = item.photos
      this.description = item.description
    }
  },
  computed:
  {
    item_collection () {
      return this.$store.state.portfolio.items
    }
  },
  watch:
  {
    $route (newRoute, oldRoute) {
      // Default
      this.text = 'ERROR 404, sorry no portfolio item found!'
      this.note = ''
      this.disabled = 'disabled'
      // If item exists
      if (typeof this.lists[ this.slug ] === 'object') {
        let item = this.lists[ this.listID ].items[this.itemID]
        this.text = item.text
        this.note = item.note
        this.disabled = null
      }
    }
  }
}
</script>

<style>
</style>
