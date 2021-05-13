import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/pages/about-page/About";
import Test from "./components/pages/test-page/Test";
import './components/pages/home-page/custom.css';
import Index from "./components/pages/home-page/Index";
import Events from "./components/pages/test-page/Events";



function App() {
  return (
    
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Index} />
            {/* <Route path='/login' component={Goals} /> */}
            <Route path='/about' component={About} />
            <Route path='/test' component={Test} />
            <Route path='/events' component={Events} />
           </Switch>
        </BrowserRouter>
  );
}

export default App;
