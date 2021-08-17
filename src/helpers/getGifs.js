
export const getGifs = async( category ) => {
   // se hace la petición HTTP para traer las imagenes gif
   const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=kosDPrQeAWRFfEe4qpy7V3a1XWuoESQL`;
   const resp = await fetch( url )
   const { data } = await resp.json();

   // solo nos traemos lo que necesitamos de la peticion a la APIaa
   const gifs = data.map( img => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url
      }
   })

   return gifs;
}