import React from "react";
import MenuBar from'./MenuBar';
import '../hojas-de-estilo/polleria.css';


function polleria() {
  return (
    <div>
        
        <div className="contenedor-header">
        <div className="header">
            <div className="div-img">
                <p>Rosticks</p>
            </div>
            <div>
                <ul>
                    <li><a href="./polleria.html">Pollos a la brasa</a> </li>
                    <li><a href="./extras.html">Bebidas</a> </li>
                    <li><a href="./promociones.html">Promociones</a> </li>
                </ul>
            </div>
        </div>
    </div>
   
        
        <div className="div-span">
            <span>Pollos a la brasa</span>
        </div>
        <div className="section_cards">
            <div className="card">
                <img src="https://alfabetajuega.com/hero/2022/08/Todas-las-victorias-de-Goku-poseen-un-extrano-elemento-en-comun.jpg?width=768&aspect_ratio=16:9&format=nowebp" alt="card" width="130" height="94"/>
                
                <div className="text-card">
                    <h2>1/2 pollo + papas + ensalada + 2 gaseosas</h2>
                    <p>1/2 pollo + papas fritas + ensalada + 2 gaseosas de 500 ml</p>
                </div>
            </div>
            <div className="card">
                <img src="https://alfabetajuega.com/hero/2022/08/Todas-las-victorias-de-Goku-poseen-un-extrano-elemento-en-comun.jpg?width=768&aspect_ratio=16:9&format=nowebp" alt="card" width="130" height="94"/>
                
                <div className="text-card">
                    <h2>1/2 pollo + papas + ensalada + 2 gaseosas</h2>
                    <p>1/2 pollo + papas fritas + ensalada + 2 gaseosas de 500 ml</p>
                </div>
            </div>
            <div className="card">
                <img src="https://alfabetajuega.com/hero/2022/08/Todas-las-victorias-de-Goku-poseen-un-extrano-elemento-en-comun.jpg?width=768&aspect_ratio=16:9&format=nowebp" alt="card" width="130" height="94"/>
                
                <div className="text-card">
                    <h2>1/2 pollo + papas + ensalada + 2 gaseosas</h2>
                    <p>1/2 pollo + papas fritas + ensalada + 2 gaseosas de 500 ml</p>
                </div>
            </div>
            <div className="card">
                <img src="https://alfabetajuega.com/hero/2022/08/Todas-las-victorias-de-Goku-poseen-un-extrano-elemento-en-comun.jpg?width=768&aspect_ratio=16:9&format=nowebp" alt="card" width="130" height="94"/>
                
                <div className="text-card">
                    <h2>1/2 pollo + papas + ensalada + 2 gaseosas</h2>
                    <p>1/2 pollo + papas fritas + ensalada + 2 gaseosas de 500 ml</p>
                </div>
            </div>

        </div>
    

        <footer>
            <a>* Las imágenes y precios son referenciales</a>
            <a  href="#" className="link">Aplican términos y condiciones</a>
            <p>Contáctanos: <span>932 342 789</span></p>
        </footer>

    </div>
  );
}

export default polleria;