import React, {useState} from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';
import Popup from './components/Popup';


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    popStat: false
  });

  const apiurl = "http://www.omdbapi.com/?apikey=7231ebbf";
  
  const movieSearch = (e) => {
    if(e.key === "Enter"){
      axios(apiurl + "&s=" + state.s).then(({data}) => {
        let results = data.Search;     
        setState(prevState => {
          return {...prevState, results:results}
        })
  
      });
    }
  }

  const openPopup = (res) => {
    setState(prevState => {
      return{
        ...prevState,
        selected:res,
        popStat: true
      }
    })
  }
  


  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return{...prevState, s: s }
    });
  }
  return (
    state.popStat===true ? <Popup selected={state.selected} /> :
      <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
        </header>
    <main>
        <Search 
        handleInput = {handleInput}
        movieSearch = {movieSearch}
        />
        <Results results={state.results} openPopup ={openPopup} />
        
      </main>
    </div> 
   
  );
}

export default App;
