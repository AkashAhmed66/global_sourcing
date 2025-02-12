import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import About from '../components/About/home-one'
import Vision from '../components/OurVision'; 
import Experience from '../components/Experience'; 


const Aboutpage = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>NBM International Ltd | About</title>
              <meta
                name="description"
                content="Multipage Business  React JS Template."
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={(process.env.PUBLIC_URL + '/assets/images/about_bg1.jpg')}
                    title="About Us" 
                />

                <About /> 
                <Vision /> 
                <Experience /> 
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default Aboutpage;   