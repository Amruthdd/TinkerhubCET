import React from 'react';
import {Link} from 'react-router-dom'


function NavBar(){
    return(
        <div className="navbar">
            <div>
                <Link to='/' className='nav-link no-underline'>Home<hr/></Link>
                
                
            </div>
            <div>
                <Link to='/about' className='nav-link no-underline'>About</Link>
                
            </div>
            {/* <div>
                <Link className='nav-link no-underline'>Contact</Link>
                
            </div> */}
            
            
            
        </div>
    );
}

export default NavBar;