import React from 'react'
import './style.css'

const NavBar = (props) => {
    
    return (
        <nav className="navbar navbar-light navconfig a justify-content-between fixed-top" >
            <a className="navbar-brand">Painel Administrativo</a>
            <div className="mr-sm-6">
                <ul className="nav">
                    <li className="nav-item mr-sm-3"><a className="butaoNavbar" href="https://www.mypharma.com.br/">MyPharma</a> </li>
                </ul>
            </div>
            <div className="mr-sm-2">
                <ul className="nav">
                    <li className="nav-item mr-sm-2">Usuario</li>
                    <li className="nav-item mr-sm-2"></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;