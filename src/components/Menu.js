import React from 'react'
import '../hojas-de-estilo/menu.css'
import menu1 from './imagenes/menu1.png'
import menu2 from './imagenes/menu2.png'
import menu3 from './imagenes/menu3.png'
import menu4 from './imagenes/menu4.png'


 export default function Menu(){

    class Plato {
        constructor(nombre,imagen,precio){
            this.nombre = nombre
            this.imagen = imagen
            this.precio = precio
    }}

    const men1 = new Plato('1/4 pollo + papas + ensalada', menu1, 16)
    const men2 = new Plato('1/4 pollo + papas + ensalada', menu2, 20)
    const men3 = new Plato('1/4 pollo + papas + ensalada', menu3, 31)
    const men4 = new Plato('1/4 pollo + papas + ensalada', menu4, 38)

    const arrayMenues = [men1, men2, men3, men4]

    return( 
            <div className='menu'>
            {
                arrayMenues.map((e,index)=>(
                    <div key={index} className='card-menu'>
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
