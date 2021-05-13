import React from 'react';
import about from './images/aboutus.png'
import {teamData} from './data'
import {Link} from 'react-router-dom'

function About(){
    return (
        <div className="about-main">
            <Link to="/" style={{color:"#fff",margin:10}}>{"<"}Home</Link>
            <div className="page-title">About Us</div>
            <div className="">
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
            <div  className="team-title">Team</div>
            <div className="team-container">
                
                <div className="row">
                {teamData.map((data,key) =>{
                    return(
                        <div className="t-box col-xl-3 col-md-4">
                            <div className="team-box">
                                <img
                                    src={data.img[Object.keys(data.img)[0]]}
                                    alt="hel8" 
                                    className="team-img">
                                </img>
                                <div className="team-mem">
                                    <div className="team-name">{data.name}</div>
                                    <div>{data.title}</div>
                                </div>
                            </div>   
                        </div>
                    )
                    
                })}
                    
                    
                </div>
            </div>
            
        </div>
    );
}


export default About;