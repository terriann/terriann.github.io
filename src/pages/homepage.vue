<template>
    <!-- Content
    ============================================= -->
    <section id="content">

        <div class="content-wrap">

            <div id="section-home" class="container-fluid page-section clearfix">

                <div class="hero-headline bottommargin">
                    <h1>Hi I'm Terri Swallow<br>Web Developer.</h1>
                    <span>Building websites since 2000. I specialize in creative problem solving; combining over a decade of front and backend web development experience with a dash of marketing, a tablespoon of social media, a hint of common sense and user empathy and a whole lot of passion.</span>
                </div>

                <div class="line topmargin-sm bottommargin-sm"></div>

                <div id="section-employment" class="row clearfix">

                  <div class="col-md-6">

                    <h3>Freelance</h3>

                    <p>I take on very limited freelance opportunities but if you have an interesting project or problem that you need solved for your business please do get in touch. Quotes are customized based on a project’s needs assessment survey is completed. <router-link to="/contact">Contact me</router-link> to get the conversation started.</p>

                  </div>

                  <div class="col-md-6">

                    <h3>Recruiters &amp; Employers</h3>

                    <p>I am currently employed full time and not actively pursuing new roles. If you have a project that you think I am a good fit for I may be interested in hearing about interesting roles and opportunities and possibly share it through my network.</p>

                    <a href="/static/resume.pdf" class="button button-dark button-black nomargin">Download Resume</a>

                  </div>

                  <div class="clear"></div>
                </div>



                <div class="line topmargin-lg bottommargin-lg"></div>


                <div id="section-services" class="page-section">

                    <h2 class="bottommargin">Freelance Services.</h2>

                    <div class="row clearfix">

                        <div class="col-md-6 bottommargin">
                            <div class="feature-box fbox-plain fbox-dark">
                                <div class="fbox-icon">
                                    <a href="#"><i class="icon-et-tools"></i></a>
                                </div>
                                <h3>Website Development</h3>
                                <p>Does your online presence need an update or are you just getting started? Maybe your need a content update or want to explore moving to a different platform that makes it easier for you to update the site or integrate a blog or shopping cart.</p>
                            </div>
                        </div>
                        <div class="col-md-6 bottommargin">
                            <div class="feature-box fbox-plain fbox-dark">
                                <div class="fbox-icon">
                                    <a href="#"><i class="icon-et-wallet"></i></a>
                                </div>
                                <h3>e-Commerce</h3>
                                <p>Are you thinking about launching an ecommerce store, selling on Facebook or managing newsletters for your direct marketing? I have experience with easy to use platforms from Shopify, Squarespace, WordPress, Etsy and more.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-md-6 bottommargin">
                            <div class="feature-box fbox-plain fbox-dark">
                                <div class="fbox-icon">
                                    <a href="#"><i class="icon-et-lightbulb"></i></a>
                                </div>
                                <h3>Consulting</h3>
                                <p>Do you need some brief or reoccuring 1:1 time to talk out your online marketing strategy and get some unbiased feedback? Let's find out how we can come up with a strategy for your newsletters and blogs to be easier to keep up with while making sure you're spending time on the most important thing: your business.</p>
                            </div>
                        </div>
                        <div class="col-md-6 bottommargin">
                            <div class="feature-box fbox-plain fbox-dark">
                                <div class="fbox-icon">
                                    <a href="#"><i class="icon-et-linegraph"></i></a>
                                </div>
                                <h3>Analytics</h3>
                                <p>Do you know if your website is working for you? Once we have the right tracking setup with your website, Facebook, social media newsletters you will get a hand crafted quarterly report about what if happening with your site and social media presence.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section><!-- #content end -->

</template>


<script>

    export default {
      name: 'homepage',
      components: {
      }
    }
</script>

<style lang="scss">
#section-employment {
    p {
        color: #666;
    }
}
</style>
