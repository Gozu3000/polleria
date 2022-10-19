import React from "react";
import '../hojas-de-estilo/home.css'
import Principal from './imagenes/principal.png'

function Home() {
  return (
    <div className="home">
        
        <div className="container-img">
          <img src= {Principal} alt="foto-home" />
        </div>

    </div>
  );
}

export default Home;    