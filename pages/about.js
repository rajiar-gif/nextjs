import React, { Component } from 'react';
export default function About() {
return ( <> 
    <section className="justify-content-center about-banner">
         <div className="container">
            <div className="col-12 col-lg-8 col-md-8 col-sm-9 py-5 my-2 services-title">
              <p className="wow fadeInUp animated animated animated" ></p> 
            </div>
         </div>
      </section>
      <div className="container-fluid">
         <div className="col-12 why-choose-img px-0">
            <section className="specialise">
               <div className="container">
                  <div className="row">
                     <div className="col-12 col-md-6 about-specialise wow fadeInLeft animated"  ></div>
                     <div className="col-12 col-md-6 pl-5">
                        <h2 className="wow fadeInRight animated">We Specialise <br/>
                           In German  <br/>
                           vehicles but <br/>
                           cater to all.
                          
                        </h2>
                        <div className="wow fadeInRight animated" >
                        <p class="wow fadeInRight animated">Benz and Bavarian is based on Vauxhall Road in Liverpool. 
                           This central, busy location in the heart of the city allows us 
                           to serve motorists from all across Merseyside.
                        </p>
                        <p class="wow fadeInRight animated">Here, we’ve listed a number of areas from which our customers 
                           have visit us from. If you live in an area nearby to those named 
                           below, we’re likely to be just a short drive away.
                        </p>
                        <p class="wow fadeInRight animated">Pay us a visit for high quality, competitively-priced car servicing, 
                           car repairs, MOTs and fitted exhausts.
                        </p>
                        
                        </div>
                        
                     </div>
                  </div>
               </div>
            </section>
            <section className="bott-img">
               <div className="container">
                  <div className="row">
                     <div className="col-12 pb-4">
                        <div className="row">
                        <div className="col-12 col-sm-5">
                           <img src="img/about-us/img-sub-1.jpg" className="img-fluid p-1 wow fadeIn animated" alt=""/>
                        </div>
                        <div className="col-12 col-sm-5 d-flex align-items-end">
                           <img src="img/about-us/img-sub-2.jpg" className="img-fluid p-1 wow fadeIn animated" alt=""/>
                        </div>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className="row">
                           <div className="col-12 col-md-6">
                              <img src="img/about-us/img-sub-3.jpg" className="img-fluid wow fadeIn animated" alt=""/>
                           </div>
                           <div className="col-12 col-md-6 m-pad">
                              <h2 className="wow fadeIn animated">Why <br/>
                                 Choose US?
                              </h2>
                              <p className="wow fadeIn animated">Motorists choose us for our mechanical expertise and our highly competitive 
                                 prices, the likes of which are hard to find at other garages in Liverpool. We 
                                 offer free estimates on all proposed car repairs, including the replacement of 
                                 brakes, clutches and exhausts. Our car servicing is thorough, affordable and 
                                 completed in line with manufacturer schedules. This means you’ll receive the 
                                 same service with us as you would with a dealership garage.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 custom-mar">
                        <h2 className="mob-mp wow fadeInUp  animated">Call us now to book <br/>
                           in for a service
                        </h2>
                        <a href="tel:01512713907"><p className="call-ico-bot mt-4 wow fadeInUp  animated">0151 271 3907  </p></a>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
      </>
 )
  }

  