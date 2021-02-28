import React, { useState } from 'react'

export  const AddCategory = ({/*7*/setCategories}) => {





  /*1*/ const [inputValue, setInputValue] = useState(' ')


  /*3*/ const handleInputChange = (e)=>{
setInputValue(e.target.value)
   }

/*6*/   const handleSubmit = (e) =>
   {
        e.preventDefault();

        if( inputValue.trim().length>1){
   /*prueba*/    console.log('submit hecho')
    /*8*/    setCategories(cats=>[inputValue,...cats])
 /*9*/   setInputValue(' ')


        }
 
   }
   





    return (
    /*5*/    <form onSubmit={ handleSubmit} >
       
            
           <input 
           type="text"
         /*2*/  value={inputValue}
      /*4*/     onChange={handleInputChange}
           />
        </form>
    )
}

