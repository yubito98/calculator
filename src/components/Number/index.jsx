import React from "react";
import "./Number.css";

const Number = ({data, color, onClick}) =>{

    let bgColor ="";

    if(color === "gray"){
        bgColor = "number-gray";
    }else if(color === "blue"){
        bgColor = "number-blue";
    }


    return(
        <div onClick={onClick}  id={data} className={`number ${bgColor}`}>
            {data}
        </div>
    )
}


export default Number;