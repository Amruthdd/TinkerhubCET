import React from 'react';
// import { useEffect, useState } from 'react';
import Test from './Test';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";



function Events(){

    return (
        <Router>
          <div>
            <h2>Events</h2>
    
            <ul>
              <li>
                <Link to="/Townhall">Townhall</Link>
              </li>
              <li>
                <Link to="/DevOps">DevOps</Link>
              </li>
              <li>
                <Link to="/Hackathon">Hackathon</Link>
              </li>
            </ul>
    
            <Switch>
              <Route path="/:id" children={<Test />} />
            </Switch>
          </div>
        </Router>
      );
}


export default Events;