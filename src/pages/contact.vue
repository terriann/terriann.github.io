<template>

  <!-- Content
  ============================================= -->
  <section id="content">

    <div class="content-wrap">

      <div id="section-contact" class="page-section container-fluid clearfix">

        <h2 class="bottommargin">Get in Touch</h2>

        <div class="row clearfix">

          <div class="col-md-8">

            <div class="contact-widget">

              <div class="contact-form-result"></div>

              <form class="nobottommargin" id="template-contactform" name="template-contactform" action="include/sendemail.php" method="post">

                <div class="form-process"></div>

                <div class="col_half">
                  <input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="sm-form-control border-form-control required" placeholder="Name" />
                </div>
                <div class="col_half col_last">
                  <input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email sm-form-control border-form-control" placeholder="Email Address" />
                </div>

                <div class="clear"></div>

                <div class="col_full">
                  <input type="text" id="template-contactform-subject" name="template-contactform-subject" value="" class="required sm-form-control border-form-control" placeholder="Subject" />
                </div>

                <div class="col_full">
                  <textarea class="required sm-form-control border-form-control" id="template-contactform-message" name="template-contactform-message" rows="7" cols="30" placeholder="Your Message"></textarea>
                </div>

                <div class="col_full">
                  <button class="button button-black noleftmargin topmargin-sm" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
                </div>

                <div class="clear"></div>

                <div class="col_full hidden">
                  <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="sm-form-control" />
                </div>

              </form>

            </div>

          </div>

          <div class="col-md-4">
            <h4>Headquarters.</h4>

            <div style="font-size: 16px; line-height: 1.7;">
              <address style="line-height: 1.7;">
                795 Folsom Ave, Suite 600<br>
                San Francisco, CA 94107<br>
              </address>

              <div class="clear topmargin"></div>

              <abbr title="Phone Number"><strong>Phone:</strong></abbr> (91) 8547 632521<br>
              <abbr title="Fax"><strong>Fax:</strong></abbr> (91) 11 4752 1433<br>
              <abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>


<script>

  export default {
    name: 'contact',
    components: {
    }
  }
</script>

<style>
</style>
