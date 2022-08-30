import { useEffect, useState } from "react";
import '../hojas-de-estilo/promociones.css'

export default function Promociones(props) {
  const [data, setData] = useState(null);
  const [arrpromo, setArrpromo] = useState([]);


  useEffect(() => {
    fetch("https://62f665ab612c13062b4d9463.mockapi.io/polleria")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setArrpromo(data.filter(e => e.tipo === 'promocion'))
        // let arr = []
        // data.map((elemento) => {
        //     if(elemento.tipo === 'promocion'){
        //         arr.push(elemento)
        //         setArrpromo(arr)
        //     }
        //   })

      });
  }, []);


  return (
   
    <div className='promociones'>

        <section className='section-cards-promociones'>
        {
            data === null? ''
            :
            arrpromo.map((e) => (

                <div className="card-promociones" key={e.id}>
                    
                  <div className='container-img-promociones'>
                    <img className='img-promociones' src={e.imagen} alt="card" />
                  </div>
                  
                  <div className="text-card-promociones">
                    <h2 className='h2-promociones'>{e.nombre}</h2>
                    <p>S/.{e.precio}</p>
                  </div>

                </div>
            ))

        }

        </section>
    </div>  

  );
}