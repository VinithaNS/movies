import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {useEffect,useState} from "react";

import { useNavigate } from "react-router-dom";

import { Movie } from "./Movie";
import {API} from "./global";

export function MovieList(){
  const[movieList, setMovieList]=useState([]);
  
  const getMovies=()=>{
    fetch(`${API}/movies`,{method:"GET"})
    .then((data)=>data.json())
    .then((movies)=>setMovieList(movies));
  };
  useEffect(()=> getMovies(),[]);
  const deleteMovie=(id)=>{
    console.log("Deleting movie:",id);
 
  
  fetch(`${API}/movies/${id}`,{method:"DELETE"})
  .then(()=>getMovies());
 };

  const navigate=useNavigate();
return (
    <div>
    <div className="movie-list">
   {movieList.map((mv)=> (
    <Movie key={mv.id} 
    movie={mv} id={mv.id} 
    deleteButton={
      <IconButton 
      onClick={()=>deleteMovie(mv.id)}
      style={{marginLeft:"auto"}} 
      aria-label="delete"
      color="error"
      >
      <DeleteIcon/>
      </IconButton>
   
  }
 editButton={
  <IconButton 
  onClick={()=>navigate(`/movies/edit/${mv.id}`)}
   
   aria-label="edit"
   color="secondary"
   >
   <EditIcon/>
   </IconButton>
  
 
}
/>
  ))}
</div>
</div>
);
}