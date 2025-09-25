import './Nav.css'
import React from 'react'

const Nav = () => (
    <aside className="menu-area">
        <nav className="menu">
            {/* Menu principal */}
            <a href="#/">
                <i className="fa-solid fa-house"></i> Início
            </a>
            <a href="#/users">
                <i className="fa-solid fa-people-roof"></i> Club Managers
            </a>
            <a href="#/products">
                <i className="fa-solid fa-football"></i> Athletes
            </a>
            <a href="#/reports">
                <i className="fa fa-bar-chart"></i> Filosophy
            </a>
            <a href="#/settings">
                <i className="fa fa-cog"></i> Configurações
            </a>
        </nav>
    </aside>
)

export default Nav
