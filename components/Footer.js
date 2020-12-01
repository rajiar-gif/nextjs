import React, { Component } from 'react';
import Link from 'next/link'
export default function Footer() {
    return (
        <>
<footer className="footer">
         <div className="container-fluid m-nopad">
            <div className="col-12 row px-0 mx-0">
               <div className="col-12 col-lg-1">
               </div>
               <div className="col-6 col-lg-2 col-md-3 col-sm-6 service-footer m-nopad">
                  <ul className="pl-3">
                     <h3>SERVICES</h3>
                     <li>
                   
                        <a href="#" className="wow fadeIn animated"> Car Servicing And Repairs </a> 
                     </li>
                     <li>
                        <a href="#" className="wow fadeIn animated">Mot Testing</a> 
                     </li>
                     <li>
                        <a href="#" className="wow fadeIn animated">Clutches And Brakes</a> 
                     </li>
                     <li>
                      <a href="#" className="wow fadeIn animated">Exhausts</a> 
                     </li>
                     <li>
                        <a href="#" className="wow fadeIn animated">Air Conditioning</a> 
                        
                     </li>
                     <li>
                      <a href="#" className="wow fadeIn animated">Steering And Suspension</a> 
                     </li>
                  </ul>
               </div>
               <div className="col-6 col-lg-2 col-md-3 col-sm-6 nav-footer m-nopad">
                  <ul className="pl-3">
                     <h3>NAVIGATION</h3>
                      <li><a href="/about" className="wow fadeIn animated">About Us</a></li> 
                    
                     <li>
                      <a href="#" className="wow fadeIn animated">Book Online </a>
                     </li>
                     <li>
                      <a href="#" className="wow fadeIn animated">Testimonials </a> 
                     </li>
                    
                     <li>
                   
                        <a href="#" className="wow fadeIn animated">Contact Us </a> 
                     </li>
                  </ul>
               </div>
               <div className="col-6 col-lg-2 col-md-3 col-sm-6 bg-sub-footer m-pad">
                  <h3>ADDRESS</h3>
                  <ul>
                     <p className="wow fadeIn animated">Benz And Bavarian Ltd <br/> 82-84 vauxhall Rd, <br/> Liverpool L3 6DI, <br/> United Kingdom </p>
                  </ul>
                  
                  <div className="col-12 p-0">
                  <div className="social">
                  <a className="wow fadeIn  animated pb-1 w-100" href="tel:01512713907"><strong><i className="fa fa-phone fa-rotate-90 mr-1" aria-hidden="true"></i>0151 271 3907 </strong></a>
                  <a className="wow fadeIn  animated w-100" href="tel:07902629444"><strong><i className="fa fa-phone fa-rotate-90 mr-1" aria-hidden="true"></i>
                  0790 262 9444 </strong></a>
                  </div>
               </div>

               </div>
               <div className="col-6 col-lg-4 col-md-3 col-sm-6 bg-sub-footer m-pad">
                  <h3>CONTACT US</h3>
                  <div className="row">
                  <div className="col-12 pb-3">
                  <div className="social m-center-0">
                     <a href="https://www.facebook.com/BenzandBavarian" className="wow fadeIn animated animated" ><span className="fab fa-facebook-f"></span></a>
                     <a href="https://www.instagram.com/benzandbavarianltd" className="wow fadeIn animated animated" ><span className="fab fa-linkedin-in"></span></a>
                     <a href="#" className="wow fadeIn animated animated" ><span className="fab fa-twitter"></span></a>
                  </div>
                  </div>
                  <div className="col-12">
                     <a href="#" className="wow fadeIn animated animated" > <img src="img/home/footer-logo/footer1.png" className="certi-logo1" alt=""/> </a>
                     <a href="#" className="wow fadeIn animated animated" > <img src="img/home/footer-logo/footer2.png" className="certi-logo1" alt=""/> </a>
                     <a href="#" className="wow fadeIn animated animated" > <img src="img/home/footer-logo/footer3.png" className="certi-logo1" alt=""/> </a>
                  </div>
                  </div>
                  
               </div>
               <div className="col-12 col-lg-1 bg-sub-footer bg-sub-footer1">
               </div>
            </div>
         </div>
      </footer>

      <section className="footer-bottom">
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-6 m-center">
                  <p className="text-white wow fadeIn animated">Powered by <a href="#">Hintt</a></p>
               </div>
               <div className="col-12 col-md-6  cust-text-right m-center">
                  <p className="text-white wow fadeIn animated foot-p">Copyright © 2020 benz And bavarian ltd. all rights reserved</p>
               </div>
            </div>
         </div>
      </section>
      </>
      )
    }
