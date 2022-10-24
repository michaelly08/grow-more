import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-box">
                    <div className="footer-box-title">Grow More Properties & Investments</div>
                    <div className="footer-box-info">We are guiding Australians to achieve financial wellbeing by building and holding a portfolio of quality properties over the long term.</div>
                </div>
                <div className="footer-box">
                    <div className="footer-box-title">Contact Us</div>
                    <div ><span className="footer-box-info"><i className='bx bx-current-location'></i> 103 Elgar Rd Derrimut, VIC 3030 Australia</span></div>
                    <div ><span className="footer-box-info"><i className='bx bxs-phone'></i> 03 8797 5100</span></div>
                    <div ><span className="footer-box-info"><i className='bx bxs-envelope'></i> info@gmpi.com.au</span></div>
                </div>
                <div className="footer-box">
                    <div className="footer-box-title">Important links</div>
                    <span><Link to="/" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="footer-box-info"><i className='bx bx-tag-alt' ></i> Home</Link></span>
                    <span><Link to="/team" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="footer-box-info"><i className='bx bx-tag-alt' ></i> Team</Link></span>
                    <span><Link to="/properties" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="footer-box-info"><i className='bx bx-tag-alt' ></i> Properties</Link></span>
                    <span><Link to="/form" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="footer-box-info"><i className='bx bx-tag-alt' ></i> Contact Us</Link></span>
                </div>
                <div className="footer-box">
                    <div className="footer-box-title">Quick Links</div>
                    <span><Link to="/policy" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="footer-box-info"><i className='bx bx-tag-alt' ></i> Privacy Policy</Link></span>
                    <span><Link to="/diligence" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="footer-box-info"><i className='bx bx-tag-alt' ></i> Due Diligence Checklist</Link></span>
                </div>

            </div>
            
        </div>
    )
}

export default Footer