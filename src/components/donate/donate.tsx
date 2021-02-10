import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../assets/thozhan.json';

@Component({
    tag                         :   'ngo-donate',
    styleUrl                    :   'donate.css',
})
export class NgoDonate{

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('Donate :: Constructor');
    }

    async componentWillLoad() {
        console.log('Donate :: Component will load');
    }

    async componentDidLoad() {
        console.log('Donate :: Component did load');
    }


    render() {
      var img = 'url(' + "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" + ')';
        return (
        <ion-content>
          <div class="preloader">
            <div class="preloader">
              <span></span>
              <span></span>
            </div>
          </div>
          <ngo-header></ngo-header>
          
           
          <div class="page-title-area" style={{'background-image': img}}>
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <div class="page-title-content">
                    <h2>Donate</h2>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li>Donate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="contact-section ptb-100">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <div class="contact-info-address">
                    <h3>Why Help?</h3>

                    <div class="contact-content">
                      <h3>GIVING PROMOTES FEELINGS OF HAPPINESS</h3>
                      <p>Helping others feels good. When you donate to a charity that is important to you, you not only
                        help them continue their vital work, you’re also improving your emotional wellbeing, a win-win
                        situation!</p>
                      <h3> YOU CAN REAP SOCIAL, PHYSICAL, MENTAL, AND SPIRITUAL BENEFITS</h3>
                      <p>By giving your time to a charity, you get the opportunity to build your social circles by
                        working with like-minded people</p>
                    </div>

                  </div>
                </div>


                <div class="col-lg-8">

                  <div class="contact-area">
                    <div class="contact-content">
                      <h3>Donate Here!</h3>
                      <p>Having the power to improve the lives of others is, to many people, a privilege, and one that
                        comes with its own sense of obligation.</p>
                    </div>



                    <div class="causes-details-payment">
                      <div class="payment-method">
                        <div class="causes-details-btn">
                            <a href="#" class="default-btn">
                              Login with Grassroots
                              <span></span>
                            </a>
                          </div>
                      </div><br/>

                      <form class="contact-form">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="form-group">
                              <select class='form-control'>
                                <option> General Donation </option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="form-group">
                              <br/>
                              <input type="text" name="name" class="form-control" placeholder="Referred by" />
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="form-group">
                            <input type="checkbox" style={{ 'width': '18px', 'height': '18px' }} id="anonymous" name="anonymous" value="yes"/>
                                <span style={{ 'padding-left': '16px' }}> Make Anonymous </span>
                            </div>
                          </div>
                          
                          <div class="col-lg-12">
                            <div class="form-group">
                              <input type="number" min= "100" name="msg_subject" id="msg_subject" class="form-control"
                                placeholder="Rs.100.00" />
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="form-group">
                            <textarea name="message" class="form-control" id="message" cols={30} rows={6} required
                                data-error="Write your message" placeholder="Write Something"></textarea>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="causes-details-btn">
                              <a href="#" class="default-btn">
                                Donate Now
                                <span></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ngo-footer></ngo-footer>

          {/* <footer class="footer-section pt-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                  <h3>Contact info</h3>

                  <div class="footer-info-contact">
                    <i class="flaticon-pin"></i>
                    <h3>Location</h3>
                    <span>{this.ngo.address}</span>
                  </div>

                  <div class="footer-info-contact">
                    <i class="flaticon-call"></i>
                    <h3>Call Us</h3>
                    <span><a href="tel:+882-569-756">{this.ngo.reachOut.phone1}</a></span>
                  </div>

                  <div class="footer-info-contact">
                    <i class="flaticon-email"></i>
                    <h3>Email Us</h3>
                    <span>
                      <a href="mailto:hello@huruma.com">
                        {this.ngo.reachOut.email}
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                  <h3>Our Support</h3>

                  <ul class="footer-quick-links">
                    <li>
                      <a href="#">
                        Private Policies
                      </a>
                    </li>
                    <li>
                      <a href="/donate">
                        Donate Now
                      </a>
                    </li>
                    <li>
                      <a href="/volunteer">
                        Become a Volunteer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Paid programs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Partnership
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                  <h3>Our Services</h3>

                  <ul class="footer-quick-links">
                    <li>
                      <a href="/donate">
                        Donate
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sponsor
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Fundraise
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Volunteer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Partner
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Form
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                  <h3>Recent News</h3>

                  <div class="footer-news">
                    <a href="single-blog.html">
                      <img src="assets/img/footer-news/1.jpg"alt="image" />
                      <h4>{this.ngo.media[0].name}</h4>
                      <span>{this.ngo.media[0].PublicationName}</span>
                    </a>
                  </div>

                  <div class="footer-news">
                    <a href="single-blog.html">
                      <img src="assets/img/footer-news/2.jpg" alt="image" />
                      <h4>{this.ngo.media[1].name}</h4>
                      <span>{this.ngo.media[1].PublicationName}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="copyright-area">
            <div class="container">
              <div class="copyright-area-content">
                <div class="row align-items-center">
                  <div class="col-lg-4">
                    <div class="copyright-logo">
                      <img src={this.ngo.logo.url} alt="image" />
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <p>
                      <i class="far fa-copyright"></i>
                      2020 {this.ngo.name }. All Rights Reserved by
                      <a href="https://envytheme.com/" target="_blank">
                        EnvyTheme
                      </a>
                    </p>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <ul>
                      <li>
                        <a href="terms-condition.html">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer> */}

          <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
          </div>

        </ion-content>

);

    }

}
