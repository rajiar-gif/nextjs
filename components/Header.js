import React, { Component } from 'react';
import Link from 'next/link'
export default function Header() {
    return (
        <>
<section className="top-sec d-block d-lg-none">
         <div className="container">
            <div className="row">
                <div className="col-12">
                <a className="wow fadeInRight  animated pr-2" href="tel:01512713907"><i className="fa fa-phone fa-rotate-90 mr-1" aria-hidden="true"></i>
0151 271 3907 </a>
<a className="wow fadeInRight  animated" href="mailto:info@benzandbavarian.com"><i className="fas fa-envelope-open-text mr-1"></i>
info@benzandbavarian.com </a>
                </div>
            </div>
         </div>
      </section>
      <header>
         <div className="logo margin_navbar-logo logo_display">
            <a href="/">
            <img src="img/logo.png" className=" wow fadeIn  animated" alt="Logo Img" /></a>
         </div>
         <div className="my-tog-btn">
            <span></span>
            <span></span>
            <span></span>
         </div>
         <nav id="my-nav1" className="navbar navbar-expand-sm navbar-light rounded-bar transparent-bar margin-nav">
            <div className="container bg-trans-color nopad">
               <div className="collapse navbar-collapse" id="navbarSupportedContent1" >
                  <div className="collapse navbar-collapse">
                     <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item wow fadeInLeft animated">
                        <a href="/">
                           <img src="img/home/logo.png" className="logo-fix  wow fadeIn  animated" alt="" />
                           </a>
                        </li>
                     </ul>
                     <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item">
                            <a className="nav-link active wow fadeIn  animated" href="/">HOME</a> 
                        </li>
                         <li className="nav-item">
                         <Link href="/about">
                         <a className="nav-link wow fadeIn  animated" >About Us</a> 
                        </Link>
                        
                        </li> 
              
                        <li className="nav-item">
                        <Link href="/service">
                          <a className="nav-link wow fadeIn  animated" >Our Services</a> 
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link wow fadeIn  animated" href="/booking">BOOK ONLINE</a> 
                        </li>
                        <li className="nav-item">
                        <a className="nav-link wow fadeIn  animated" href="#blog">TESTIMONIALS</a>
                        </li>
                        <li className="nav-item">
                        
                           <a className="nav-link wow fadeIn  animated" href="#contact">CONTACT US</a> 
                        </li>
                     </ul>
                     <ul className="navbar-nav ml-auto mr-auto txt-phon">
                        <li className="nav-item">
                           <a className="nav-link wow fadeInRight  animated" href="tel:01512713907"><i className="fa fa-phone fa-rotate-90 mr-1" aria-hidden="true"></i>
 0151 271 3907 </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
        
         <div className="outer-window">
            <div className="navbar_small">
               <a className="close-outerwindow"><i className="las la-times"></i>
               </a>
               <div className="logo">
               
                  <a href="/" className="scroll"><img src="assets/img/logo.png" alt="Logo Img"/></a>
               </div>
               <nav className="navbar1">
                  <ul className="navbar-nav ml-auto mr-auto">
                     <li className="nav-item">
                    
                         <a className="nav-link active wow fadeIn  animated" href="/">HOME</a> 
                     </li>
                     <li className="nav-item">
                     
                         <a className="nav-link wow fadeIn  animated" href="/about">About Us</a> 
                     </li>
                    
                   
                    
                     <li className="nav-item">
                     
                       <a className="nav-link wow fadeIn  animated" href="/service">Our Services</a>
                     </li>
                     <li className="nav-item">
                    
                        <a className="nav-link wow fadeIn  animated" href="/booking">BOOK ONLINE</a> 
                     </li>
                     <li className="nav-item">
                
                        <a className="nav-link wow fadeIn  animated" href="#blog">TESTIMONIALS</a> 
                     </li>
                     <li className="nav-item">
                    
                       <a className="nav-link wow fadeIn  animated" href="#contact">CONTACT US</a> 
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
        
      </header>
      </>
      )
    }
