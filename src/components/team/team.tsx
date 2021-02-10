import { Component, h, Prop} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-team',
  styleUrl: 'team.css',
})
export class NgoTeam {
 @Prop() ngo                 :   any                 =   ngo;
 componentWillLoad() {
  console.log('NgoTeam :: componentWillLoad');
}

componentDidLoad() {
  console.log('NgoTeam :: componentDidLoad');
}

  
  render() {
    var img = 'url(' + this.ngo.photos[5] + ')'
    return [
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
                            <h2>Team</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <section class="team-section pt-100 pb-70">
            <div class="container">
                <div class="team-title-area">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="section-title text-left">
                                <span>
                                    <i class="flaticon-support"></i>
                                    Meet Our Team
                                </span>
                                <h2>Talented Team behind {this.ngo.name}</h2>
                                <p>The strength of the team is each individual member. The strength of each member is the team</p>
                            </div>
                        </div>

                        {/* <div class="col-lg-5">
                            <div class="team-btn text-right">
                                <a href="#" class="optional-btn">
                                    Meet Our Team
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div class="row">
                    {this.ngo.team.slice(0, 8).map(m => (
                        <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src={m.photo.url} alt="image"/>
    
                                <ul class="social">
                                    {   m.reachOut.facebook.length !== 0 ?
                                        <li>
                                        <a href={m.reachOut.facebook} target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>:null}
                                    
                                    {   m.reachOut.twitter.length !== 0 ?
                                        <li>
                                        <a href={m.reachOut.twitter} target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    :null}
                                    
                                    {m.reachOut.linkedin.length !== 0 ?
                                    <li>
                                    <a href={m.reachOut.linkedin}target="_blank">
                                        <i class="bx bxl-linkedin"></i>
                                    </a>
                                </li>:null}
                                    {m.reachOut.instagram.length !== 0 ?
                                        <li>
                                        <a href={m.reachOut.instagram}target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    :null}
                                    
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>{ m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...'}</h3>
                                <span>{ m.role.length < 60 ? m.role : m.role.substring(0, 60) + '...' }</span>
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="assets/img/team/1.png" alt="image"/>
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Alex Maxwel</h3>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="assets/img/team/2.png" alt="image"/>
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Williams Halimton</h3>
                                <span>Manager</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="assets/img/team/3.png" alt="image"/>
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Ched Kurtsovski</h3>
                                <span>Volunteer</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="assets/img/team/4.png" alt="image"/>
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Ched Kurtsovski</h3>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="assets/img/team/5.png" alt="image"/>
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Jack Blumberg</h3>
                                <span>Manager</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="team-item">
                            <div class="image">
                                <img src="assets/img/team/6.png" alt="image"/>
    
                                <ul class="social">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="content">
                                <h3>Cesario Lee</h3>
                                <span>Volunteer</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        
        <div class="instagram-area">
            <div class="instagram-slides owl-carousel owl-theme">
                <div class="instagram-box">
                    <img src="assets/img/instagram/1.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href={this.ngo.reachOut.instagram} target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/2.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href={this.ngo.reachOut.instagram} target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/3.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href={this.ngo.reachOut.instagram}target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/4.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href={this.ngo.reachOut.instagram} target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/5.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href={this.ngo.reachOut.instagram} target="_blank"></a>
                </div>
            </div>
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
  
    ];
  }
}
