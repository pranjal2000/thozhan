import { Component, h, Prop} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-media',
  styleUrl: 'media.css',

})
export class NgoMedia {
 @Prop() ngo                 :   any                 =   ngo;
 componentWillLoad() {
  console.log('NgoMedia :: componentWillLoad');
}

componentDidLoad() {
  console.log('NgoMedia :: componentDidLoad');
}

  
  render() {
    var img = 'url(' + "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ')';
    return [   
        <ion-content>
            <div class="preloader">
              <div class="preloader">
                <span></span>
                <span></span>
              </div>
            </div>

            <ngo-header></ngo-header>
            <div class="page-title-area"style={{'background-image': img}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Blog</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title Area -->

        <!-- Start Blog Area --> */}
        <section class="blog-section pt-100 pb-100">
            <div class="container">
                <div class="row">
                {this.ngo.media.slice(0, 15).map(m => (
                    <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-blog">
                        <img src={m.photo.url} alt="image"/>

                        <div class="content">
                            <span>{m.publicationName}</span>
                            <h3>
                                <a href={m.link}>
                                { m.name < 60 ? m.name : m.name.substring(0, 22) + '...' }
                                </a>
                            </h3>
                            <a href={m.link} class="blog-btn">Read more +</a>
                        </div>
                    </div>
                </div>
                ))}
                    {/* <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/1.jpg" alt="image"/>

                            <div class="content">
                                <span>Poor, 22 January</span>
                                <h3>
                                    <a href="#">
                                        Poverty not only money it can be food sometimes
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/2.jpg" alt="image"/>

                            <div class="content">
                                <span>Food, 21 December</span>
                                <h3>
                                    <a href="#">
                                        Strawberry-Banana Quinoa Muffins Recipe for poor
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/3.jpg" alt="image"/>

                            <div class="content">
                                <span>Healthy, 21 June</span>
                                <h3>
                                    <a href="#">
                                        The charity can help make a smile of poor people
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/4.jpg" alt="image"/>

                            <div class="content">
                                <span>Poor, 22 January</span>
                                <h3>
                                    <a href="#">
                                        South Korea pre-primary school build for children
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/5.jpg" alt="image"/>

                            <div class="content">
                                <span>Food, 21 December</span>
                                <h3>
                                    <a href="#">
                                        Provide pure water for Filipino poor people
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-blog">
                            <img src="assets/img/blog/6.jpg" alt="image"/>

                            <div class="content">
                                <span>Healthy, 21 June</span>
                                <h3>
                                    <a href="#">
                                        Children’s national festival for learning or play
                                    </a>
                                </h3>
                                <a href="single-blog.html" class="blog-btn">Read more +</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
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

            <ngo-footer></ngo-footer>
        </ion-content>
    ];
  }
}
