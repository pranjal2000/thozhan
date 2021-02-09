import { Component, h, Prop, State} from '@stencil/core';
import * as ngo                 from     '../../assets/thozhan.json';
@Component({
  tag: 'ngo-legal',
  styleUrl: 'legal.css',

})
export class NgoLegal {
 @Prop() ngo                 :   any                 =   ngo;

 componentWillLoad() {
  console.log('NgoProjectsDetail :: componentWillLoad');

}

componentDidLoad() {
  console.log('NgoProjectsDetail :: componentDidLoad');
}

  
  render() {
    return [
		<ion-content>
		{/* <div class="preloader">
          <div class="preloader">
            <span></span>
            <span></span>
          </div>
        </div> */}
			<ngo-header></ngo-header>
			<div class="page-title-area" style={{'background-image':'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Legal</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li>Legal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title Area -->

        <!-- Start Causes Details Area --> */}
        <section class="causes-details-area ptb-100" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="causes-details-desc">

                            <div class="causes-details-text">
                                <div class="progress pink">
                                    
                                </div>
                                
                                <h3>Registration Deed</h3>
								<p>Registration Number- {this.ngo.legal.regDeed.regNo}</p>
                            </div>

                           
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="causes-details-desc">

                            <div class="causes-details-text">
                                <div class="progress pink">
                                    
                                </div>
                                
                                <h3>Pan Card</h3>
								<p>Pan Number- {this.ngo.legal.panNo}</p>
                            </div>

                           
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="causes-details-desc">

                            <div class="causes-details-text">
                                <div class="progress pink">
                                    
                                </div>
                                
                                <h3>80g certificate</h3>
								<p>{this.ngo.legal._80GNo}</p>
                                
                            </div>

                           
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
			<ngo-footer></ngo-footer>
		</ion-content>
  
    ];
  }
}
