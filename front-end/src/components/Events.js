import React from 'react';
import {eventData} from './data';
import p1 from './images/p1.jpeg';
import p2 from './images/event.png'

function Events(){
    return (
        <div className="events-main">
            <div className="page-title" >Events</div>
            <img src={p2} alt="p2" className="event"></img>
            <div className="init-box car-width" >
                <div className="" >
                    <div id="carouselExampleControls" class="carousel slide carou-col " data-ride="carousel" >
                        <div className="caro-arrow">
                            <a class="car-a" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                
                            </a>
                        </div>

                        <div class="carousel-inner car-inn">
                            <div className="container">
                                {eventData.map((data,key) => {
                                    return(
                                        <div class="carousel-item  car-box" key={key}>
                                            
                                                <div className="row" style={{padding:0}}>
                                                    <div className="col-xl-4 col-md-6">
                                                        <img src={p1} alt="p1" className="poster"></img>
                                                    </div>
                                                    <div className="col-xl-8 col-md-6 dis-non">
                                                        <h4 className="font-weight-bold">{data.title}</h4>
                                                        <div className="d-block w-100">
                                                            {data.desc}
                                                        </div>
                                                    </div>
                                                

                                            </div>
                                            
                                    {/* <img class="d-block w-100" src="..." alt="First slide"></img> */}
                                </div>
                                    )
                                })}
                                <div class="carousel-item active car-box" >
                                   
                                        <div className="row">
                                            <div className="col-xl-4 col-md-6">
                                                <img src={p1} alt="p1" className="poster"></img>
                                            </div>
                                            <div className="col-xl-8 col-md-6 dis-non">
                                                <h4 className="font-weight-bold">Tech Bites</h4>
                                                <div className="d-block w-100">
                                                    Being a community driven platform, anyone 
                                                    from anywhere will be exposed to all the internship opportunities that are out there.
                                                    Organisations can use it as a platform to see the students in all 
                                                    their merit, and choose 
                                                    to reward those who they see worthy.Being a community driven platform, anyone 
                                                    from anywhere will be exposed to all the internship opportunities that are out there.
                                                    Organisations can use it as a platform to see the students in all 
                                                    their merit, and choose 
                                                    to reward those who they see worthy.
                                                </div>
                                            </div>
                                        
                                    </div>
                                            
                                    {/* <img class="d-block w-100" src="..." alt="First slide"></img> */}
                                </div>
                                
                            </div>
                            
                        </div>

                    
                        
                        <div  className="caro-arrow">
                            <a class="car-a" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Events;