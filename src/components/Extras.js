import { useEffect, useState } from "react";
import '../hojas-de-estilo/extras.css'

export default function Promociones(props) {
  const [data, setData] = useState(null);
  const [arrpromo, setArrpromo] = useState([]);


  useEffect(() => {
    fetch("https://62f665ab612c13062b4d9463.mockapi.io/polleria")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setArrpromo(data.filter(e => e.tipo === 'extras'))

      });
  }, []);


  return (
    <div className='extras'>

        <section className='section-cards'>
        {
            data === null? ''
            :
            arrpromo.map((e) => (

                <div className="card" key={e.id}>
                    
                  <div className='container-card'>
                    <img className='card-img' src={e.imagen} alt="card" />
                  </div>
                  
                  <div className="text-card">
                    <h2 className='section-cards-h2'>{e.nombre}</h2>
                  </div>

                </div>
            ))

        }

        </section>
    </div>

  );
}