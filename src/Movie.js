import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import  {CardContent}  from '@mui/material';
import CardActions from '@mui/material/CardActions';

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Counter } from "./Counter";

export function Movie({ movie, id, deleteButton,editButton }) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [ show, setShow ] = useState(true);
  // const summaryStyles={
  //   display:show ? "block" : "none",
  // }
  const navigate = useNavigate();
  return (

    <Card className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
         <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name} 
        <IconButton>
      <InfoIcon  
      color="primary" 
      onClick={() => navigate("/movies/" + id)}
      >
      </InfoIcon>
      </IconButton>
     <IconButton
             color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle Summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
        </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
     
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      </CardContent>
      <CardActions>
       <Counter />{ deleteButton} {editButton}
      </CardActions>  
    </Card>

  );
}