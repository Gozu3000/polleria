import { useRef , useState } from "react"
import { Link } from "react-router-dom"
import '../../hojas-de-estilo/navbar.css'


export default function Header() {
 
  const ul_ = useRef(null)
  const [active, setActive] = useState(false);

  // function desplegar_menu (){
  //   ul_.current.className == ""? ul_.current.className = 'show' : ul_.current.className = '' 
    // ul_.current.classList.toggle("show");
  // }
  
  
  const desplegar_menu = () =>{
    setActive(!active);
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
            <Link to="/" className="nombre">
            Rostick
            </Link>        
        </span>

        {/* Ul al que se le dio clases por medio de estados */}

        <ul ref={ul_}
            className={`${active? "show": "" }`} 
        >


          <li>
              <Link to="/menu" className="enlace">
              Menu
              </Link>
          </li>
          <li>
              <Link to="/promociones" className="enlace">
              Promociones
              </Link>
          </li>
      
          <li>
              <Link to="/extras" className="enlace">
              Extras
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

