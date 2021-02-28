import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({/*1*/category}) => {
/*5 */
useEffect(() => {
    getGifs()
}, []) //con esto no se devuelve varias veces mi arreglo del api
const [images, setimages] = useState([])


/*3 obtener datos del api*/  


 const getGifs=async() =>
{
     const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=41Wansat7zXPeWhBR6yOu9NXdpC1mKCK`
    const resp= await fetch(url)
    const {data} = await resp.json();  
    console.log(data);
    
    /*4 seleccionar algunos datos del api*/ 
 const gif = data.map( img =>{
     return {
         id: img.id,
         title: img.title,
         url : img.images?.downsized_medium.url
        }
 })

 setimages(gif)

}


    return (
     <>   
     {/*2*/} <h3>{category}</h3>
   
      
            {
                images.map( img =>
                    <GifGridItem 
                    key={img.id} 
                    {...img}
                    
                    />
                    
                    )
            }

     

  

    </>
    )
}

export default GifGrid
