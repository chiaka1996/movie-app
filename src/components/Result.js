import React from 'react';

function Result ({result, openPopup}){
    return(
        <div className="result" onClick = {()=> openPopup(result)} >

        <img src={result.Poster} alt="poster" />
        <div className="title">
        <h3>{result.Title}</h3>
        </div>
        
        </div>
    )
}

export default Result