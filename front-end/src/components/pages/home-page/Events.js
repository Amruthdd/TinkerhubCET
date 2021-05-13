import React from 'react';
import {eventData} from './data';

function Events(){
    return (
        <div className="events-main">
            <div className="page-title" >Events</div>
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
                                            <h4 className="font-weight-bold">{data.title}</h4>
                                            <div className="d-block w-100">
                                            {data.desc}
                                            </div>
                                    {/* <img class="d-block w-100" src="..." alt="First slide"></img> */}
                                </div>
                                    )
                                })}
                                <div class="carousel-item active car-box" >
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