import React from 'react'
import "../styles/Sup-footer.css"
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'

function Footer() {
    return (
        <>
            <div id="contacto" className="sup-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <h4>¿Tomámos un café?</h4>
                            <p className="contact">
                                <a target="_blank" href="https://wa.me/5491134798081">WhatsApp 11-3479-8081</a>
                                <a target="_blank" href="tel:+54947975880">Tel. 4797-5880</a>
                                <a target="_blank" href="mailto:j.alvarez@bellagamba.com">j.alvarez@bellagamba.com</a>                        
                            </p>
                            <div className="social-media">
                                <img src={facebook}></img>
                                <img src={instagram}></img>
                                <img src={twitter}></img>
                            </div>
                        </div>
                        <div className="form col-lg-7 col-12">
                            <form className="row content-form">
                                <div className="col-lg-12 mb-1 mb-lg-4">
                                    <input required type="text" id="name" className="col-lg-10" placeholder="Nombre y apellido *"></input>
                                </div>
                                <div className="col-lg-12 mb-1 mb-lg-4">
                                    <input required type="email" id="email" className="col-lg-10" placeholder="Email *"></input>
                                </div>
                                <div className="col-6 mb-1 pr-0 p mb-lg-4">
                                    <input required type="tel" id="phone" className="col-lg-5 input" placeholder="Teléfono"></input>
                                </div>
                                <div className="col-6 mb-1 mb-lg-4">
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option defaultValue>Motivo *</option>
                                        <option value="1">Motivo 1</option>
                                        <option value="2">Motivo 2</option>
                                        <option value="3">Motivo 3</option>
                                    </select>
                                </div>
                                <div className="col-lg-12 mb-1 mb-lg-4">
                                    <textarea className="col-lg-10" placeholder="Mensaje *" name="mensaje" id="mensaje" autoComplete="on"required></textarea>
                                </div>

                                <h5 className="text-end">* Campos obligatorios</h5>
                                <div className="button">
                                    <button id="submit" className="btn field-submit" type="submit">CONTACTAME <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </form>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
