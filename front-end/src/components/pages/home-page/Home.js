import React from 'react';
import Navbar from "../../NavBar";
import './custom.css'
import logo from '../../images/tinkLogo.png'
import team from '../../images/team.png';
import { Link, animateScroll as scroll } from "react-scroll";

function Home(){
    return (
        
            <div className="bg1">
                <div className="main-bg">
                {/* <div className="rect">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="in-rect" style={{margin:0}}>
                            <div className="rect3" style={{marginBottom:0}}></div>
                            <div className="rect4" style={{marginBottom:0}}></div>
                        </div>
                    </div> */}
                    
                </div>
                <div >
                        <div className="round-logo">
                            <img src={logo} alt="helo " className="logo"></img>
                        </div>
                        <div className="round-ppl"><img src={team} alt="helo2"></img></div>
                    </div>   
                <Navbar/>
                <div className="home-title">
                    <h1>Tinker<span style={{color:"#000"}}>Hub CET</span></h1>
                    
                </div>
                
                <div className="home-content-qt">
                    “A Student Initiative, the key separator being<br/>
                    that it is a community for all, with absolutely<br/>
                    no barriers to entry.”
                </div>
                
              
                 
            </div>
           
            
    
      

        
    );
}

export default Home;