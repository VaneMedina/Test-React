import React, {useState} from 'react'
import arrow from '../images/arrow.png'
import "../styles/Banner.css"
import {Link} from 'react-scroll'

function Banner() {
    return (
        <>
            <section id="banner-main" className="banner">
                <div className="opacity">
                    <Link className="arrow" to="start" smooth={true} duration={900}>
                        <span><img src={arrow}></img></span>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Banner
