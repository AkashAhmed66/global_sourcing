import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import SectionTitle from "../components/SectionTitles/SectionTitle";
import PartnerList from  '../components/Partners/home-one/PartnerList'
import partnerData from '../data/Partners/partner'


const TeamPage = ( ) => {
 
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
                    bgImg={(process.env.PUBLIC_URL + '/assets/images/team_bg.jpg')}
                    title="Our Partners" 
                />
  
                <section className={`team_section team_page`}> 
                    <h2> Will Be Updated Soon</h2>
                </section>
        
            </LayoutOne>
        </Fragment>
        // <Fragment>
        //     <MetaTags>
        //       <title>Ufinity Global Sourcing | About</title>
        //       <meta
        //         name="description"
        //         content="Multipage Business  React JS Template."
        //       />
        //     </MetaTags>

        //     <LayoutOne>
            
        //         <PageHeader
        //             bgImg={(process.env.PUBLIC_URL + '/assets/images/team_bg.jpg')}
        //             title="Our Experts" 
        //         />
  
        //         <section className={`team_section team_page`}> 
        //             <div className="container">
        //                 {/* Heading */} 
        //                 <SectionTitle 
        //                     title="Our Partners"
        //                 />
        //                 {/* End: Heading */ }

        //                 <div className="row"> 

        //                     {
        //                         partnerData.slice(0,8).map(partner=>(
        //                             <PartnerList
        //                                 key={partner.id}  
        //                                 img={partner.img}
        //                                 name={partner.name}
        //                                 designation={partner.designation}
        //                                 facebookUrl={partner.facebookUrl} 
        //                                 twitterUrl={partner.twitterUrl} 
        //                                 linkedinUrl={partner.linkedinUrl} 
        //                             />
        //                         ))
        //                     }
            
        //                 </div>
        
        //             </div>
        //         </section>
        
        //     </LayoutOne>
        // </Fragment>
            
    ); 
};

export default TeamPage;   