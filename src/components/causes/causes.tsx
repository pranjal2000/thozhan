import { Component, h, Prop} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-causes',
  styleUrl: 'causes.css',
})
export class NgoCauses {
 @Prop() ngo                 :   any                 =   ngo;
 componentWillLoad() {
  console.log('NgoCauses :: componentWillLoad');
}

componentDidLoad() {
  console.log('NgoCauses :: componentDidLoad');
}

  
  render() {
    var img = 'url(' + this.ngo.photos[6] + ')';
    return [
    <ion-content>
        <div class="preloader">
            <div class="preloader">
                <span></span>
                <span></span>
            </div>
        </div>
        {/* <!-- End Header Area -->

        <!-- Start Navbar Area --> */}
        <div class="navbar-area  navbar-style-three">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="/">
                                <img src="assets/img/logo-3.png" class="white-logo" alt="logo"/>
                                <img src="assets/img/logo-2.png" class="black-logo" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img src="assets/img/logo-3.png" class="white-logo" alt="logo"/>
                            <img src="assets/img/logo-2.png" class="black-logo" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="/" class="nav-link">
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/" class="nav-link">
                                                Home One
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/" class="nav-link">
                                                Home Two
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/" class="nav-link">
                                                Home Three
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/" class="nav-link">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="/about" class="nav-link">
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="/causes" class="nav-link active">
                                        Causes 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/causes" class="nav-link">
                                                Causes
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-causes.html" class="nav-link">
                                                Single Causes
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Pages 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/about" class="nav-link">
                                                About
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/team" class="nav-link">
                                                Team
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/gallery" class="nav-link">
                                                Gallery
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                Events 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="events.html" class="nav-link">
                                                        Events
                                                    </a>
                                                </li>

                                                <li class="nav-item">
                                                    <a href="single-events.html" class="nav-link">
                                                        Events Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="nav-item">
                                            <a href="faq.html" class="nav-link">
                                                Faq
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="feedback.html" class="nav-link">
                                                Feedback
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                User 
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <a href="log-in.html" class="nav-link">
                                                        Log In
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="sign-up.html" class="nav-link">
                                                        Sign Up
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="recover-password.html" class="nav-link">
                                                        Recover Password
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    
                                        <li class="nav-item">
                                            <a href="error-404.html" class="nav-link">
                                                404 Error
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/contact" class="nav-link">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="/causes" class="nav-link">
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog-1.html" class="nav-link">
                                                Blog Grid
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-2.html" class="nav-link">
                                                Blog Right Sidebar
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="single-blog.html" class="nav-link">
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="/contact" class="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <div class="others-options">
                                <div class="dropdown language-switcher d-inline-block">
                                    <button class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/img/flag/france-flag.jpg" class="shadow" alt="image"/>
                                        <span>Eng <i class='bx bx-chevron-down'></i></span>
                                    </button>

                                    <div class="dropdown-menu">
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/germany-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ger</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/italy-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Fre</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/spain-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Spa</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/russia-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Rus</span>
                                        </a>
                                        <a href="#" class="dropdown-item d-flex align-items-center">
                                            <img src="assets/img/flag/us-flag.jpg" class="shadow-sm" alt="flag"/>
                                            <span>Ita</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="option-item"><i class="search-btn bx bx-search"></i>
                                    <i class="close-btn bx bx-x"></i>
                                    <div class="search-overlay search-popup">
                                        <div class='search-box'>
                                            <form class="search-form">
                                                <input class="search-input" name="search" placeholder="Search" type="text"/>

                                                <button class="search-button" type="submit">
                                                    <i class="bx bx-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="burger-menu">
                                    <i class="flaticon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/*  -- End Navbar Area - */}

        {/*  -- Sidebar Modal - */}
        <div class="sidebar-modal">
          <div class="sidebar-modal-inner">
            <div class="sidebar-about-area">
              <div class="title">
                <h2>About Us</h2>
                <p>{this.ngo.description}</p>
              </div>
            </div>

            <div class="sidebar-instagram-feed">
              <h2>Instagram</h2>
              <ul>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/2.jpg"alt="image" />
                  </a>
                </li>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/5.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/6.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/7.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href={this.ngo.reachOut.instagram}>
                    <img src="assets/img/sidebar/8.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="sidebar-contact-area">
              <div class="contact-info">
                <div class="contact-info-content">
                  <h2>
                    <a href="#">
                      {this.ngo.reachOut.phone1}
                    </a>
                    <span>OR</span>
                    <a href='#'>
                      {this.ngo.reachOut.email}
                    </a>
                  </h2>

                  <ul class="social">
                    <li>
                      <a href={this.ngo.reachOut.facebook} target="_blank">
                        <i class="flaticon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.ngo.reachOut.twitter} target="_blank">
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.ngo.reachOut.instagram} target="_blank">
                        <i class="flaticon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.ngo.reachOut.linkedin} target="_blank">
                        <i class="flaticon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.ngo.reachOut.pinterest} target="_blank">
                        <i class="flaticon-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <span class="close-btn sidebar-modal-close-btn">
              <i class="flaticon-close"></i>
            </span>
          </div>
        </div>
        {/* <!-- End Sidebar Modal -->
        
        <!-- Start Page Title Area --> */}
        <div class="page-title-area" style={{'background-image': img}}> 
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Our Causes</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Our Causes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title Area -->

        <!-- Start Causes Area --> */}
        <section class="causes-section pt-100 pb-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-ribbon"></i>
                        Our Causes
                    </span>
                    <h2>The causes we care about</h2>
                    <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                </div>

