import React from 'react';   
import AboutList from "./AboutList"; 
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";
 

const AboutContent = () => {

  return (
 
	<section className="about-section" id="about">
        <div className="container"> 
            <div className="row">
                <div className="col-md-6 col-sm-12 about_bottom_warp">
                    <div className="about_list">
                        {/* Start: Heading */}
                        <SectionTitle 
                        title=" NBM International Ltd "  
                        />
                        <p> NBM International Ltd is a global apparel & footwear sourcing, designing and manufacturing service company along with other sourcing based in Dhaka, Bangladesh. Having a team with a track record of serving the clients, we are confident that we can deliver you the best you want. </p>
                     </div>
                     <div className="about_list">
                        {/* Start: Heading */}
                        <p> Everything we do, we do with sense of belonging. We believe whenever anything done with sense of belonging, it must be good for our employees, suppliers and customers/clients. We ensure utmost quality in sourcing apparels, footwear & others, designing and manufacturing. We ensure our products are safe to Environment, manufactured in structurally and socially compliant factories and delivered to clients in time with a reasonable price. </p>
                     </div>
                </div>

                {  /*Start: About Image  */} 
                <div className="col-md-6 col-sm-12"> 

                    { /*  About Right Image  */}
                    <img src={process.env.PUBLIC_URL + '/assets/images/About_right_image.jpeg'} alt="" />

                </div> 
                {/*End: About Image  */}
            

            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>


  );
};

export default AboutContent;
