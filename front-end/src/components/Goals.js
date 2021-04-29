import React from 'react';
import social from './images/social.png'

function Goals(){
    return (
        <div className="goal-main">
            <div>
                <div className="page-title" >Goals</div>
                <div className="box-container  d-flex">
                    <div >
                        <div className="goal-box">
                            <div className="number">1</div>
                                <div>
                                    <div>Focus on Community:​ To bring about a peer to peer 
                                        learning culture in the campus, 
                                        which unfortunately doesn’t exist at the moment.
                                    </div>
                                    <div className="under-line"></div>
                                </div>
                        </div>
                        </div>
                    
                        <div >
                            <div className="goal-box container" style={{float:"right",textAlign:"right"}}>
                            
                                <div>
                                    <div>Community driven Activities:Focus on 
                                        spreading opportunities to the right set of people,
                                        we witness opportunities being publicised, but not 
                                        always does it reach its target audience. 
                                    </div>
                                    <div className="under-line l2"></div>   
                                </div>
                                <div className="number">2</div>    
                                   
                            </div>
                        
                    </div>
                    <div>
                        <div className="goal-box" style={{marginTop:100}}>
                            <div className="number">3</div>
                                <div>
                                    <div>Focus on Community:​ To bring about a peer to peer 
                                        learning culture in the campus, 
                                        which unfortunately doesn’t exist at the moment.
                                    </div>
                                    <div className="under-line"></div>
                                </div>
                        </div>
                    </div>
                    
                        
                    
                </div>
                <div className="goal-vector">
                    <img  src={social} alt="hel3"></img>
                </div>
            </div>
            
            
        </div>
    );
}


export default Goals;