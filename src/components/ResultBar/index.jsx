import React from "react";
import "./ResultBar.css";

const ResultBar = ({value}) =>{
    return(
        <div className="result-bar form-control mb-4">
            {value}
        </div>
    )
}


export default ResultBar;