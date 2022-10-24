import React from 'react'
import {Link} from "react-router-dom"

const EmployeeCard = ({member}) => {
  return (
    <>
        <div className="employee-img">
            <img src={member.img} alt="img"></img>
        </div>
        <div className="employee-info">
            <div className="employee-name">{member.name}</div>
            <div>{member.role}</div>
            <div className="employee-contact-options">
                <div className="employee-contact">
                    <i className='bx bx-mobile'></i>
                    <a href={`tel: ${member.phone}`}>{member.phone}</a>
                </div>
                <div className="employee-contact">
                    <i className='bx bxs-envelope' ></i>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
            </div>
            <Link to={`/member/${member.id}`} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                <div className="findout-button">
                        Find Out More
                </div>
            </Link>
        </div>
    </>
  )
}

export default EmployeeCard