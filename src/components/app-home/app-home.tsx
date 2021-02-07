import { Component, h, Prop} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
 @Prop() ngo                 :   any                 =   ngo;
 componentWillLoad() {
  console.log('AppHome :: componentWillLoad');
}

componentDidLoad() {
  console.log('AppHome :: componentDidLoad');
}

  
  render() {

    return [
      <ion-content>
        <div class="preloader">
          <div class="preloader">
            <span></span>
            <span></span>
          </div>
        </div>
        {/* //
        <!-- End Preloader Area --> */}

        {/* //
        <!-- Start Header Area -->
        */}
        
        <div class="header-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="header-content">
                  <p>
                    <a href="/donate">The fund will go to the poor... <span>Donate Now</span></a>
                  </p>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="top-header-social">
                  <span>Follow us:</span>
                  <a href={this.ngo.reachOut.facebook} target="_blank">
                    <i class='flaticon-facebook'></i>
                  </a>

                  <a href={this.ngo.reachOut.twitter} target="_blank">
                    <i class='flaticon-twitter'></i>
                  </a>

                  <a href={this.ngo.reachOut.instagram} target="_blank">
                    <i class='flaticon-instagram'></i>
                  </a>

                  <a href={this.ngo.reachOut.linkedin} target="_blank">
                    <i class='flaticon-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <!-- End Header Area --> */}

        {/*
        <!-- Start Navbar Area --> */}
        <div class="navbar-area fixed-top">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="/">
                                <img src="assets/img/logo.png" class="white-logo" alt="logo"/>
                                <img src="assets/img/logo-2.png" class="black-logo" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="huruma-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <a class="navbar-brand" href="/">
                            <img src="assets/img/logo.png" class="white-logo" alt="logo"/>
                            <img src="assets/img/logo-2.png" class="black-logo" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="/"class="nav-link active">
                                        {/* <span>o1 </span> */}
                                        Home
                                        {/* <i class='bx bx-chevron-down'> </i> */}
                                    </a>
                                    {/* <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="index.html" class="nav-link">
                                                Home One
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-2.html" class="nav-link">
                                                Home Two
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-3.html" class="nav-link">
                                                Home Three
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="index-4.html" class="nav-link active">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>

                                <li class="nav-item">
                                    <a href="/about" class="nav-link">
                                        {/* <span>o2</span> */}
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="/causes" class="nav-link">
                                        {/* <span>o3</span> */}
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
                                        {/* <span>o4</span> */}
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
                                            <a href="gallery.html" class="nav-link">
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
                                    <a href="/media" class="nav-link">
                                        {/* <span>o5</span> */}
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
                                        {/* <span>o6</span> */}
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
                                <span> </span>

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
                                <span> </span>

                                <div class="burger-menu">
                                    <i class="flaticon-menu"></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/*
        <!-- End Navbar Area --> */}

        {/*
        <!-- Sidebar Modal --> */}
        
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
                  <a href="#">
                    <img src="assets/img/sidebar/1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/sidebar/2.jpg"alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/sidebar/3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/sidebar/4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/sidebar/5.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/sidebar/6.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/sidebar/7.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a href="#">
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
        {/*
        <!-- End Sidebar Modal --> */}

        {/*
        <!-- Start Home Banner Three Area --> */}
        <div class="home-banner-three home-banner-four">
          <div class="home-slides-four owl-carousel owl-theme">
            <div class="home-item item-bg-1">
              <div class="d-table">
                <div class="d-table-cell">
                  <div class="container">
                    <div class="main-banner-content main-banner-content-four text-center">
                      <span>{this.ngo.name}</span>
                      <h1>Start where you are Use what you have Do what you can</h1>
                      {/* <p>Our vision: {this.ngo.vision}.</p> */}
                      <p>– Arthur Ashe</p>
                      <div class="banner-btn">
                        <a href="/donate" class="optional-btn">
                          Donate Now
                          <i class="flaticon-right"></i>
                          <span></span>
                        </a>
                        <a class="optional-btn" href="/volunteer">
                          Volunteer
                          <i class="flaticon-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="home-item item-bg-2">
              <div class="d-table">
                <div class="d-table-cell">
                  <div class="container">
                    <div class="main-banner-content main-banner-content-four text-center">
                      <span>{this.ngo.name}</span>
                      <h1>Start where you are Use what you have Do what you can</h1>
                      {/* <p>Our vision: {this.ngo.vision}</p> */}
                      <p>– Arthur Ashe</p>
                      <div class="banner-btn">
                        <a href="/donate" class="optional-btn">
                          Donate Now
                          <i class="flaticon-right"></i>
                          <span></span>
                        </a>
                        <a class="optional-btn" href="/volunteer">
                          Volunteer
                          <i class="flaticon-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="home-item item-bg-3">
              <div class="d-table">
                <div class="d-table-cell">
                  <div class="container">
                    <div class="main-banner-content main-banner-content-four text-center">
                      <span>{this.ngo.name}</span>
                      <h1>Start where you are Use what you have Do what you can </h1>
                      <p> – Arthur Ashe</p>
                      <div class="banner-btn">
                        <a href="/donate" class="optional-btn">
                          Donate Now
                          <i class="flaticon-right"></i>
                          <span></span>
                        </a>
                        <a class="optional-btn" href="/volunteer">
                          Volunteer
                          <i class="flaticon-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <!-- End Home Banner Three Area --> */}

        {/*
        <!-- Start Top Feature Area --> */}
        <section class="feature-section">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6 p-0">
                <div class="feature-card">
                  <div class="icon">
                    <img src="assets/img/icon/1.png" alt="image" />
                    <img src="assets/img/icon/white-1.png" alt="image" />
                  </div>

                  <h3>Join as Volunteer</h3>
                  <p>Think of giving not as a duty but as a privilege.</p>

                  <a href="#" class="feature-btn">
                    Join now +
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6 p-0">
                <div class="feature-card">
                  <div class="icon">
                    <img src="assets/img/icon/2.png" alt="image" />
                    <img src="assets/img/icon/white-2.png" alt="image" />
                  </div>

                  <h3>Donate once</h3>
                  <p>For it is in giving that we receive.</p>

                  <a href="#" class="feature-btn">
                    Give now +
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6 p-0">
                <div class="feature-card">
                  <div class="icon">
                    <img src="assets/img/icon/3.png" alt="image" />
                    <img src="assets/img/icon/white-3.png" alt="image" />
                  </div>

                  <h3>Becoming a Champion, Monthly donation</h3>
                  <p>No one has ever become poor by giving.</p>

                  <a href="#" class="feature-btn">
                    Donate now +
                  </a>
                </div>
              </div>

              {/* <div class="col-lg-3 col-md-6 col-sm-6 p-0">
                <div class="feature-card">
                  <div class="icon">
                    <img src="assets/img/icon/4.png" alt="image" />
                    <img src="assets/img/icon/white-4.png" alt="image" />
                  </div>

                  <h3>Join as a member</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididun labore
                    voluptatem accusantium.</p>

                  <a href="#" class="feature-btn">
                    Be Member +
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/*
        <!-- End Top Feature Area --> */}

        {/*
        <!-- Start About Area --> */}
        <section class="about-section pt-70 pb-100">
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
        {/*
        <!-- End About Area --> */}

        {/*
        <!-- Start Fun Facts Area --> */}
        <section class="fun-facts-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                  <p>Beneficiaries</p>
                  <h3>
                    <span class="sign-icon dolor">$</span>
                    <span class="odometer" data-count="500">00</span>
                    <span class="sign-icon">M</span>
                  </h3>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                  <p>Happy Donators</p>
                  <h3>
                    <span class="odometer" data-count="458">00</span>
                    <span class="sign-icon">+</span>
                  </h3>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                  <p>Volunteer</p>
                  <h3>
                    <span class="odometer" data-count="45">00</span>
                    <span class="sign-icon">+</span>
                  </h3>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-fun-fact">
                  <p>Donated Poor</p>
                  <h3>
                    <span class="odometer" data-count="20">00</span>
                    <span class="sign-icon">K</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <!-- End Fun Facts Area --> */}

        {/*
        <!-- Start Causes Area -->/ */}
        <section class="causes-section pt-100 pb-70">
          <div class="container">
            <div class="section-title">
              <span>
                <i class="flaticon-ribbon"></i>
                Our Projects
              </span>
              <h2>Our Projects</h2>
              {/* <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Quis ipsum suspendices gravida.</p> */}
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-causes">
                  <img src="assets/img/causes/1.jpg" alt="image" />
                  <div class="icon">
                    <i class="flaticon-book-1"></i>
                  </div>

                  <div class="causes-content">
                    <span>#Education</span>
                    <h3>{this.ngo.projects[0].name}</h3>
                    <p>{ this.ngo.projects[0].description < 60 ? this.ngo.projects[0].description : this.ngo.projects[0].description.substring(0, 100) + '...' }</p>
                    <p></p>

                    {/* <div class="causes-progress-bar">
                      <div class="causes-progress-content">
                        <span>Raised: $5,000.00</span>

                        <div class="text-right">
                          <span>Goal: $8,000.00</span>
                        </div>
                      </div>
                      <p>Raised by 60 people within 10 days</p>
                    </div> */}

                    <a href={this.ngo.projects[0].link} class="causes-btn-one">
                      Donate Now
                      <i class="flaticon-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-causes">
                  <img src="assets/img/causes/2.jpg" alt="image" />
                  <div class="icon">
                    <i class="flaticon-laptop"></i>
                  </div>

                  <div class="causes-content">
                    <span>#Donation</span>
                    <h3>{this.ngo.projects[1].name}</h3>
                    <p>{ this.ngo.projects[1].description < 60 ? this.ngo.projects[1].description : this.ngo.projects[1].description.substring(0, 100) + '...' }</p>
                    <p></p>

                    {/* <div class="causes-progress-bar">
                      <div class="causes-progress-content">
                        <span>Raised: $4,000.00</span>

                        <div class="text-right">
                          <span>Goal: $8,000.00</span>
                        </div>
                      </div>
                      <p>Raised by 40 people within 12 days</p>
                    </div> */}

                    <a href={this.ngo.projects[1].link} class="causes-btn-one">
                      Donate Now
                      <i class="flaticon-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                <div class="single-causes">
                  <img src="assets/img/causes/3.jpg" alt="image" />
                  <div class="icon">
                    <i class="flaticon-blood-bag"></i>
                  </div>

                  <div class="causes-content">
                    <span>#Helpless</span>
                    <h3>{this.ngo.projects[3].name}</h3>
                    <p>{ this.ngo.projects[3].description < 60 ? this.ngo.projects[3].description : this.ngo.projects[3].description.substring(0, 100) + '...' }</p>
                    <p></p>
{/* 
                    <div class="causes-progress-bar">
                      <div class="causes-progress-content">
                        <span>Raised: $1,000.00</span>

                        <div class="text-right">
                          <span>Goal: $5,000.00</span>
                        </div>
                      </div>
                      <p>Raised by 50people within 20days</p>
                    </div> */}

                    <a href={this.ngo.projects[3].link} class="causes-btn-one">
                      Donate Now
                      <i class="flaticon-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/causes" class="causes-btn-one">
                      <h4>See More <i class="flaticon-right"></i></h4>
                      {/* <i class="flaticon-right"></i> */}
                    </a>
          </div>
        </section>
        {/*
        <!-- End Causes Area --> */}

        {/*
        <!-- Start Donor Area --> */}
        <section class="donor-section pt-100 pb-70">
          <div class="container">
            <div class="section-title">
              <h2>Why volunteer here?</h2>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="donor-item">
                  <div class="icon">
                    <i class="flaticon-support"></i>
                  </div>
                  <h3>{this.ngo.whyVolunteerHere[2].text}</h3>
                  {/* <p>Lorem ipsum dolor siamet ecteturadipisicing</p> */}
                  {/* <a href="#" class="donor-btn">Give Requist +</a> */}
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="donor-item">
                  <div class="icon">
                    <i class="flaticon-confirmation"></i>
                  </div>
                  <h3>{this.ngo.whyVolunteerHere[1].text}</h3>
                  {/* <p>Dolor Lorem ipsumsiamet ecteturadipisicin</p> */}
                  {/* <a href="#" class="donor-btn">Get Reaction +</a> */}
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-md-6 offset-md-3 offset-lg-0">
                <div class="donor-item">
                  <div class="icon">
                    <i class="flaticon-enjoy"></i>
                  </div>
                  <h3>{this.ngo.whyVolunteerHere[0].text}</h3>
                  {/* <p>Lorem ipsum dolor siamet ecteturadipisicing</p> */}
                  {/* <a href="#" class="donor-btn">Enjoy Now +</a> */}
                </div>
              </div>
            </div>
          </div>

          <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </section>
        {/*
        <!-- End Donor Area --> */}

        {/*
        <!-- Start Solve Area --> */}
        <section class="solve-section pt-100 pb-70">
          <div class="container">
            <div class="section-title">
              <span>
                <i class="flaticon-to-do-list"></i>
                What do we care about
              </span>
              <h2>Our Causes</h2>
              <p>When learning is purposeful, creativity blossoms. When creativity blossoms, thinking emanates. When thinking emanates, knowledge is fully lit. When knowledge is lit, economy flourishes.</p>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="solve-item">
                  <div class="icon">
                    <img src={this.ngo.sdg[0].photo.url} alt="image" />
                  </div>
                  <h3>{this.ngo.sdg[0].name}</h3>
                  <p>{ this.ngo.sdg[0].description < 60 ? this.ngo.sdg[0].description : this.ngo.sdg[0].description.substring(0, 60) + '...' }</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="solve-item">
                  <div class="icon">
                    <img src={this.ngo.sdg[1].photo.url} alt="image" />
                  </div>
                  <h3>{this.ngo.sdg[1].name}</h3>
                  <p>{ this.ngo.sdg[1].description < 60 ? this.ngo.sdg[1].description : this.ngo.sdg[1].description.substring(0, 60) + '...' }</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="solve-item">
                  <div class="icon">
                    <img src={this.ngo.sdg[2].photo.url} alt="image" />
                  </div>
                  <h3>{this.ngo.sdg[2].name}</h3>
                  <p>{ this.ngo.sdg[2].description < 60 ? this.ngo.sdg[2].description : this.ngo.sdg[2].description.substring(0, 60) + '...' }</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="solve-item">
                  <div class="icon">
                    <img src={this.ngo.sdg[3].photo.url} alt="image" />
                  </div>
                  <h3>{this.ngo.sdg[3].name}</h3>
                  <p>{ this.ngo.sdg[3].description < 60 ? this.ngo.sdg[3].description : this.ngo.sdg[3].description.substring(0, 60) + '...' }</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <!-- End Solve Area --> */}

        {/*
        <!-- Start Mission Area --> */}
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
                        {/* <a class="default-btn" href="#">
                          Our Mission
                          <span></span>
                          <i class="flaticon-right"></i>
                        </a> */}
                      </div>

                      <div class="tabs_item">
                        {/* <p>Magna hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ex ea </p> */}

                        <p>{this.ngo.vision}</p>
                        {/* <a class="default-btn" href="#">
                          Our Mission
                          <span></span>
                          <i class="flaticon-right"></i>
                        </a> */}
                      </div>

                      <div class="tabs_item">
                        <p>{this.ngo.whyHelpMatters[0].text}</p>
                        <p>{this.ngo.whyHelpMatters[1].text}</p>
                        <p>{this.ngo.whyHelpMatters[2].text}</p>

                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur
                          dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi
                          quasi cumque placeat fuga. Ea, eius?</p> */}
                        {/* <a class="default-btn" href="#">
                          Our Mission
                          <span></span>
                          <i class="flaticon-right"></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <!-- End Mission Area -->/ */}

        {/*
        <!-- Start Team Area --> */}
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
                    <p>Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                  </div>
                </div>

                <div class="col-lg-5">
                  <div class="team-btn text-right">
                    <a href="/team" class="optional-btn">
                      Meet Our Team
                      <i class="flaticon-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
            {/* { this.ngo.team.length > 0 ? */}
               {/* <div class="col-lg-3 col-sm-6"> */}
                {this.ngo.team.slice(0, 8).map(m => (
                  <div class="col-lg-3 col-sm-6">
                <div class="single-team-member">
                  <div class="team-image">
                    <img src={m.photo.url} alt="image" />
                  </div>
                  
                  <ul class="social-btn">
                  { m.reachOut.facebook.length !== 0 ?
                      <li>

                      <a href={m.reachOut.facebook}>
                        <i class="flaticon-facebook"></i>
                      </a>
                      
                    </li>

                      : null }
                      <span> </span>
                  { m.reachOut.twitter.length !== 0 ?
                      <li>

                      <a href={m.reachOut.twitter}>
                        <i class="flaticon-twitter"></i>
                      </a>
                      
                    </li>

                      : null }
                    <span> </span>
                  { m.reachOut.instagram.length !== 0 ?
                      <li>

                      <a href={m.reachOut.instagram}>
                        <i class="flaticon-instagram"></i>
                      </a>

                    </li>

                      : null }   
                      <span> </span>  
 
                  </ul>

                  <div class="member-content">
                    <h3>{ m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...'}</h3>
                    <span>{ m.role.length < 60 ? m.role : m.role.substring(0, 60) + '...' }</span>
                  </div>

                  <div class="team-icon">
                    <i class="flaticon-plus"> </i>
                  </div>
                </div>
                </div>
                ))}
              {/* // </div> : null}  */}

              {/* <div class="col-lg-3 col-sm-6">
                <div class="single-team-member">
                  <div class="team-image">
                    <img src="assets/img/team/8.png" alt="image" />
                  </div>

                  <ul class="social-btn">
                    <li>
                      <a href="#">
                        <i class="flaticon-facebook"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i class="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>

                  <div class="member-content">
                    <h3>Smith Jhon</h3>
                    <span>Manager</span>
                  </div>

                  <div class="team-icon">
                    <i class="flaticon-plus"></i>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                <div class="single-team-member">
                  <div class="team-image">
                    <img src="assets/img/team/9.png" alt="image" />
                  </div>

                  <ul class="social-btn">
                    <li>
                      <a href="#">
                        <i class="flaticon-facebook"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i class="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>

                  <div class="member-content">
                    <h3>Ched Kurtsovski</h3>
                    <span>Volunteer</span>
                  </div>

                  <div class="team-icon">
                    <i class="flaticon-plus"></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="single-team-member">
                  <div class="team-image">
                    <img src="assets/img/team/10.png" alt="image" />
                  </div>

                  <ul class="social-btn">
                    <li>
                      <a href="#">
                        <i class="flaticon-facebook"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i class="flaticon-instagram"></i>
                      </a>
                    </li>
                  </ul>

                  <div class="member-content">
                    <h3>Ched Kurtsovski</h3>
                    <span>Volunteer</span>
                  </div>

                  <div class="team-icon">
                    <i class="flaticon-plus"></i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/*
        <!-- End Team Area --> */}

        {/*
        <!-- Start Events Area --> */}
        <section class="event-section pt-100">
          <div class="container">
            <div class="section-title">
              <span>
                <i class="flaticon-clipboard"></i>
                Upcoming Events
              </span>
              <h2>Be ready for Our Events</h2>
              <p>Event makes suspendice adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendices gravida.</p>
            </div>

            <div class="event-slider owl-carousel owl-theme">
              <div class="event-item">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="event-time">
                      <h3>0-130</h3>
                      <span>5 December 2020</span>

                      <div class="icon">
                        <i class="flaticon-clock"></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-8">
                    <div class="event-content">
                      <h4>Huruma Con Donation 2020</h4>

                      <ul class="event-meta">
                        <li>
                          <i class="flaticon-clock"></i>
                          8:00 - 10:00
                        </li>

                        <li>
                          <i class="flaticon-pin"></i>
                          Newyork City
                        </li>
                      </ul>
                      <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                      <a href="single-events.html" class="event-btn-one">Join Now +</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="event-item">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="event-time">
                      <h3>0-140</h3>
                      <span>10 January 2021</span>

                      <div class="icon">
                        <i class="flaticon-clock"></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-8">
                    <div class="event-content">
                      <h4>Poor funding for helpless</h4>

                      <ul class="event-meta">
                        <li>
                          <i class="flaticon-clock"></i>
                          9:00 - 12:00
                        </li>

                        <li>
                          <i class="flaticon-pin"></i>
                          Calfornia City
                        </li>
                      </ul>
                      <p>Suspendice quis ipsum consectetucaquuis ipsums gravida.</p>
                      <a href="single-events.html" class="event-btn-one">Join Now +</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="event-item">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="event-time">
                      <h3>0-130</h3>
                      <span>5 December 2020</span>

                      <div class="icon">
                        <i class="flaticon-clock"></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-8">
                    <div class="event-content">
                      <h4>Huruma Con Donation 2020</h4>

                      <ul class="event-meta">
                        <li>
                          <i class="flaticon-clock"></i>
                          8:00 - 10:00
                        </li>

                        <li>
                          <i class="flaticon-pin"></i>
                          Newyork City
                        </li>
                      </ul>
                      <p>Dona ques suspendice consectetucaquuis ipsums gravida.</p>
                      <a href="single-events.html" class="event-btn-one">Join Now +</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="event-item">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="event-time">
                      <h3>0-140</h3>
                      <span>10 January 2021</span>

                      <div class="icon">
                        <i class="flaticon-clock"></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-8">
                    <div class="event-content">
                      <h4>Poor funding for helpless</h4>

                      <ul class="event-meta">
                        <li>
                          <i class="flaticon-clock"></i>
                          9:00 - 12:00
                        </li>

                        <li>
                          <i class="flaticon-pin"></i>
                          Calfornia City
                        </li>
                      </ul>
                      <p>Suspendice quis ipsum consectetucaquuis ipsums gravida.</p>
                      <a href="single-events.html" class="event-btn-one">Join Now +</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <!-- End Events Area --> */}

        {/*
        <!-- Start Testimonials Area --> */}
        <section class="testimonials-section pt-140 pb-100">
          <div class="container">
            <div class="section-title">
              <span>
                <i class="flaticon-testimonial"></i>
                Testimonials
              </span>
              <h2>Don’t Believe Us? See review</h2>
            </div>
            <div class="testimonials-slider owl-carousel owl-theme">
              <div class="testimonials-item">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="testimonials-info">
                      <img src={this.ngo.review[2].volunteer.photo.url} alt="image" />
                      <h3>{this.ngo.review[2].volunteer.name}</h3>
                      <span>{this.ngo.review[2].ngo.name}<b></b></span>
                      <ul class="social-info">
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <h3>Precious Journey With You”</h3>
                    <p>{this.ngo.review[2].feedback}</p>
                  </div>
                </div>
              </div>
              <div class="testimonials-item">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="testimonials-info">
                      <img src={this.ngo.review[1].volunteer.photo.url} alt="image" />
                      <h3>{this.ngo.review[1].volunteer.name}</h3>
                      <span>{this.ngo.review[1].ngo.name}<b></b></span>
                      <ul class="social-info">
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                        <li>
                          <i class='bx bxs-star'></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <h3>Precious Journey With You”</h3>
                    <p>{this.ngo.review[1].feedback}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonials-shape">
            <img src="assets/img/testimonials/shape.png" alt="image" />
          </div>
        </section>
        {/*
        <!-- End Testimonials Area --> */}

        {/*
        <!-- Start Donate Area --> */}
        <section class="donate-section ptb-100">
          <div class="container">
            <div class="section-title">
              <h2>Want you know How Can Help?</h2>
              <p>Toiken ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntlabore et
                dolore magna aliqua. Ut enim ad minim.</p>
              <a href="/donate" class="donate-btn">
                Donate Now
                <i class="flaticon-right"></i>
              </a>
            </div>
          </div>

          <div class="default-shape">
            <img src="assets/img/donate/1.png" alt="image" />
            <img src="assets/img/donate/2.png" alt="image" />
          </div>
        </section>
        {/*
        <!-- End Donate Area --> */}

        {/*
        <!-- Start Blog Area --> */}
        <section class="blog-section pt-100 pb-70">
          <div class="container">
            <div class="section-title">
              <span>
                <i class="flaticon-book"></i>
                Media Coverage
              </span>
              <h2>Check Out Our Latest News</h2>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-blog">
                  <img src={this.ngo.media[0].photo.url} alt="image" />

                  <div class="content">
                    <a href="#">
                      <i class='bx bx-user'></i>
                    </a>
                    <span>{this.ngo.media[0].publicationName}</span>
                    <h3>
                      <a href="#">
                      {this.ngo.media[0].name}
                      </a>
                    </h3>
                    <a href="single-blog.html" class="blog-btn">Read more +</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-blog">
                  <img src={this.ngo.media[1].photo.url} alt="image" />

                  <div class="content">
                    <a href="#">
                      <i class='bx bx-user'></i>
                    </a>
                    <span>{this.ngo.media[1].publicationName}</span>
                    <h3>
                      <a href="#">
                        {this.ngo.media[1].name}
                      </a>
                    </h3>
                    <a href="single-blog.html" class="blog-btn">Read more +</a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                <div class="single-blog">
                  <img src={this.ngo.media[2].photo.url} alt="image" />

                  <div class="content">
                    <a href="#">
                      <i class='bx bx-user'></i>
                    </a>
                    <span>{this.ngo.media[2].publicationName}</span>
                    <h3>
                      <a href="#">
                      {this.ngo.media[2].name}
                      </a>
                    </h3>
                    <a href="single-blog.html" class="blog-btn">Read more +</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <!-- End Blog Area --> */}

        {/*
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
                      <img src={this.ngo.media[0].photo.url}alt="image" />
                      <span>{this.ngo.media[0].publicationName}</span>
                      <h4>{this.ngo.media[0].name}</h4>
                      
                      
                    </a>
                  </div>

                  <div class="footer-news">
                    <a href="single-blog.html">
                      <img src={this.ngo.media[1].photo.url} alt="image" />
                      <span>{this.ngo.media[1].publicationName}</span>
                      <h4>{this.ngo.media[1].name}</h4>
                    </a>
                    <br/>
                    <h4 class ="footer-info-contact">
                    <a href="/media">
                     See More
                    </a>
                    </h4>
                    
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
        {/*
        <!-- End Footer Area --> */}

        {/*
        <!-- Start Go Top Section --> */}
        <div class="go-top">
          <i class="bx bx-chevron-up"></i>
          <i class="bx bx-chevron-up"></i>
        </div>
        <ngo-footer></ngo-footer>
        {/*
        <!-- End Go Top Section --> */}
        </ion-content>
  
    ];
  }
}
