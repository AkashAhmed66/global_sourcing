import React, { useState,  } from 'react';
import AllProductData from '../../../data/Products/product-one' 
import AllProducts from '../../../data/Products/left-menu' 
import ProductItem from "./ServiceItem";
import SectionTitle from "../../SectionTitles/SectionTitle";
import { NavLink } from 'react-bootstrap';

  
const Service = () => {   
        
        const [ProductData, changeProduct] = useState(AllProductData);
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
                                changeProduct(AllProductData);
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
                                ProductData.map((product) => (
                                    <div onClick={()=>{
                                        if(flag == true){
                                            const specData = AllProducts.filter((items)=>(items.title === product.title));
                                            changeProduct(specData[0].Values);
                                            console.log(specData[0].Values);
                                        }
                                    }} 
                                    key={product.id} className='col-lg-6 row-lg-2'>
                                        <ProductItem 
                                        key={product.id} 
                                        id={product.id} 
                                        title={product.title} 
                                        thumb={product.thumb}  
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