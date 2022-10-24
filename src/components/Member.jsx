import React from 'react'
import { useLocation } from 'react-router-dom';
import {members} from "../data"

const Member = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];


    const selectedMember = members.filter(member => member.id == id)[0]
    console.log(selectedMember)
    


    return (
        <div className="member-container">
            <div className="member-wrapper">
                <div className="member-box">
                    <img src={selectedMember.img} alt="img"></img>
                </div>
                <div className="member-box">
                    <div className="member-name">
                        {selectedMember.name}
                    </div>
                    <div className="member-contact-options">
                        <div className="member-contact">
                            <i className='bx bx-mobile'></i>
                            <a href={`tel: ${selectedMember.phone}`}>{selectedMember.phone}</a>
                        </div>
                        <div className="member-contact">
                            <i className='bx bxs-envelope' ></i>
                            <a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a>
                        </div>
                    </div>
                    <div className="member-description">
                        {selectedMember.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member