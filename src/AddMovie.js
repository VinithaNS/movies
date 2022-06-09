import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {API} from "./global";

export function AddMovie() {
  const [ name, setName ] = useState("");
  const [ poster, setPoster ] = useState("");
  const [ rating, setRating ] = useState("");
  const [ summary, setSummary ] = useState("");
  const [ trailer, setTrailer ] = useState("");
  // const newMovie = {
  //   name,
  //   poster,
  //   rating,
  //   summary,
  //   trailer
  // };
  // console.log(newMovie);
   const navigate=useNavigate();
    // const addMovie = () => {
    // const newMovie = {
    //   name,
    //   poster,
    //   rating,
    //   summary,
    //   trailer
    // };
    // console.log(newMovie);
    
   
    // post method-fetch
    // 1.method-post 
    // 2.data(newMovie)-body&JSON
    // 3.header-JSOn
    // After movie creation->/movies
    function addMovie() {
      const newMovie = {
        name,
        poster,
        rating,
        summary,
        trailer
      };
      console.log(newMovie);
      fetch(`${API}/moviedata`, {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: { "Content-Type": "application/json" },
      }).then(()=>navigate("/movies"));
    }
    
  //   fetch(`${API}/moviedata`,{
  //     method:"POST",
  //     body:JSON.stringify(newMovie),
  //     headers:{
  //       "Content-Type":"application/json",
  //     },
  //   }).then(()=>navigate("/movies"))
    
  // };
  
  
 
  return (
    <div>
      <div className="add-movie-form">
      <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name" variant="outlined" />
      <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster" variant="outlined" />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating" variant="outlined" />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary" variant="outlined" />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer" variant="outlined" />
        <Button
          onClick={addMovie}
          variant="contained"
      >Add Movie</Button>
      </div>

    </div>
  );
}