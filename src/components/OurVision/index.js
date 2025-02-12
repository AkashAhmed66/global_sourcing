import React from 'react';    
import SectionTitle from "../SectionTitles/SectionTitle";
import ProgressBar from 'react-bootstrap/ProgressBar'

const SkillSec = () => {
    return (
    <section className="our-skill section">
        <div className="container">
            {/* Heading */} 
            <SectionTitle 
                title="Our Vision" 
            />
            {/* End: Heading */ }
            <div className="row">
                <div className="">
                    <div className="skill-text vision-text">
                        <p> Contributing to make the world a better place to live by helping the apparel & footwear industry be compliant, socially responsible and environment friendly through our apparel & footwear sourcing, designing and manufacturing services be compliant, socially responsible and environment friendly. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SkillSec;