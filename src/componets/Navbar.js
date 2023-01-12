import React from 'react'
import {Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Register'>Register</Link>
            <Link to='/delete/rollno'>DeleteStudent</Link>
            
        </div>

    </div>
  )
}

export default Navbar