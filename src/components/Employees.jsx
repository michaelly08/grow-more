import React, { useEffect ,useRef, useState } from "react";
import {members} from "../data"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import {Link} from "react-router-dom"
import EmployeeCard from "./EmployeeCard"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Employees = ({slide}) => {
    
    return (
        
        <div className="employees-container" >
            <div className="employees-wrapper">
                
                <div className="employees-title">Meet Our Team</div>
                {slide ? <><Swiper
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    pagination={{
                    clickable: true,
                    }}
                    loop={true}
                    navigation={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination, Navigation]}
                    className="swiper-members"
                    data-aos="zoom-in">
                
                    {members?.map(member => (
                        <SwiperSlide className="employees-card" key={member.id}>
                        <EmployeeCard member={member}/>
                    </SwiperSlide>
                    ))}
                </Swiper></>
                : 
                
                <>
                <div className="swiper-members" >
                    {members?.map(member => (
                        <div className="employees-card" key={member.id}>
                            <EmployeeCard member={member}/>
                        </div>
                    ))}
                    
                </div>
                </>
                }
                
            </div>
        </div>
        
    )
}

export default Employees