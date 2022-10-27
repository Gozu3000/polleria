import React from "react";
import '../../hojas-de-estilo/footer.css'


const Footer = () =>{

return (  
    <div className="footer">
       
        <div className="footer-section1">

            <div className="footer-section1-bloque1">
                <h2>Nosotros</h2>
                <p>Políticas de privacidad</p>
                <p>Manual de atención de derechos</p>
                <p>Atención de derechos ARCO</p>
                <p>Términos y condiciones de promociones</p>
            </div>

            <div className="footer-section1-bloque2">
                <h2>Servicios</h2>
                <p>Mapa de reparto</p>
                <p>Promociones</p>
                <p>Carta Restaurantes</p>
                <p>Carta Patio de comida</p>
                <p>Facturación Electrónica</p>
            </div>

            <div className="footer-section1-bloque3">
                <h2>Contáctanos</h2>
                <p>Locales en Lima</p>
                <p>Locales en Provincia</p>
            </div>

        </div>


        <div className="footer-section2">
            <div>
                <p>© 2020, Rocket | Todos los derechos reservados.</p>
            </div>

            <div>
                <p>Síguenos en:
                    <span className="footer-section2-span span-fa-facebook">
                        <i className="fa-brands fa-facebook"></i>
                    </span>

                    <span className="footer-section2-span span-fa-instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </span>
                </p>
            </div>

            </div>

        {/* git checkout -b development // 2do commit al rama development */}

    </div>

)

}
export default Footer