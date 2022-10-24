import React, {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     e.target.reset()
    // }
    

    const [enquiry, setEnquiry] = useState("Free Appraisal")
    const [message, setMessage] = useState("")

    // useEffect(() => {
    //     console.log(enquiry)
    // }, [enquiry])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ymynsad', 'template_wb8p2xc', form.current, 'yqLTK2ecL74UcQOYy')
        .then((result) => {
            // console.log(result.text);
            setMessage("Thanks, we'll get back to you soon.")
            e.target.reset()
        }, (error) => {
            setMessage("Error, please try again.")
            // console.log(error.text);
        });
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                    <label htmlFor="enquiry">What's your inquiry about?</label>
                    <select id="enquiry" onChange={(e) => setEnquiry(e.target.value)}>
                        <option value="Free Appraisal">Free Appraisal</option>
                        <option value="An Advertise Property">An Advertise Property</option>
                        <option value="Property Management">Property Management</option>
                        <option value="General Enquiry">General Inquiry</option>
                    </select>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input id="name" value={enquiry} style={{display:"none"}} name="enquiry" readOnly></input>
                    <div className="form-section">Your Details</div>
                    <div>
                    <label htmlFor="name">Full Name <span style={{color: "red"}}>*</span></label>
                    <input id="name" name="full_name" required></input>

                    <label htmlFor="email">Email <span style={{color: "red"}} >*</span></label>
                    <input id="email" type="email" required name="email"></input>

                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" name="phone"></input>

                    </div>

                    
                    

                    
                    <div className={`${enquiry == "General Enquiry" && "hide"}`}>
                        <div className="form-section">Property Details</div>
                        <label htmlFor="property-address">Property Street Address <span style={{color: "red"}}>*</span></label>
                        <input id="property-address" required={enquiry !== "General Enquiry" && true} name="street_address"></input>

                        <label htmlFor="property-suburb">Property Suburb <span style={{color: "red"}}>*</span></label>
                        <input id="property-suburb" required={enquiry !== "General Enquiry" && true} name="suburb"></input>


                        <label htmlFor="property-postcode">Property Postcode <span style={{color: "red"}}>*</span></label>
                        <input id="property-postcode" required={enquiry !== "General Enquiry" && true} name="postcode"></input>

                        <label htmlFor="property-state">Property State <span style={{color: "red"}}>*</span></label>
                        <input id="property-state" required={enquiry !== "General Enquiry" && true} name="state"></input>

                    </div>
                    
                    <div className={`${enquiry == "General Enquiry" && "hide"}`}>
                        <div className="form-section">Additional Information</div>
                        <label htmlFor="bedrooms">No. of Bedrooms</label>
                        <input id="bedrooms" type="number" name="bed"></input>
                        

                        <label htmlFor="bathrooms">No. of Bathrooms</label>
                        <input id="bathrooms" type="number" name="bath"></input>

                        <label htmlFor="car">No. of Car Spaces</label>
                        <input id="car" type="number" name="garage"></input>
                    </div>



                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>

                    <button className="form-submit" type="submit">Send</button>
                    <div className="success-message">{message}</div>
                </form>
            </div>
        </div>
    )
}

export default Form