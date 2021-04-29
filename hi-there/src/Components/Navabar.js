import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);

    // console.log(props);

    return (
        // <nav className="nav-wrapper red darken-3">
        //     <div className="container">
        //         <a className="brand-logo" href = "/" >Poke Times </a>

        //             <ul className = "right">
        //                 <li><Link to="/">Home</Link></li>
        //                 <li><NavLink to="/about">About</NavLink></li>
        //                 <li><NavLink to="/contact">Contact</NavLink></li>
        //             </ul>
        //     </div>
        // </nav>

      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}

export default withRouter(Navbar);