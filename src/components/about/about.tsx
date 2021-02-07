import { Component, h, Prop} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-about',
  styleUrl: 'about.css',
})
export class NgoAbout {
 @Prop() ngo                 :   any                 =   ngo;
 componentWillLoad() {
  console.log('NgoAbout :: componentWillLoad');
}

componentDidLoad() {
  console.log('NgoAbout :: componentDidLoad');
}

    render() {
        var img = 'url(' + this.ngo.photos[1] + ')';
        return (
        <ion-content>
          <div class="preloader">
            <div class="preloader">
                <span></span>
                <span></span>
            </div>
        </div>
        {/*  -- End Header Area - */}

        {/*  -- Start Navbar Area - */}
        <ngo-header></ngo-header>
        {/* <div class="navbar-area  navbar-style-three">
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
                                    <a href="/about" class="nav-link active">
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="/causes" class="nav-link">
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
        </div> */}
        {/*  -- End Sidebar Modal - */}
        
        {/*  -- Start Page Title Area - */}
        <div class="page-title-area" style={{'background-image': img}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>About</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  -- End Page Title Area - */}

        {/*  -- Start About Area - */}
        <section class="about-section pt-70 pb-100" >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="about-item">
                  <span>
                    <i class="flaticon-care-about-plants"></i>
                    About us
                  </span>
                  <h3>The Organization focused on building People</h3>
                  <p class="main-color">
                  {this.ngo.mission}
                  </p>
                  <p>{this.ngo.description} </p>

                  <div class="about-btn">
                    <a href="#" class="default-btn">
                      Donate Now
                      <i class="flaticon-right"></i>
                      <span></span>
                    </a>
                    <a class="optional-btn" href="/about">
                      More about us
                      <i class="flaticon-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="about-image about-four">
                  <img src="assets/img/about/1.jpg" class="shadow" alt="image" />
                  <img src="assets/img/about/2.jpg" class="shadow ab1" alt="image" />
                </div>

                <div class="about-video">
                  <a href={this.ngo.video.url} class="video-btn popup-youtube">
                    <i class="bx bx-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  -- End About Area - */}

        {/*  -- Start Mission Area - */}
        <section class="mission-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 p-0">
                <div class="mission-image">
                  <img src="assets/img/mission.png" alt="image" />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mission-tab">
                  <span>
                    <i class="flaticon-target"></i>
                    Our Mission
                  </span>
                  <h2>Concern about Our Mission</h2>
                  <div class="tab mission-list-tab">
                    <ul class="tabs">
                      <li>
                        <a href="#">
                          Our Mission
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Our Vision
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Why your help matters?
                        </a>
                      </li>
                    </ul>

                    <div class="tab_content">
                      <div class="tabs_item">
                        {/* <p>Magna hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ex ea </p> */}

                        <p>{this.ngo.mission}</p>
                        <a class="default-btn" href="#">
                          Our Mission
                          <span></span>
                          <i class="flaticon-right"></i>
                        </a>
                      </div>

                      <div class="tabs_item">
                        {/* <p>Magna hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ex ea </p> */}

                        <p>{this.ngo.vision}</p>
                        <a class="default-btn" href="#">
                          Our Mission
                          <span></span>
                          <i class="flaticon-right"></i>
                        </a>
                      </div>

                      <div class="tabs_item">
                        <p>{this.ngo.whyHelpMatters[0].text}</p>
                        <p>{this.ngo.whyHelpMatters[1].text}</p>
                        <p>{this.ngo.whyHelpMatters[2].text}</p>

                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur
                          dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi
                          quasi cumque placeat fuga. Ea, eius?</p> */}
                        <a class="default-btn" href="#">
                          Our Mission
                          <span></span>
                          <i class="flaticon-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  -- End Mission Area - */}  

        {/*  -- Start Team Area - */}
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
                                <h2>Talented Team behind Huruma</h2>
                                <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                            </div>
                        </div>

                        <div class="col-lg-5">
                            <div class="team-btn text-right">
                                <a href="#" class="optional-btn">
                                    Meet Our Team
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
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
                    </div>))}

                    {/* <div class="col-lg-4 col-md-6 col-sm-6">
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
                    </div> */}
                </div>
            </div>
        </section>
        {/*  -- End Team Area - */}

        {/*  -- Start Testimonials Area - */}
        <section class="testimonials-section pb-100">
            <div class="container">
                <div class="section-title">
                    <span>
                        <i class="flaticon-testimonial"></i>
                        Testimonials
                    </span>
                    <h2>Don’t Believe Us? See review</h2>
                </div>

                <div class="feedback-slider owl-carousel owl-theme">
                    <div class="feedback-item">
                        <div class="content">
                            <h3>It’s just amazed us to be with you”</h3>
                            <p>{this.ngo.review[2].feedback}</p>

                            <div class="info">
                                <img src={this.ngo.review[2].volunteer.photo.url} alt="image"/>
                                <h4>{this.ngo.review[2].volunteer.name}</h4>
                                <span>{this.ngo.review[2].ngo.name}</span>
                            </div>
                        </div>
                    </div>

                    <div class="feedback-item">
                        <div class="content">
                            <h3>Precious Journey with you”</h3>
                            <p>{this.ngo.review[1].feedback}</p>

                            <div class="info">
                                <img src={this.ngo.review[1].volunteer.photo.url} alt="image"/>
                                <h4>{this.ngo.review[1].volunteer.name}</h4>
                                <span>{this.ngo.review[1].ngo.name}</span>
                            </div>
                        </div>
                    </div>

                    <div class="feedback-item">
                        <div class="content">
                            <h3>It’s just amazed us to be with you”</h3>
                            <p>{this.ngo.review[0].feedback}</p>

                            <div class="info">
                                <img src={this.ngo.review[0].volunteer.photo.url} alt="image"/>
                                <h4>{this.ngo.review[0].volunteer.name}</h4>
                                <span>{this.ngo.review[0].ngo.name}</span>
                            </div>
                        </div>
                    </div>

                    <div class="feedback-item">
                        <div class="content">
                            <h3>Precious Journey with you”</h3>
                            <p>{this.ngo.review[3].feedback}</p>

                            <div class="info">
                                <img src={this.ngo.review[3].volunteer.photo.url}  alt="image"/>
                                <h4>{this.ngo.review[3].volunteer.name}</h4>
                                <span>{this.ngo.review[3].ngo.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  -- End Testimonials Area - */}

        {/* -- Start Instagram Area - */}
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
        {/* -- End Instagram Area - */}
        
        {/* -- Start Footer Area - */}
        <ngo-footer></ngo-footer>
        {/* -- End Footer Area - */}

        {/* -- Start Go Top Section - */}
        <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
        </div>

        </ion-content>

);

    }

}
