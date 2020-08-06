import React from 'react';

function Search ({handleInput, movieSearch}) {
    return (
        <section className="searchbox-wrap">
        <input type="text" 
        className="searchbox"
         placeholder="search for a movie.."
         onChange = {handleInput}
         onKeyPress = {movieSearch}
         />

        </section>
    )
}

export default Search