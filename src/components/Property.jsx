import React, {useMemo, useState, useEffect} from 'react'
import {fetchData, members} from "../data"
import { useLocation, Link } from 'react-router-dom';
import HTMLReactParser from "html-react-parser"
import { Swiper, SwiperSlide } from "swiper/react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import EmployeeCard from "./EmployeeCard"


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";





const Property = () => {

    const [property, setProperty] = useState([])
    const [selectedProperty, setSelectedProperty] = useState({})
    const location = useLocation();
    const cat = location.pathname.split("/")[2].split("%20").join(" ")
    const id = location.pathname.split("/")[3];


    let agents = [];
    
    
    // console.log(selectedProperty)

    // for (let i = 0; i < members.length; i++) {
    //     for (let j = 0 ; j < selectedProperty?.agentName?.length; j++) {
    //         if (members[i].name == selectedProperty.agentName[j]) {
    //             agents.push(members[i])
    //         }
    //     }
    // }


    if (selectedProperty?.contactStaff) {
        for (let i = 0; i < members.length; i++) {
            for (let j = 0 ; j < selectedProperty?.contactStaff.length; j++) {
                if (members[i].name === selectedProperty?.contactStaff[j].firstName + " " + selectedProperty?.contactStaff[j].lastName) {
                    agents.push(members[i])
                }
            }
        }
    }
    let uniqueAgents = [...new Set(agents)];
    
    

    


    useEffect(()=> {
        const fetchProperties = async () => {
            let properties = []

            properties  = await fetchData("https://grow-more-prop.herokuapp.com/api")

            
            setProperty(properties)
        }
        
        fetchProperties()
        
        
    }, [])


 


    useEffect(()=> {
        if(cat == "For Sale") {
            setSelectedProperty(property?.Sale?.items.filter(prop => prop.id == id)[0])
        }
        else if(cat == "Sold") {
            setSelectedProperty(property?.Sold?.items.filter(prop => prop.id == id)[0])
        }
        else if(cat == "For Rent") {
            setSelectedProperty(property?.RentAndLeased?.items.filter(prop => prop.id == id)[0])
        }
        else if(cat == "Leased") {
            setSelectedProperty(property?.RentAndLeased?.items.filter(prop => prop.id == id)[0])
        }
        
    }, [property])
    console.log(selectedProperty)

    // console.log(selectedProperty.contactStaff[0].firstName, selectedProperty.contactStaff[0].lastName)


    
    function capitalizeFirstLetter(string) {
        let finished = []
        const splited = string.split(" ")
        for (let i = 0; i < splited.length; i++) {
            finished.push(splited[i].charAt(0).toUpperCase() + splited[i].slice(1).toLowerCase())
        }
        return finished.join(" ")
      }
      


    
    

    const loopOrNot = () => {
            if(selectedProperty?.photos?.length >= 2) {
                return true
            }
            else {
                return false
            }
        }

    

    

    return (
        
        <div className="property-container">
            {selectedProperty?.address ? 
            <>
            <div className="property-wrapper">
                <Swiper
                navigation={{
                    clickable: true,
                  }}
                slidesPerView={1}
                loop={loopOrNot()}
                // centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false, }}
                className="carousel"
            >
                {selectedProperty?.photos?.map((image) => (
                    <SwiperSlide className="carousel-images" key={image.filename}>
                        <img src={image.url} alt="img"></img>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <div className="property-box">
                <div className="property-address">
                    {selectedProperty?.address.streetNumber} {selectedProperty?.address.street}, {capitalizeFirstLetter(selectedProperty?.address.suburb.name)} {selectedProperty?.address.state.abbreviation}
                </div>
                <div className="property-info">
                    {selectedProperty?.type.name}
                </div>

                <div className="property-info">
                    {selectedProperty?.bed > 0 &&<span><i className='bx bxs-bed'></i> {selectedProperty?.bed}</span>}
                    {selectedProperty?.bath > 0 &&<span><i className='bx bxs-bath'></i> {selectedProperty?.bath}</span>}
                    {selectedProperty?.garages > 0 && <span><i className='bx bxs-car-garage' ></i> {selectedProperty?.garages}</span>}
                    {selectedProperty?.landArea.value > 0 && <span><i className='bx bx-line-chart' ></i> {selectedProperty?.landArea.value} {selectedProperty?.landArea.units}</span>}
                </div>

                <div className="property-info description" >
                    {HTMLReactParser(selectedProperty?.description)}
                </div>
                <div className="property-agents" >
                    {uniqueAgents?.map(member => (
                        <div className="employees-card" key={member.id}>
                            <EmployeeCard member={member} />
                        </div>
                    ))}
                    
                </div>
                

            </div>
                
            </div>
            <Map lat={selectedProperty?.geolocation.latitude} long={selectedProperty?.geolocation.longitude}/>
            </>
            : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            
        
        </div>
    )
}


const Map = ({lat, long}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    // console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    const center = useMemo(() => ({ lat: lat, lng: long }), []);



    if(!isLoaded) return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>


    return (
        <>
    
        <GoogleMap zoom={16} center={center} mapContainerClassName="map-container">
            <MarkerF position={center}/>
        </GoogleMap>
            
        </>
    )
}



export default Property