                <div class="row">
                {this.ngo.projects.slice(0, 9).map(m => (
                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src={m.photo.url} alt="image"/>
                            <div class="icon">
                                <i class="flaticon-book-1"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Education</span>
                                <h3>{m.name}</h3>
                                <p>{ m.description < 60 ? m.description : m.description.substring(0, 60) + '...' }</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $5,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 60 people within 10 days</p>
                                </div>
                                
                                <a href={m.link} class="causes-btn-one">
                                    Visit
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>))}

                    {/* <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/2.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-laptop"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Donation</span>
                                <h3>Massive donation to poor</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $4,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 40 people within 12 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/3.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-blood-bag"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Helpless</span>
                                <h3>Huge help to homeless pupil</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $1,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $5,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 50people within 20days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/4.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-book-1"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Education</span>
                                <h3>Education for poor child</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $5,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 60 people within 10 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/5.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-laptop"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Donation</span>
                                <h3>Massive donation to poor</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $4,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $8,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 40 people within 12 days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-causes">
                            <img src="assets/img/causes/6.jpg" alt="image"/>
                            <div class="icon">
                                <i class="flaticon-blood-bag"></i>
                            </div>

                            <div class="causes-content">
                                <span>#Helpless</span>
                                <h3>Huge help to homeless pupil</h3>
                                <p>Lorem ipsum dolor sit amet, consecteturad eiustempor incididunlabore</p>

                                <div class="causes-progress-bar">
                                    <div class="causes-progress-content">
                                        <span>Raised: $1,000.00</span>
                                        
                                        <div class="text-right">
                                            <span>Goal: $5,000.00</span>
                                        </div>
                                    </div>
                                    <p>Raised by 50people within 20days</p>
                                </div>
                                
                                <a href="single-causes.html" class="causes-btn-one">
                                    Donate Now
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div> */}

                    {/* <div class="col-lg-12 col-md-12">
                        <div class="pagination-area">
                            <a href="#" class="prev page-numbers">
                                <i class="flaticon-left"></i>
                            </a>
                            <a href="#" class="page-numbers">1</a>
                            <span class="page-numbers current" aria-current="page">2</span>
                            <a href="#" class="page-numbers">3</a>
                            <a href="#" class="page-numbers">4</a>
                            <a href="#" class="next page-numbers">
                                <i class="flaticon-right"></i>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        {/* <!-- End Causes Area -->

        <!-- Start Instagram Area --> */}
        <div class="instagram-area">
            <div class="instagram-slides owl-carousel owl-theme">
                <div class="instagram-box">
                    <img src="assets/img/instagram/1.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href="https://www.instagram.com/" target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/2.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href="https://www.instagram.com/" target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/3.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href="https://www.instagram.com/" target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/4.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href="https://www.instagram.com/" target="_blank"></a>
                </div>

                <div class="instagram-box">
                    <img src="assets/img/instagram/5.jpg" alt="image"/>

                    <div class="icon">
                        <i class="flaticon-instagram"></i>
                    </div>

                    <a href="https://www.instagram.com/" target="_blank"></a>
                </div>
            </div>
        </div>
        {/* <!-- End Instagram Area -->
        
        <!-- Start Footer Area --> */}
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
        {/* <!-- End Footer Area -->

        <!-- Start Go Top Section --> */}
        <ngo-footer></ngo-footer>
        <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
        </div>
    </ion-content>
  
    ];
  }
}
