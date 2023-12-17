import { Link, NavLink } from "react-router-dom";
import './Header.css'
import React from "react";


export default function header() {
  return (
    <div className='header'>
      <span>THE COMPANY</span>

      {/* <span>{props.meta.name} </span> */}


      <ul className='header_nav'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/users">Users</NavLink>
        </li>

        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>

        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}



// Header.defaultProps = {
//   meta: {
//     name: 'the company',
//   }
// }