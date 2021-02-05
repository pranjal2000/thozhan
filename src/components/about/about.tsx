import { Component, h, Prop }   from    '@stencil/core';
//import * as ngo                 from    '../../../assets/data/ngo.json';

@Component({
    tag                         :   'ngo-about',
    styleUrl                    :   'about.css',
})
export class CharityAbout {

    //@Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About :: Constructor');
    }

    async componentWillLoad() {
        console.log('About :: Component will load');
    }

    async componentDidLoad() {
        console.log('About :: Component did load');
    }


    render() {

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
        <div class="navbar-area  navbar-style-three">
            <div class="huruma-responsive-nav">
                <div class="container">
                    <div class="huruma-responsive-menu">
                        <div class="logo">
                            <a href="index.html">
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
                                    <a href="#" class="nav-link">
                                        Home 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
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
                                            <a href="index-4.html" class="nav-link">
                                                Home Four
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="about.html" class="nav-link active">
                                        About
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Causes 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="causes.html" class="nav-link">
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
                                            <a href="about.html" class="nav-link">
                                                About
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="team.html" class="nav-link">
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
                                            <a href="contact.html" class="nav-link">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">
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
                                    <a href="contact.html" class="nav-link">
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
                        <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                    </div>
                </div>

                <div class="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li>
							<a href="#">
								<img src="assets/img/sidebar/1.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/2.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/3.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/4.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/5.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/6.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/7.jpg" alt="image"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="assets/img/sidebar/8.jpg" alt="image"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href="tel:+0881306298615">
                                    +088 130 629 8615
                                </a>
                                <span>OR</span>
                                <a href="mailto:huruma@gmail.com">
                                    huruma@gmail.com
                                </a>
                            </h2>
    
                            <ul class="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
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
        {/*  -- End Sidebar Modal - */}
        
        {/*  -- Start Page Title Area - */}
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>About</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*  -- End Page Title Area - */}

        {/*  -- Start About Area - */}
        <section class="about-section about-page pt-100 pb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-item">
                            <span>
                                <i class="flaticon-care-about-plants"></i>
                                About us
                            </span>
                            <h3>An international independent Charity organization</h3>
                            <p class="main-color">
                                Your support will help us to make life better living for poor vulnerable children  consectetur adipisicing elit, sed do
                            </p>
                            <p>Konin wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="about-image">
                            <img src="assets/img/about/1.jpg" class="shadow about-page-img" alt="image"/>
                            <img src="assets/img/about/2.jpg" class="shadow" alt="image"/>
                        </div>

                        <div class="about-video">
                            <a href="https://www.youtube.com/watch?v=uemObN8_dcw" class="video-btn popup-youtube">
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
                            <img src="assets/img/mission.png" alt="image"/>
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
											Our Goal
										</a>
									</li>
                                </ul>
                                
								<div class="tab_content">
									<div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea </p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    <div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea </p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
										<a class="default-btn" href="#">
                                            Our Mission
                                            <span></span>
                                            <i class="flaticon-right"></i>
										</a>
                                    </div>

                                    <div class="tabs_item">
										<p>Magna  hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea </p>

										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur dolorum sequi quisquam ullam in pariatur nihil dolorem cumque excepturi totam. Qui excepturi quasi cumque placeat fuga. Ea, eius?</p>
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
                    <div class="col-lg-4 col-md-6 col-sm-6">
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
                            <p>Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.</p>

                            <div class="info">
                                <img src="assets/img/client/1.jpg" alt="image"/>
                                <h4>Morgan Ando</h4>
                                <span>Ustino Charity Canada</span>
                            </div>
                        </div>
                    </div>

                    <div class="feedback-item">
                        <div class="content">
                            <h3>Precious Journey with you”</h3>
                            <p>Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.</p>

                            <div class="info">
                                <img src="assets/img/client/2.jpg" alt="image"/>
                                <h4>Juhan Luis</h4>
                                <span>Charity Bingo UK</span>
                            </div>
                        </div>
                    </div>

                    <div class="feedback-item">
                        <div class="content">
                            <h3>It’s just amazed us to be with you”</h3>
                            <p>Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.</p>

                            <div class="info">
                                <img src="assets/img/client/1.jpg" alt="image"/>
                                <h4>Morgan Ando</h4>
                                <span>Ustino Charity Canada</span>
                            </div>
                        </div>
                    </div>

                    <div class="feedback-item">
                        <div class="content">
                            <h3>Precious Journey with you”</h3>
                            <p>Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.</p>

                            <div class="info">
                                <img src="assets/img/client/2.jpg" alt="image"/>
                                <h4>Juhan Luis</h4>
                                <span>Charity Bingo UK</span>
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
        {/* -- End Instagram Area - */}
        
        {/* -- Start Footer Area - */}
        <footer class="footer-section pt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Contact info</h3>

                            <div class="footer-info-contact">
                                <i class="flaticon-pin"></i>
                                <h3>Location</h3>
                                <span>205 Fida Walinton, Tongo<br/> New York, Canada</span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-call"></i>
                                <h3>Call Us</h3>
                                <span><a href="tel:+882-569-756">987-0986-0987</a></span>
                            </div>

                            <div class="footer-info-contact">
                                <i class="flaticon-email"></i>
                                <h3>Email Us</h3>
                                <span>
                                    <a href="mailto:hello@huruma.com">
                                        support@huruma.com
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
                                    <a href="#">
                                        Donate Now
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Become a Volunteer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
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
                                    <a href="#">
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
                                    <img src="assets/img/footer-news/1.jpg" alt="image"/>
                                    <h4>Support about poverty to poor family</h4>
                                    <span>Poor, 22 January</span>
                               </a>
                            </div>

                            <div class="footer-news">
                               <a href="single-blog.html">
                                    <img src="assets/img/footer-news/2.jpg" alt="image"/>
                                    <h4>Mostly suffered school Boys care</h4>
                                    <span>Health, 24 February</span>
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
                                    <img src="assets/img/white-logo.png" alt="image"/>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <p>
                                    <i class="far fa-copyright"></i> 
                                    2020 Huruma. All Rights Reserved by
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
        </footer>
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
