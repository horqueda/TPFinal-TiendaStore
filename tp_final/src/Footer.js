import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
        {/* Column1 */}
          <div className="col">
            <h4>TIENDA STORE</h4>
            <ui className="list-unstyled">
              <li>Buenos Aires</li>
              <li>Capital Federal</li>
              <li>Argentina</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Locales</h4>
            <ui className="list-unstyled">
              <a href="http://dotbairesshopping.com/"> DOT BAIRES</a>
              <br/>
              <a href="https://www.unicenter.com.ar/">UNICENTER</a>
              <br/>
              <a href="http://www.altopalermo.com.ar">ALTO PALERMO</a>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contacto</h4>
            <ui className="list-unstyled">
              <a href="https://twitter.com/">Twitter</a>
              <br/>
              <a href="https://www.facebook.com/">Facebook</a>
              <br/>
              <a href="https://www.instagram.com/">Instagram</a>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Programacion de entornos de trabajo | All rights reserved |
            Terms Of Service | Privacy | Desarrollado por HO Solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;