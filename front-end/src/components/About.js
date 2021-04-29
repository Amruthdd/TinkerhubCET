import React from 'react';
import about from './images/aboutus.png'

function About(){
    return (
        <div className="about-main">
            <div className="page-title">About Us</div>
            <div className="container">
                <div className="row">
                    <div className="abt-vector col-xl-6 col-md-6">
                        <img  src={about} alt="hel8"></img>
                    </div>
                    
                    <div className="col-xl-6 col-md-6 abt-text">
                            The idea behind a community like TinkerHub is for students,
                            to get exposed to tech and resources and people, outside of the curriculum and to 
                            enhance interaction between multiple departments, with year of study no bar.
                            What one faces when stepping out of college is a world of competition 
                            and without a strong backing of the latest in everything, making a name 
                            for oneself will be hard. This also involves the acquisition of 
                            internships, authoring or research papers, seizing research
                            opportunities to the extent of patent filing. The key separator 
                            is that it is a community for all, with absolutely no barriers to entry. 
                    </div>
                </div>
            </div>
            
        </div>
    );
}


export default About;