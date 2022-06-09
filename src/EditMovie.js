import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useState ,useEffect} from "react";

import { useNavigate ,useParams} from "react-router-dom";

import { API } from "./global";

function EditMovie() {
  const { id } = useParams();
  const [ movie, setMovie ] = useState(null);
  useEffect(() => {
    fetch(`${API}/moviedata/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [ id ]);


  return (
    <div>
      {/* <pre>{JSON.stringify(movie,null,2)}</pre> */}
      {movie ? <EditMovieForm movie={movie} /> : "Loading...."}
    </div>
  );
}
function EditMovieForm({ movie }) {
  const [ name, setName ] = useState(movie.name);
  const [ poster, setPoster ] = useState(movie.poster);
  const [ rating, setRating ] = useState(movie.rating);
  const [ summary, setSummary ] = useState(movie.summary);
  const [ trailer, setTrailer ] = useState(movie.trailer);
  const navigate = useNavigate();
  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer
    };

    console.log(updatedMovie);
    fetch(`${API}/moviedata/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));

    
  };
  return (
    <div>
      <div className="add-movie-form">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name" variant="outlined" value={name} />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          label="Poster" variant="outlined" value={poster} />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          label="Rating" variant="outlined" value={rating} />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary" variant="outlined" value={summary} />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer" variant="outlined" value={trailer} />
        <Button
          onClick={editMovie}
          variant="contained"
        >Save</Button>
      </div>

    </div>
  );

}
 export default EditMovie;