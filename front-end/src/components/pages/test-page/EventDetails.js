import React from 'react';
import Test from './Test';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";



function EventDetails(){

    return (
        <Router>
          <div>
            <h2>Events</h2>
    
            <ul>
              <li>
                <Link to="/eventDetails/Townhall">Townhall</Link>
              </li>
              <li>
                <Link to="/eventDetails/DevOps">DevOps</Link>
              </li>
              <li>
                <Link to="/eventDetails/Hackathon">Hackathon</Link>
              </li>
            </ul>
    
            <Switch>
              <Route path="/eventDetails/:id" children={<Test />} />
            </Switch>
          </div>
        </Router>
      );
}


export default EventDetails;