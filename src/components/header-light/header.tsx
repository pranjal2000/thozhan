import { Component, h, Prop} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-header',
  styleUrl: 'header.css',

})
export class NgoHeader {
 @Prop() ngo                 :   any                 =   ngo;
 componentWillLoad() {
  console.log('NgoHeader :: componentWillLoad');
}

componentDidLoad() {
  console.log('NgoHeader :: componentDidLoad');
}

  
  render() {

    return [
      <span>
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
                        <a class="navbar-brand" href="/">
                            <img src="assets/img/logo-3.png" class="white-logo" alt="logo"/>
                            <img src="assets/img/logo-2.png" class="black-logo" alt="image"/>
                        </a>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="/" class="nav-link">
                                        Home 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                   
                                </li>

                                <li class="nav-item">
                                    <a href="/about" class="nav-link">
                                        About
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="/media" class="nav-link">
                                                Press Coverage
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/team" class="nav-link">
                                                Team
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/legal" class="nav-link">
                                                Legal
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="/projects" class="nav-link">
                                        Projects 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                    {this.ngo.projects.slice(0, 8).map(p => (
                                        <li class="nav-item">
                                            <a class="nav-link" href={`/projects/${p.slug}`}>
                                            { p.name }
                     
                                            </a>
                                        </li>))}
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a href="/donate" class="nav-link">
                                        Donate 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>

                                    {/* <ul class="dropdown-menu">
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
                                    </ul> */}
                                </li>

                                <li class="nav-item">
                                    <a href="/volunteer" class="nav-link">
                                        Volunteer 
                                        {/* <i class='bx bx-chevron-down'></i> */}
                                    </a>
                                    {/* <ul class="dropdown-menu">
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
                                    </ul> */}
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
      </span>
  
    ];
  }
}
