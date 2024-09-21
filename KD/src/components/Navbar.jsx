import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
    <ul className='nav-link'>
     <li><a>Home</a></li>
     <li><a>Publication</a></li>
     <li><a>Project</a></li>
     <li><a>CV</a></li>
     </ul>
    </nav>
  )
}

export default Navbar