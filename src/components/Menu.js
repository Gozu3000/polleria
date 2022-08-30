import React from 'react'
import { useEffect, useState } from 'react'
import '../hojas-de-estilo/menu.css'


const Menu = () =>{

    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("https://62f665ab612c13062b4d9463.mockapi.io/polleria")
        .then((response) => response.json())
        .then((data) => {
            setData(data.filter(e => e.tipo === 'pollos a la brasa'))
        });
    }, []);


    return( 
                <div className='menu'>
                {
                    data === null? ''
                    :
                    
                    data.map((e)=>(

                        <div key={e.id} className='card-menu'>
                            <div className='img-menu-container'>
                                <img src= {e.imagen} alt={e.nombre} className='img-menu' />
                            </div>
                            <h2>{e.nombre}</h2>
                            <h3>S/. {e.precio}</h3>
                        
                        
                        </div>
                    ))
                
                }
                    
                </div>

    )
}
export default Menu