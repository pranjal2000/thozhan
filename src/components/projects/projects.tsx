import { Component, h, Prop} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-projects',
  styleUrl: 'projects.css',
})
export class NgoProjects {
 @Prop() ngo                 :   any                 =   ngo;
 componentWillLoad() {
  console.log('NgoProjects :: componentWillLoad');
}

componentDidLoad() {
  console.log('NgoProjects :: componentDidLoad');
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
        <ngo-header></ngo-header>
        {/* <!-- End Header Area -->

        <!-- Start Navbar Area --> */}
        
        {/* <!-- End Sidebar Modal -->
        
        <!-- Start Page Title Area --> */}
        <div class="page-title-area" style={{'background-image': img}}> 
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Our Projects</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Our Projects</li>
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
                        Our Projects
                    </span>
                    <h2>The causes we care about</h2>
                    <p>Remember that the happiest people are not those getting more, but those giving more</p>
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
                                {/* <span>#Education</span> */}
                                <h3>{m.name}</h3>
                                <p>{ m.description < 60 ? m.description : m.description.substring(0, 100) + '...' }</p>
                                
                                <a href={m.link} class="causes-btn-one">
                                <ion-router-link  href={`/projects/${m.id}`} > Visit </ion-router-link>
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>))}

                    
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
       

        <ngo-footer></ngo-footer>
        <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
        </div>
    </ion-content>
  
    ];
  }
}
