import React from 'react'
import {useState, useEffect} from 'react'

const Recipe = () => {

    const [recipe, setRecipe] = useState();

    useEffect(()=>{
    async function getRecipe(){
        const id=1
        const response = await fetch(`https://climate-conscious-cooking.herokuapp.com/recipes/${id}`)
        const data= await response.json();
        console.log(data.payload)
        setRecipe(data.payload.title)


    }
    getRecipe();
}, [recipe])
    return (
        <div>
            <h1>{recipe}</h1>
        </div>
    )
}

export default Recipe