import React from "react";

const SearchBox = (props)=>{
    const onInputChange = (event)=>{
        event.preventDefault();
        props.onChange(event.target.value);
    }

    return (
        <div>
            <h1>search works</h1>
            <input type="text" value={props.postId} onChange={(event)=>onInputChange(event)}></input>
        </div>
    );
} 

export default SearchBox;