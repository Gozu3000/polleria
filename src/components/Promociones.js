import '../hojas-de-estilo/promociones.css'
import RFamiliar from './imagenes/rosticks_familiar.jpg'
import RFamiliarPostres from './imagenes/rosticks_familiar_postres.jpg'

export default function Promociones() {


  const Promocion1 = {
    nombre: '1 rosticks familiar',
    imagen: RFamiliar,
    precio: 60
  }

  const Promocion2 = {
    nombre: '1 rosticks familiar + postres',
    imagen: RFamiliarPostres,
    precio: 72
  }

  return (
   
    <div className='promociones'>
        <section className='section-cards-promociones'>

            <div className="card-promociones" >
                <div className='container-img-promociones'>
                  <img className='img-promociones' src={Promocion1.imagen} alt="card" />
                </div>
                
                <div className="text-card-promociones">
                  <h2 className='h2-promociones'>{Promocion1.nombre}</h2>
                  <p>S/.{Promocion1.precio}</p>
                </div>
            </div>


            <div className="card-promociones" >
                
              <div className='container-img-promociones'>
                <img className='img-promociones' src={Promocion2.imagen} alt="card" />
              </div>
              
              <div className="text-card-promociones">
                <h2 className='h2-promociones'>{Promocion2.nombre}</h2>
                <p>S/.{Promocion2.precio}</p>
              </div>

            </div>
  
        </section>
    </div>  

  );
}