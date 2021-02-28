import React, { useState } from 'react'
import {AddCategory} from '../component/AddCategory'
import GifGrid from './GifGrid'
const GifExpertApp =() => {

//const categories = ['bleach', 'dragon ball super', 'naruto']//lo mismo pero a una constante debe ser estatic


const [categories, setCategories] = useState([ 'dragon ball super'])
/*const handleAdd= ()=>{
    //setCategories([...categories,'one piece'])
    setCategories(cats=>[...cats,'one piece'])
}*/

    return(
<>
<h2>Gif Expert App</h2>


{/*<button onClick={handleAdd}>agregar</button>*/}
<AddCategory  setCategories={setCategories}/>
<hr />
<ol>
{
categories.map(category=>
   <GifGrid key={category} category={category} />
)

}

</ol>
 
</>
    )
}
export default GifExpertApp;

