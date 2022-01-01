import React from "react";

const Categories = ({categories, onSetSelectedCategory})=>{
    const catOnClick = (event)=>{
        event.target.checked ? onSetSelectedCategory(event.target.value) : onSetSelectedCategory('');
    }

    const category = ()=>{
        return categories.map((cat)=>{
            return (
                <div key={cat.id}>
                    <input 
                        type="checkbox"
                        name={cat.categories}
                        value={cat.categories}
                        onClick={(e)=>{catOnClick(e)}} 
                    />
                    <label>{cat.categories}</label>
                </div>
            );
        })
    }

    return category();
}

export default Categories;