import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
//  import styles from '../styles/Home.module.css'
// import styles from '../styles/css/style.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      
      
<div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel">

   
   <div className="carousel-inner" role="listbox">
    
     <div className="carousel-item active">
      
       <div className="view">
        
         {/* <video style="max-width:100%; height:auto" className="embed-responsive" autoplay loop muted>
           <source className="embed-responsive-item" src="img/vehicle.mp4" type="video/mp4" />
         </video> */}
       </div>
     </div>
    
 </div>

</div>
<section className="bottom-banner">
         <div className="container">
            <div className="row">
               <div className="col-4 col-sm-4 nopad d-none d-md-block">
                  <p className="cust-p wow fadeIn  animated">Affordable Pricing</p>
               </div>
               <div className="col-8 col-sm-8 bg-phn d-none d-md-block">
                  <p className="call-ico wow fadeIn  animated"><span className="d-none d-md-block float-left">Call us now  for a service :</span> 0151 271 3907 </p>
               </div>
            </div>
         </div>
         <div className="col-12 bg-phn d-block d-md-none">
            <div className="container">
               <p className="call-ico wow fadeIn  animated">Affordable Pricing : 0151 271 3907 </p>
            </div>
         </div>
      </section>
   

      <section className="we-service">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h2 className=" wow fadeInUp  animated">CARS WE SERVICE</h2>
               </div>
               <div className="col-12">
                  <div className="row d-flex justify-content-center">
                     <div className="card we-service-card wow fadeInLeft animated">
                        <img className="card-img-top" src="/img/home/cars/MERCEDES.png"  alt="Card image cap" />
                        <div className="card-body">
                           <h5 className="card-title">MERCEDES</h5>
                        </div>
                     </div>
                     <div className="card we-service-card wow fadeInLeft animated">
                        <img className="card-img-top" src="img/home/cars/BMW.png" alt="Card image cap" />
                        <div className="card-body">
                           <h5 className="card-title">BMW</h5>
                        </div>
                     </div>
                     <div className="card we-service-card wow fadeInRight animated">
                        <img className="card-img-top" src="img/home/cars/volkswagen.png" alt="Card image cap" />
                        <div className="card-body">
                           <h5 className="card-title">volkswagen</h5>
                        </div>
                     </div>
                     <div className="card we-service-card wow fadeInRight animated">
                        <img className="card-img-top" src="img/home/cars/AUDI.png" alt="Card image cap" />
                        <div className="card-body">
                           <h5 className="card-title">AUDI</h5>
                        </div>
                     </div>
                     <div className="card we-service-card  wow fadeInLeft  animated">
                        <img className="card-img-top" src="img/home/cars/SEAT.png" alt="Card image cap" />
                        <div className="card-body">
                           <h5 className="card-title">SEAT</h5>
                        </div>
                     </div>
                     <div className="card we-service-card wow fadeInLeft  animated">
                        <img className="card-img-top" src="img/home/cars/SKODA.png" alt="Card image cap" />
                        <div className="card-body">
                           <h5 className="card-title">SKODA</h5>
                        </div>
                     </div>
                     <div className="card we-service-card wow fadeInRight animated">
                        <img className="card-img-top" src="img/home/cars/AMG.png" alt="Card image cap" />
                        <div className="card-body">
                           <h5 className="card-title">AMG</h5>
                        </div>
                     </div>
                     <div className="card we-service-card wow fadeInRight animated">
                        <img className="card-img-top" src="img/home/cars/Ferrari.png" alt="Card image cap" /> 
                        <div className="card-body">
                           <h5 className="card-title">Ferrari</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="our-services">
         <div className="container-fluid">
            <div className="row">
               <div className="col-12 text-center">
                  <h2 className=" wow fadeInUp  animated">Our services</h2>
               </div>
               <div className="col-12 col-lg-3 col-md-6 col-sm-6 hover-img wow fadeIn  animated">
                  <div className="card bg-service service-img-1">
                     <div className="card-body">
                        <h5 className="card-title">MOT Testing</h5>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-3 col-md-6 col-sm-6 hover-img wow fadeIn  animated">
                  <div className="card bg-service service-img-2">
                     <div className="card-body">
                        <h5 className="card-title">Steering <br/> & Suspension</h5>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-3 col-md-6 col-sm-6 hover-img wow fadeIn  animated">
                  <div className="card bg-service service-img-3">
                     <div className="card-body">
                        <h5 className="card-title">Air Con Nitrogen <br/> testing</h5>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-3 col-md-6 col-sm-6 hover-img wow fadeIn  animated">
                  <div className="card bg-service service-img-4">
                     <div className="card-body">
                        <h5 className="card-title">Brakes <br/> & Clutches</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="ico-key-sec">
         <div className="container">
            <h2 className="text-center mb-5 wow fadeInUp  animated">Why choose us?</h2>
            <div className="col-12">
            <div className="row">
                  <div className="col-12 col-sm-4 text-center why-icon  wow fadeInDown  animated">
                     <img src="img/home/key-benefits/surface1.png" className="ico-key mb-4" alt="" />
                     <p>Skilled <br />and trained technicians</p>
                  </div>
                  <div className="col-12 col-sm-4 text-center why-icon wow fadeInUp  animated">
                     <img src="img/home/key-benefits/car-repair.png" className="ico-key mb-4" alt="" />
                     <p>Maintaining <br />manufacturing standards</p>
                  </div>
                  <div className="col-12 col-sm-4 text-center why-icon wow fadeInDown  animated">
                     <img src="img/home/key-benefits/car-repair1.png" className="ico-key mb-4" alt="" />
                     <p>Free pick-up <br />and delivery</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="testi">
         <div className="container">
            <div className="col-12 text-center wow fadeInUp  animated">
               <h2 className="py-3">Testimonials</h2>
            </div>
            <div className="items">
               <div className="card d-flex align-items-center">
                  <div className="card-body d-flex align-items-center">
                     <div className="template-demo row">
                        <div className="col-12 col-xl-1 col-lg-2 d-flex align-items-center"> <img className="profile-pic" src="img/home/testi/testi1.png" /> </div>
                        <div className="col-12 col-xl-11 col-lg-10">
                           <p className="wow fadeIn  animated">Excellent service and very polite staff and  highly  
                              recommend will definitely be coming back 
                              five  star service keep up the good work boys
                           </p>
                           <h6 className="wow fadeIn  animated">Carl Charlton</h6>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card d-flex align-items-center">
                  <div className="card-body d-flex align-items-center">
                     <div className="template-demo row">
                        <div className="col-12 col-xl-1 col-lg-2 d-flex align-items-center"> <img className="profile-pic" src="img/home/testi/testi2.png"/> </div>
                        <div className="col-12 col-xl-11 col-lg-10">
                           <p className="wow fadeIn  animated">Great workmanship done by great lads..
                              I highly recommend 
                           </p>
                           <h6 className="wow fadeIn  animated">Robert Woody Woodruff</h6>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card d-flex align-items-center">
                  <div className="card-body d-flex align-items-center">
                     <div className="template-demo row">
                        <div className="col-12 col-xl-1 col-lg-2 d-flex align-items-center"> <img className="profile-pic" src="img/home/testi/testi1.png"/> </div>
                        <div className="col-12 col-xl-11 col-lg-10">
                           <p className="wow fadeIn  animated">Excellent service and very polite staff and  highly  
                              recommend will definitely be coming back 
                              five  star service keep up the good work boys
                           </p>
                           <h6 className="wow fadeIn  animated">Carl Charlton</h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="whypay">
         <div className="container-fluid m-nopad">
            <div className="col-12 bg-why-pay">
               <img src="img/home/why-pay/r-img.jpg" className="float-right r-img" alt=""/>
               <div className="col-12 pt-5 m-nomarg">
                  <div className="row">
                     <div className="container">
                        <div className="wow pulse animated">
                           <div className="col-12 col-md-8 pt-3 why-sec text-white px-0">
                              <div className="col-12 pay-mpad">
                                 <h2 className="pb-4 wow fadeIn  animated">Pay at <br/>your own pace</h2>
                                 <p className="mb-2 wow fadeIn  animated">To make things easier, we now offer interest-free monthly instalment schemes so you can
                                    give the best of treatments to your vehicle.</p>
                                    <p className="custom-color">Subject to availability</p>
                              </div>
                              <div className="col-12 why-sec-bot text-white pt-4">
                                 <div className="row">
                                    <div className="col-4 text-center">
                                       <img src="img/home/why-pay/ico1.png" className="wow fadeIn  animated" alt=""/>
                                       <p className="wow fadeIn  animated">NO INTEREST NO FEES</p>
                                    </div>
                                    <div className="col-4 text-center">
                                       <img src="img/home/why-pay/ico2.png" className="wow fadeIn  animated" alt=""/>
                                       <p className="wow fadeIn  animated">MONTHLY INSTALMENTS</p>
                                    </div>
                                    <div className="col-4 text-center">
                                       <img src="img/home/why-pay/ico3.png" className="wow fadeIn  animated" alt=""/>
                                       <p className="wow fadeIn  animated">QUICK AND EASY</p>
                                    </div>
                                 </div>
                              </div>
                              
                           <div className="col-12 foot-why pay-mpad">
                                 <a href="https://www.servicesureautocentres.com/">
                                    <figure>
                                      <img src="img/home/why-pay/logo.png" className="float-left" alt=""/>
                                    </figure>
                                 </a>
                                 <p>All loans are subject to affordability and other checks, including use of Credit Reference Agency data. You must be 18 or over. Participating Retailers only. Finance subject to 0% APR. Finance Agreement and full Ts&Cs available on application in Retailer. Finance provided by Auto Service Finance Limited. Correct at time of going to print.</p>
                              
                           </div>

                           </div>
                        </div>
                        <div className="col-12 custom-mar">
                           <h2 className="mt-5 pt-5 wow fadeInUp  animated">
                            
                           </h2>
                           <p className="mb-4 pt-5 wow fadeInUp  animated">
                             
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="book-bg">
         <div className="container">
            <div className="col-12">
               <div className="row">
                  <div className="col-12 col-sm-6 brdr-r m-nopad">
                     <h2 className="wow fadeInUp  animated">  Book <br/> an appointment</h2>
                     <a href="tel:01512713907"><p className="call-ico-bot mb-4 wow fadeInUp  animated"> 0151 271 3907  </p></a>
                  </div>
                  <div className="col-12 col-sm-6  align-items-center trusted m-nopad">
                     <h2 className=" wow fadeInUp  animated">  Trusted specialists <br /> in auto repair</h2>
                     <br clear="all"/>
                     <div> <img src="img/Battery-sure-logo.jpg"/></div>
                  </div>
               
            </div>
         </div>
         </div>
      </section>

      <section className="disc">
         <div className="container-fluid">
         <div className="col-12 row px-0 mx-0">
         <div className="col-12 col-lg-1"></div>
         <div className="col-12 col-xl-10 col-lg-10 col-md-12 col-sm-12 m-pad text-center d-flex align-items-center p-0">
            <div className="row col-12 d-flex justify-content-center p-0">
               <div className="col-12">
            <h5 className="m-center mb-3">OUR AFFILIATIONS</h5>
            </div>
               <div className="col-12">
               <img src="img/home/ico-1.png" className="certi-logo" alt=""/>
               <img src="img/home/ico-2.png" className="certi-logo" alt=""/>
               <img src="img/home/ico-3.png" className="certi-logo" alt=""/>
             
               </div>
               </div>
            </div>
         <div className="col-12 col-lg-1"></div>
            </div>
         </div>
      </section>
   
</main>
     
    </div>
  )
}
