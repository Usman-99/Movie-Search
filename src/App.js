import './App.css';
import SearchIcon from "./search.svg"
import {useState, useEffect } from 'react';
import MovieCard from './MovieCard';
// 3e219e97
const API_URL="http://www.omdbapi.com?apikey=3e219e97";
function App() {
  const [movie, setmovie] = useState([])
  const [searchTerm, setsearchTerm] = useState('')
  const searchMovies=async (title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();
    setmovie(data.Search)}
    useEffect(()=>{
      searchMovies('Spiderman')
    },[])
  return (
<div className='app'>
<h1>MovieLand</h1>
<div className="search">
  <input type="text" placeholder='Search for movies:' value={searchTerm} onChange={(e)=>{
    setsearchTerm(e.target.value)
  }}/>
  <img src={SearchIcon} alt="search" onClick={()=>{
    searchMovies(searchTerm)
  }} />
</div>
{ movie.length>0? 
(<div className="container">
  {movie.map((movie)=>(
    <MovieCard movie={movie}/>
  ))}
</div>) : (<div className='empty'><h2>NO MOVIES FOUND</h2> </div>)
}

</div>
  );
}

export default App;
