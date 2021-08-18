import React from 'react'
import Card from './Card'
import image3 from '../images/card6.png'
import image1 from '../images/card5.png'
import image2 from '../images/card4.png'

const cards = [
    {
        id : 1,
        image: image3,
    },
    {
        id : 2,
        image: image1,

    },
    {
        id : 3,
        image: image2,
    }
]


function Cards() {
    return (
        <div className="container-fluid align-items-center">
            <div className="row d-flex justify-content-center">
                {
                    cards.map(card => (
                        <div className="img-blog col-lg-4 col-md-12 col-sm-12" key={card.id}>
                            <Card image={card.image}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Cards
