import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <aside className="menu-area">
        <nav className="menu">
            {/* Menu principal */}
            <Link to="/">
                <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link to="/users">
                <i className="fa-solid fa-people-roof"></i> Club Managers
            </Link>
            <Link to="/clients">
                <i class="fa-solid fa-ranking-star"></i> Athletes
            </Link>
            <Link to="/settings">
                <i className="fa-solid fa-gears"></i> Settings
            </Link>
            <Link to="/contact">
                <i className="fa-solid fa-paper-plane"></i> Contact
            </Link>
        </nav>
    </aside>
)

export default Nav
