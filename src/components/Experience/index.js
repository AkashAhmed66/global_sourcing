import React from 'react';    
import SectionTitle from "../SectionTitles/SectionTitle";
import ProgressBar from 'react-bootstrap/ProgressBar'

const SkillSec = () => {
    return (
    <section className="our-skill section">
        <div className="container">
            {/* Heading */} 
            <SectionTitle 
                title="Our Experience" 
            />
            {/* End: Heading */ }
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <div className="skill-text">
                        <h2>More Than 10 Years Of Experience</h2>
                        <p> In our sourcing company, a skilled and efficient team serves as 
                            the linchpin for success, adeptly navigating the intricate landscape of 
                            supply chains and vendor relationships. Each team member brings a unique set 
                            of skills and expertise, whether it be in negotiation, market analysis, 
                            or logistical coordination, allowing the team to tackle challenges 
                            with precision and agility. Through seamless collaboration and clear 
                            communication, they optimize sourcing processes, ensuring timely delivery 
                            of high-quality products while maximizing cost-efficiency. This team thrives 
                            on continuous learning and adaptation, leveraging technology and industry insights 
                            to stay ahead of market trends and client demands. Their commitment to excellence 
                            and innovation drives the company forward, cementing its reputation as a trusted 
                            partner in the global marketplace. </p>
                    </div>
                </div>
                <div className="skill_wrap col-lg-6 col-sm-12 col-xs-12">
 
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>Integrity</h4>
                        </div> 
                        <ProgressBar animated variant="success" now={70} /> 
                    </div>
                    {/*  End Single Skill */}
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>OPERATIONAL EXCELLENCE</h4>
                        </div> 
                        <ProgressBar animated variant="success" now={90} /> 
                    </div>
                    {/*  End Single Skill */}
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>INNOVATION</h4>
                        </div> 
                        <ProgressBar animated variant="success" now={60} /> 
                    </div>
                    {/*  End Single Skill */}
                    {/*  Single Skill */}
                    <div className="single-skill">
                        <div className="skill-info">
                            <h4>CONTINUOUS IMPROVEMENT</h4>
                        </div>
                        <ProgressBar animated variant="success" now={80} /> 
                    </div>
                    {/*  End Single Skill */}
                </div>
            </div>
        </div>
    </section>
    );
};

export default SkillSec;