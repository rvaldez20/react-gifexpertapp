import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
   // Sedefine el state con un objeto vacio que tendra la data y el loading
   const [state, setState] = useState({
      data: [],
      loading: true
   });

   useEffect( () => {      
      // getGifs es una funcion async por lo que devuelve una promesa
      // Esta hace la petición HTTP a la API de GHIPY (imagens gif)
      getGifs( category )
         .then( imgs => {

            // setTimeout(() => {
               // console.log(imgs)
               
               setState({
                  data: imgs,
                  loading: false
               })               
            // }, 3000);

         })
   }, [category])

   return state; // retorrna {data:[], loading: true}

}