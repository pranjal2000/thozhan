import { Component, h, Prop} from '@stencil/core';
// import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-projects-detail',
  styleUrl: 'detail.css',

})
export class NgoProjectsDetail {
 @Prop() project                 :   any                 =   {};
 @Prop() projectSlug : string;
 componentWillLoad() {
  console.log('NgoProjectsDetail :: componentWillLoad');
}

componentDidLoad() {
  console.log('NgoProjectsDetail :: componentDidLoad');
}

  
  render() {

    return [
		<ion-contect>
		<div class="preloader">
          <div class="preloader">
            <span></span>
            <span></span>
          </div>
        </div>
			<ngo-header></ngo-header>
			<div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>{this.project.name}</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Project Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title Area -->

        <!-- Start Causes Details Area --> */}
        <section class="causes-details-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="causes-details-desc">
                            <div class="causes-details-image">
                                <img src={this.project.photo.url} alt="image"/>
                            </div>

                            <div class="causes-details-text">
                                <div class="progress pink">
                                    <div class="progress-bar">
                                        <div class="progress-value" style={{"width": "50%;"}}>50%</div>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <span>Raised:</span> 
                                        $5000.00
                                    </li>
                                    <li class="left-site">
                                        <span>Goal:</span> 
                                        $8000.00
                                    </li>
                                </ul>
                                <h3>Education for Poor Children</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, accusantium cupiditate exercitationem quaerat dolorum architecto fugiat suscipit praesentium iusto? Fuga cupiditate laboriosam fugiat in, maiores a quidem labore autem accusantium! lore</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia cupiditate nihil ipsam atque! Autem dolores id ducimus, ipsum magnam at quidem praesentium possimus harum quas, facere explicabo impedit atque doloremque.</p>
                            </div>

                            <div class="causes-details-meta">
								<div class="entry-meta">
									<ul>
										<li>
                                            <span>Posted On:</span> 
                                            <a href="#">September 31, 2020</a>
                                        </li>
									</ul>
								</div>

								<h3>Raise Fund For Healthy Food</h3>

								<p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur.</p>

								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.</p>
								
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.</p>
                            </div>
                            
                            <div class="causes-details-payment">
								<div class="payment-method">
									<h3>Select Payment Method</h3>
									<p>
										<input type="radio" id="paypal" name="radio-group"/>
										<label htmlfor="paypal">PayPal</label>
									</p>
									<p>
										<input type="radio" id="credit" name="radio-group"/>
										<label htmlfor="credit">Credit Card</label>
									</p>
									<p>
										<input type="radio" id="debit" name="radio-group"/>
										<label htmlfor="debit">Debit Card</label>
									</p>
									<p>
										<input type="radio" id="others" name="radio-group"/>
										<label htmlfor="others">others</label>
									</p>
                                </div>

                                <form class="contact-form">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="text" name="name" id="first-name" class="form-control" placeholder="First Name"/>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="text" name="name" class="form-control" placeholder="Last Name"/>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="text" name="text" class="form-control" placeholder="Email"/>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="text" name="text" class="form-control" placeholder="Phone"/>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" class="form-control" placeholder="$100.00"/>
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

                    <div class="col-lg-4 col-md-12">
						<aside class="widget-area" id="secondary">
							<div class="widget widget_search">
								<form class="search-form">
									<label>
										<span class="screen-reader-text">Search for:</span>
										<input type="search" class="search-field" placeholder="Search..."/>
                                    </label>
                                    
									<button type="submit">
                                        <i class="flaticon-search"></i>
                                    </button>
								</form>
							</div>

							<section class="widget widget_huruma_posts_thumb">
								<h3 class="widget-title">Popular Posts</h3>

								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg1" role="img"></span>
									</a>
									<div class="info">
										<time dateTime="2019-06-30">June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Delicate contempt received two yet advanced</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>

								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg2" role="img"></span>
									</a>
									<div class="info">
										<time dateTime="2019-06-30">June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Future Plan & Strategy for Consutruction</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>

								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg3" role="img"></span>
									</a>
									<div class="info">
										<time dateTime="2019-06-30">June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Melancholy devonshire alteration</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>
								
								<article class="item">
									<a href="#" class="thumb">
										<span class="fullimage cover bg4" role="img"></span>
									</a>
									<div class="info">
										<time dateTime="2019-06-30">June 30, 2020</time>
										<h4 class="title usmall">
											<a href="#">Delicate contempt received two yet advanced</a>
										</h4>
									</div>

									<div class="clear"></div>
								</article>
							</section>

							<section class="widget widget_categories">
								<h3 class="widget-title">Archives</h3>

								<ul>
									<li><a href="#">May 2020</a></li>
									<li><a href="#">April 2020</a></li>
									<li><a href="#">June 2020</a></li>
									<li><a href="#">julay 2020</a></li>
									
								</ul>
							</section>
							
							<section class="widget widget_categories">
								<h3 class="widget-title">Categories</h3>

								<ul>
									<li><a href="#">Educataon (10)</a></li>
									<li><a href="#">National (20)</a></li>
									<li><a href="#">Sports (10)</a></li>
									<li><a href="#">Megazine (12)</a></li>
									<li><a href="#">Health (16)</a></li>
								</ul>
							</section>

							<section class="widget widget_tag_cloud">
								<h3 class="widget-title">Tags</h3>

								<div class="tagcloud">
									<a href="#">Fashion</a>
									<a href="#">Education</a>
									<a href="#">Nation</a>
									<a href="#">Study</a>
									<a href="#">Health</a>
									<a href="#">Food</a>
									<a href="#">Travel</a>
									<a href="#">Science</a>
								</div>
							</section>
						</aside>
					</div>
                </div>
            </div>
        </section>
			<ngo-footer></ngo-footer>
		</ion-contect>
  
    ];
  }
}
