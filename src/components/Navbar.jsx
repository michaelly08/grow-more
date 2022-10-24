import React from 'react'
import Logo from "./img/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    const menuActive = () => {
        document.querySelector("body").classList.toggle("menu-active")
    }

    const menuRemove = () => {
        document.querySelector("body").classList.remove("menu-active")
    }


    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link to="/" className="navbar-box logo" style={{color: "black", textDecoration: "none"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                    <img src={Logo}></img>
                </Link>
                <div className="navbar-box">
                    <div className="menu">
                        <Link to="/" style={{color: "black", textDecoration: "none"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                            <div className="navbar-options top-options" onClick={menuActive}>Home</div>
                        </Link>
                        <Link to="/properties" style={{color: "black", textDecoration: "none"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                            <div className="navbar-options top-options" onClick={menuActive}>Properties</div>
                        </Link>
                        <Link to="/form" style={{color: "black", textDecoration: "none"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                            <div className="navbar-options top-options" onClick={menuActive}>Contact Us</div>
                        </Link>

                        <Link to="/team" style={{color: "black", textDecoration: "none"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                            <div className="navbar-options top-options" onClick={menuActive}>Team</div>
                        </Link>
                    </div>
                    <Link to="/form" style={{color: "black", textDecoration: "none"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                        <div className="appraisal top-options" onClick={menuRemove}>Free Appraisal</div>
                    </Link>
                    <div className="menu-icon top-options"><i className='bx bx-menu' onClick={menuActive}></i></div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar