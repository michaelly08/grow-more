import React, {useState, useEffect} from 'react'
import {fetchData} from "../data"
import HTMLReactParser from "html-react-parser"
import {Link} from "react-router-dom"
import axios from "axios"


const Properties = () => {

    const [properties, setProperties] = useState([])
    const [filteredProperty, setFilteredProperty] = useState([])
    const [button, setButton] = useState({
        activeObject: {id: "For Sale"},
        objects: [{id: "For Sale"},{id: "Sold"},{id: "For Rent"},{id: "Leased"}]
    })


    

    

    useEffect(()=> {
        const fetchProperties = async () => {
            let properties = []

            properties  = await fetchData("https://grow-more-prop.herokuapp.com/api")
            setProperties(properties)
            setFilteredProperty(properties?.Sale?.items)
        }
        
        fetchProperties()
    }, [])



    const settingFilter = () => {
        if(button.activeObject.id == "For Sale") {
            setFilteredProperty(properties?.Sale?.items)
        }
        else if(button.activeObject.id == "Sold") {
            setFilteredProperty(properties?.Sold?.items)
        }
        else if(button.activeObject.id == "For Rent") {
            setFilteredProperty(properties?.RentAndLeased?.items)
        }
        else if(button.activeObject.id == "Leased") {
            setFilteredProperty(properties?.RentAndLeased?.items)
        }
    }




    useEffect(()=> {
        settingFilter()
    }, [button])



    if (filteredProperty?.length) {
        // console.log(filteredProperty?.filter(property => property.id == "9105186"))
    }
    





    const toggleActive = (index) => {
        setButton({...button, activeObject : button.objects[index]})
    }



    function toggleActiveStyles(index) {
        if(button.objects[index].id === button.activeObject.id) {
            return "filter-button b-active"
        }
        else {
            return "filter-button b-inactive"
        }
    }
    
    function capitalizeFirstLetter(string) {
        let finished = []
        const splited = string.split(" ")
        for (let i = 0; i < splited.length; i++) {
            finished.push(splited[i].charAt(0).toUpperCase() + splited[i].slice(1).toLowerCase())
        }
        return finished.join(" ")
      }
      
    
    
    
    // properties?.filter(property => property.status == button.activeObject.id)
    let uniqueProperties = [...new Set(filteredProperty)];

    return (
        <div className="properties-container">
            <div className="filter-buttons">
            {button.objects?.map((element, index) => (
                <div key={element?.id} className={toggleActiveStyles(index)} onClick={() => {
                    toggleActive(index)
                    }}>
                    {element?.id}
                </div>
            ))}
            </div>


            <div className="whychoose-box">{uniqueProperties?.length} Properties {button.activeObject?.id}</div>


            <div className="properties-wrapper">

                {uniqueProperties?.length ? uniqueProperties?.map(property => (
                    <Link to={`/property/${button.activeObject.id}/${property.id}`} className="properties-box" key={property.id} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                        <img src={property.photos[0].url} alt="img"></img>
                        <div className="properties-address">
                            <span>{property?.address.streetNumber} {property?.address.street}, {capitalizeFirstLetter(property?.address.suburb.name)} {property?.address.state.abbreviation}</span>
                        </div>
                        <div className="properties-info">
                            {property?.bed > 0 &&<span><i className='bx bxs-bed'></i> {property?.bed}</span>}
                            {property?.bath > 0 &&<span><i className='bx bxs-bath'></i> {property?.bath}</span>}
                            {property?.garages > 0 && <span><i className='bx bxs-car-garage' ></i> {property?.garages}</span>}
                            
                        </div>
                        <div><i className='bx bx-search-alt-2 properties-box-search' ></i></div>
                        {property?.landArea.value > 0 && <div className="properties-info"><span><i className='bx bx-line-chart' ></i> {property?.landArea.value} {property?.landArea.units}</span></div>}
                        {/* <i className='bx bx-line-chart' ></i>{property?.landArea.value} {property?.landArea.units} */}
                    </Link>
                )) : <div>Loading...</div>}

                
                

            </div>
        </div>
    )
}

export default Properties