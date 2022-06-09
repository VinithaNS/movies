import Button from '@mui/material/Button';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import {useEffect,useState} from "react";

import { useNavigate, useParams } from "react-router-dom";

import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
 const [movie,setMovie] = useState({});
  useEffect(()=>{
    // fetch(`${API}/moviedata/${id}`)
    // .then((data)=>data.json())
    // .then((mv)=>setMovie(mv));
    // },[id]);
  
    async function getMovie(){
      const data= await fetch(`${API}/moviedata/${id}`)
      const mv=await data.json()
      setMovie(mv)
    }
    getMovie();
  },[id]);
  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  return (
    <div>
       <iframe
        width="100%"
        height="570"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name} </h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<ArrowBackIosOutlinedIcon />}
          onClick={() => navigate(-1)}
          variant="contained">Back
        </Button>

      </div>
    </div>
  );
}