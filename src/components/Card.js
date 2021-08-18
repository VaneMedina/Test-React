import React from 'react'
import "./styles.css"



function Card({image}) {
    return (
        <div className="text-center card-blog">
                <img className="col-lg-12 col-md-12 col-sm-12 col-12" src={image} alt="Novedades sobre propiedades de la inmobiliaria"/>
        </div>
    )
}

export default Card
