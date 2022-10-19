import { useRef } from 'react'
import '../hojas-de-estilo/extras.css'
import extras1 from './imagenes/extras1.png'
import extras2 from './imagenes/extras2.jpg'
import extras3 from './imagenes/extras3.png'
import extras4 from './imagenes/extras4.png'
 
export default function Promociones() {

  class Extras{
    constructor(nombre,imagen){
      this.nombre = nombre
      this.imagen = imagen
  }}

  const extra1 = new Extras('gaseosa personal',extras1)
  const extra2 = new Extras('chicha morada',extras2)
  const extra3 = new Extras('agua natural',extras3)
  const extra4 = new Extras('gaseosa 1/2 L',extras4)


  const imgExtras = [extra1, extra2, extra3, extra4]
  

  return (
    <div className='extras'>
        <section className='section-cards'>
          {
            imgExtras.map((el, index)=>(

              <div className="card" key={index}>

                  <div className='container-card'>
                    <img className='card-img' src={el.imagen} alt="card" />
                  </div>
                  
                  <div className="text-card">
                    <h2 className='section-cards-h2'>{el.nombre}</h2>
                  </div>

              </div>               
          ))}
        </section>
    </div>
  );
}