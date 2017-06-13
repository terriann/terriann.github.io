<template>

<!-- Content
  ============================================= -->
  <section id="content">

    <div class="content-wrap">

      <div id="section-about" class="page-section container-fluid clearfix">

        <h1 class="bottommargin">About Me</h1>



        <div class="row clearfix">

          <div class="col-xs-12">

            <p>I knew, when I was in high school, that I wanted to make things on the Internet. I studied web design and development in college and graduated with a BS in Interactive Media Design. In the days of Flash and Director I stayed focused on development with PHP, MySQL and front end flavors.</p>
 
            <p>Since then I’ve worked on in-house products such as BobVila.com, Chitika.com, Goby.com, Scout.me, AuditAnalytics.com. I also spent time at agencies building sites for law firms, credit unions, intranets and small businesses. My broad background from startup to ad network and financial data company to running my own small business helps me bring a wide range of skills to the projects and products I work on.</p>

          </div>

          <div class="clear"></div>
        </div>



        <div class="row clearfix">

          <div class="col-md-6">

            <h3>Entrepreneurial Work</h3>

            <p>I 2015 I launched a physical product, Mini Barn Quilts. A under $20 wooden craft kit. Inspired by traditional quilt locks these laser cut pieces could be decorated and assembled into decorative wall hangings. I had designed, manufactured, branded, marketed and sold them through online stores (Etsy, Shopify and WooCommerce.) Shortly after launching I was asked to be part of a 1-year feature in Country Living Magazine, a Hearst Publication. I designed ten licensed project kits and each was featured in one of the 10 annual issues of Country Living.</p>

          </div>

          <div class="col-md-6">


            <div class="thumbnail">
              <img alt="Mini Barn Quilts.com" src="./../../static/images/portfolio/thumb/minibarnquilts.png" style="display: block;">
              <div class="caption">
                <h3>Mini Barn Quilts</h3>
                <p>Learn more about Mini Barn Quilts and my roles, responsibilities and successes with this project.</p>
                <a href="#" class="btn btn-primary" role="button">View Portfolio Page</a>
              </div>
            </div>
          </div>

          <div class="clear"></div>
        </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script>

  export default {
    name: 'about',
    components: {
    },
    created () {
    },
    computed:
    {
      item_list () {
        let arr = [this.$store.state.portfolio.items.minibarnquilts]
        return arr
      }
    }
  }
</script>

<style lang="scss">
</style>
