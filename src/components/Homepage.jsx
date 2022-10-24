import React, { useEffect ,useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


import { EffectCards } from "swiper";




import Hero from "./img/hero.jpg"
import Employees from "./Employees"
import Sold from "./img/sold.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Homepage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className="homepage-container">
            <div className="homepage-wrapper">
                <div className="hero-banner">
                    <img src={Hero} alt="img"></img>
                    <div className="hero-banner-text">
                        <div className="slogan">A Real Estate Company With A Difference</div>
                    </div>
                </div>
            </div>
            <Employees slide={true}/>
            <WhyChoose />
            <Testimonials />
        </div>
    )
}



const WhyChoose = () => {
    return (
        <div className="whychoose-container">
            <div className="whychoose-wrapper">
                <div className="whychoose-box">
                    <img src={Sold} alt="img"></img>
                </div>
                <div className="whychoose-box">
                    <div>
                        Why Choose Us?
                    </div>
                    <div className="whychoose-box-info" data-aos="zoom-in-left">
                        <i className='bx bx-check'></i>
                        <span>Many years of experience</span>
                    </div>
                    <div className="whychoose-box-info" data-aos="zoom-in-left">
                        <i className='bx bx-check'></i>
                        <span>Great knowledge of property investment market</span>
                    </div>
                    <div className="whychoose-box-info" data-aos="zoom-in-left">
                        <i className='bx bx-check'></i>
                        <span>Qualified, accredited and licensed</span>
                    </div>
                    <div className="whychoose-box-info" data-aos="zoom-in-left">
                        <i className='bx bx-check'></i>
                        <span>Assisted hundreds of property investors</span>
                    </div>
                    <div className="whychoose-box-info" data-aos="zoom-in-left">
                        <i className='bx bx-check'></i>
                        <span>Huge customer database</span>
                    </div>
                    <Link to={`/procedures`} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="whychoose-box-info" data-aos="zoom-in-left">
                        <span className="whychoose-box-info-button">Learn More</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


const Testimonials = () => {
    
    return (
        <div className="testimonials-container">
            <div className="testimonials-wrapper">
            <div className="testimonials-title">Testimonials</div>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="card-swiper"
            >
                <SwiperSlide className="card-slide">
                    <div>Achieved a higher price than expected. The process was very smooth and informed me at every step. A very honest and professional team.</div>
                    <div>
                        <b>Van Mein Nguyen</b> (Seller)
                    </div>
                </SwiperSlide>

                <SwiperSlide className="card-slide">
                    <div>The transaction was very smooth. I highly recommend Grow More Properties & Investments to buyers and sellers.</div>
                    <div>
                        <b>Chetan Patel</b> (Seller)
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="card-slide">
                    <div>Incredibly easy to talk to, fabulous support and kept us in the loop every step of the way.</div>
                    <div>
                        <b>Gaurav Maheshwari</b> (Buyer)
                    </div>
                </SwiperSlide>
                
            </Swiper>

            </div>
        </div>
    )
}

export default Homepage