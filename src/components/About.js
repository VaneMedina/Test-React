import React from 'react'
import "./styles.css"  //Dejo estilos principales porque algo no me funciona cuando compilo a sass. Solucionar!
import agente from '../images/businessman.png'
import circulo from '../images/circulo.png'
import b from '../images/b-logo.png'
import firma from '../images/firma.png'

function About() {
    return (
        <>
        <section id="start" className="about">
            <div className="container-sm">
                <div className="row">

                <div className="text col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__fadeInLeft">
                    <h2>
                        <span>¡Hola!</span>
                        <span>Mi nombre es</span>
                        <span className="nombre-agente">Julián Alvarez</span>
                    </h2>
                        <span className="barra"></span>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor varius aliquam. Integer quis <strong>en Bellagamba</strong> gravida felis vel, molestie.
                    </p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectet onteger qui ur adipiscing elit.
                    </p>
                    <div className="firma text-center">
                        <img className="animate__animated animate__fadeInLeft" src={firma}></img>
                    </div>
                </div>

                    <div className="col-lg-7 col-md-10 col-sm-12 col-12">
                        <div className="agente col-lg-11 col-md-12 col-sm-12 col-12">
                            <img className="col-md-12 col-sm-12 col-12" src={agente}></img>
                        </div>
                        <div className="logo col-lg-3 offset-lg-10 col-md-3 offset-md-10 col-sm-4 offset-sm-9 col-3 offset-1">
                            <img className="rotating" src={circulo}></img>
                            <img className="logoB" src={b}></img>
                        </div>
                    </div>               
                </div>
            </div>
            <div className="last">

            </div>
            </section>
        </>
    )
}

export default About
