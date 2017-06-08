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

            <!-- Portfolio Single Content
            ============================================= -->
            <div class='col_full portfolio-single-content'>
              <p>Thank you for your interest. More about this project will be coming soon.</p>
              <!-- Portfolio Single - Description End -->

            </div><!-- .portfolio-single-content end -->

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
