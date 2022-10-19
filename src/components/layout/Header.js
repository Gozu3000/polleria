import { useRef , useState } from "react"
import { Link } from "react-router-dom"
import '../../hojas-de-estilo/navbar.css'


export default function Header() {
 
  const [active, setActive] = useState(false);

  
  const desplegar_menu = () =>{
    setActive(!active);
  }

  const cerrarMenu=()=>{
    setActive(false)
  }


  return (

    <div>
      <nav>
        <button 
          className="hamburger hamburger--spring" 
          type="button"
          onClick={desplegar_menu}
          >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <span className="span_nombre">
            <Link to="/" className="nombre" onClick={cerrarMenu}>
            Rocket
            </Link>        
        </span>

        {/* Ul al que se le dio clases por medio de estados */}
       
          <ul className={`div_ul ${active? "show": "" }`}>
              <li>
                  <Link to="/menu" className="enlace" onClick={cerrarMenu}>
                  Menu
                  </Link>
              </li>

              <li>
                  <Link to="/promociones" className="enlace" onClick={cerrarMenu}>
                  Promociones
                  </Link>
              </li>
          
              <li>
                  <Link to="/extras" className="enlace" onClick={cerrarMenu}>
                  Extras
                  </Link>
              </li>
          </ul>
      </nav>
    </div>
  )
}

