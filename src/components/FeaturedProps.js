import React from 'react'
import "../styles/FeaturedProps.css"
import featuredProps from '../images/Captura de pantalla 2021-08-10 a las 15.14.45.png'


function FeaturedProps() {
    return (
        <>
            <section id="featuredProps" className="featured-props">
                <div className="container-fluid">
                    <h3>
                        <span>Propiedades </span>
                        <span className="featured">destacadas</span>
                    </h3>
                        <div className="">
                            <div id="props" className="props"></div>
                        </div>
                    <div className="text-center">
                        <a className="btn">Ver todas las propiedades</a>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default FeaturedProps
