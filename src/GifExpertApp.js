import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories,setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     setCategories(['Hunter',...categories]);
    // }
    // <button onClick={handleAdd}>Agregar</button>

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            
            
            <ol>
                {
                    categories.map(c => (
                        <GifGrid 
                        key={c}
                        c={c}
                        />
                    ))
                }
            </ol>

        </div>
    )
}