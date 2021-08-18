import React, {useState} from 'react'
import "../styles/NavBar.css"
import Componente45 from '../images/Componente 45.png'
import Componente46 from '../images/Componente 46.png'
import Componente47 from '../images/Componente 47.png'
import {Link} from 'react-scroll'

function NavBar() {
    return (
        <>
        <header id="header">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link to="header" smooth={true} duration={900} className="navbar-brand">
                        <div className="brand">
                            <span  className="name-man">Julián Alvarez</span>
                            <span className="man">Consultor inmobiliario </span>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon"><i className="fas fa-bars"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="me-auto"></div>
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link link" to="start" smooth={true} duration={900}>Bio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link" to="featuredProps" smooth={true} duration={900}>Propiedades</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link" to="blog" smooth={true} duration={900}>Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link contacto" to="contacto" smooth={true} duration={900}>Contacto</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link media" href="#"><img src={Componente45} alt="logo-facebook"></img></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link media" href="#"><img src={Componente46} alt="logo-facebook"></img></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link media" href="#"><img src={Componente47} alt="logo-facebook"></img></a>
                                    </li>

                                </ul>
                        </div>

                </div>
            </nav>
    </header>
        </>
    )
}

export default NavBar
