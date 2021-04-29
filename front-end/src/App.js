import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import './components/custom.css';
import Index from "./components/Index";



function App() {
  return (
    
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Index} />
            {/* <Route path='/login' component={Goals} /> */}
            <Route path='/about' component={About} />
           </Switch>
        </BrowserRouter>
    
        
    
  );
}

export default App;
