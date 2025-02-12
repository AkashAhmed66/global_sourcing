import React from 'react';
import SectionTitle from "../../SectionTitles/SectionTitle";
import PartnerList from  './PartnerList'
import partnerData from '../../../data/Partners/partner'
 
  
function Services({classes }) {    
    return (
		<section className={`team_section ${classes}`}  id="team"> 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Our Partners"
				/>
				{/* End: Heading */ }

				<div className="row"> 

					{
                        partnerData.slice(0,4).map(partner=>(
                            <PartnerList
                                key={partner.id}  
                                img={partner.img}
                                name={partner.name}
                                designation={partner.designation}
                                facebookUrl={partner.facebookUrl} 
                                twitterUrl={partner.twitterUrl} 
                                linkedinUrl={partner.linkedinUrl} 
                            />
                        ))
                    }
	
				</div>
 
			</div>
		</section>

    );
}

export default Services;