import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../assets/thozhan.json';

@Component({
    tag                         :   'ngo-contact',
    styleUrl                    :   'contact.css',
})
export class NgoContact{

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('Contact :: Constructor');
    }

    async componentWillLoad() {
        console.log('Contact :: Component will load');
    }

    async componentDidLoad() {
        console.log('Contact :: Component did load');
    }


    render() {
      var img = 'url(' + this.ngo.photos[3] + ')';
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
                    <h2>Contact</h2>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li>Contact</li>
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
                    <h3>Quick Contact </h3>

                    <div class="info-contact">
                      <i class="flaticon-pin"></i>
                      <h3>Location</h3>
                      <span>{this.ngo.address}</span>
                    </div>

                    <div class="info-contact">
                      <i class="flaticon-call"></i>
                      <h3>Call Us</h3>
                      <span><a href="#">{this.ngo.reachOut.phone1}</a></span>
                    </div>

                    <div class="info-contact">
                      <i class="flaticon-email"></i>
                      <h3>Email Us</h3>
                      <span>
                        <a href="#">
                          {this.ngo.reachOut.email}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-8">
                  <div class="contact-area">
                    <div class="contact-content">
                      <h3>Let’s talk!</h3>
                      <p>Contact us to get, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ainim veniam.</p>
                    </div>

                    <div class="contact-form">
                      <form id="contactForm">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                              <input type="text" name="name" id="name" class="form-control" required
                                data-error="Please enter your name" placeholder="Name" />
                              <div class="help-block with-errors"></div>
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                              <input type="text" name="phone_number" id="phone_number" required
                                data-error="Please enter your number" class="form-control" placeholder="Phone" />
                              <div class="help-block with-errors"></div>
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                              <input type="email" name="email" id="email" class="form-control" required
                                data-error="Please enter your email" placeholder="email" />
                              <div class="help-block with-errors"></div>
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                              <input type="text" name="msg_website" id="msg_website" class="form-control" required
                                data-error="Please enter your website" placeholder="Website" />
                              <div class="help-block with-errors"></div>
                            </div>
                          </div>

                          <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                              <textarea name="message" class="form-control" id="message" cols={30} rows={6} required
                                data-error="Write your message" placeholder="Write Something"></textarea>
                              <div class="help-block with-errors"></div>
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="send-btn">
                              <button type="submit" class="default-btn">
                                Contact us
                                <i class="flaticon-right"></i>
                                <span></span>
                              </button>
                            </div>
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                            <div class="clearfix"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799090714!2d-74.25987368715496!3d40.697670064588735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1570689677254!5m2!1sen!2sbd"></iframe>
          </div>

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
