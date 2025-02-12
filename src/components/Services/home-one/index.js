import React, { useState,  } from 'react';
import ServicesData from '../../../data/Services/service-one' 
import AllProducts from '../../../data/Services/left-menu' 
import ServiceItem from "./ServiceItem";
import SectionTitle from "../../SectionTitles/SectionTitle";
import { NavLink } from 'react-bootstrap';

  
const Service = () => {   
        
        const [ProductData, changeProduct] = useState(ServicesData);
        const [flag, changeFlag] = useState(1);

        const LeftMenu = AllProducts[0].Values;

        return (
        <section className="service_section" id="agenda">
            <div className="container"> 
            
                {/* Heading */}
                <SectionTitle
                    title="Our Products" 
                />
                {/* End: Heading */}
                <div className="container-body"> 
                    <div className="left-menu">
                        
                        <ul>
                            <NavLink onClick={()=>{
                                changeProduct(ServicesData);
                                changeFlag(true);
                            }}> All Product </NavLink>
                            {LeftMenu.map((products)=>{
                                return(
                                    <NavLink onClick={()=>{
                                        const specData = AllProducts.filter((items)=>(items.title === products.title));
                                        changeProduct(specData[0].Values);
                                        changeFlag(false);
                                    }}>  {products.title} </NavLink>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="right-menu" id="service"> 
                        <div className="all-products"> 
                            {
                                ProductData.map((service) => (
                                    <div onClick={()=>{
                                        if(flag == true){
                                            const specData = AllProducts.filter((items)=>(items.title === service.title));
                                            changeProduct(specData[0].Values);
                                            console.log(specData[0].Values);
                                        }
                                    }} 
                                    key={service.id} className='col-lg-6 row-lg-2'>
                                        <ServiceItem 
                                        key={service.id} 
                                        id={service.id} 
                                        title={service.title} 
                                        thumb={service.thumb}  
                                        />
                                    </div> 
                                ))
                            }
                        </div> 
                    </div> 
                </div>
            </div> 
        </section>    
        );
    }
;

export default Service;