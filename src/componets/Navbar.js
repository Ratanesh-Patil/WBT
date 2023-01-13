import React from 'react'
import {Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Register'>Register</Link>
            <Link to='/view/name'>SearchStudent</Link>
            
        </div>

    </div>
  )
}

export default Navbar