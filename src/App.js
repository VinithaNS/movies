import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import { useState} from "react";

import { Routes, Route,Navigate,useNavigate} from "react-router-dom";

import  {AddColor}  from './AddColor';
import { AddMovie } from "./AddMovie";
import './App.css';
import "./App.css";
import  EditMovie from "./EditMovie";
import  {Home}  from './Home';
import { MovieDetails } from './MovieDetails';
import { MovieList } from './MovieList';
import { NotFoundPage } from './NotFoundPage';




export default function App(){
 const navigate = useNavigate();
  const [mode,setMode]=useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return(
    <ThemeProvider theme={theme}>
        <Paper elevation={4} style={{minHeight:"100vh"}}>

    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"   onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit"  onClick={() => navigate("/movies")}>Movies</Button>
          <Button color="inherit"   onClick={() => navigate("/movies/add")}>Add Movie</Button>
          {/* <Button color="inherit"   onClick={() => navigate("/movies/edit")}>edit Movie</Button> */}
          <Button color="inherit" onClick={() => navigate("/color-game")}>Color game</Button>
          <Button
          style={{marginLeft:"auto"}} 
          startIcon={
            mode==="dark"?
          <Brightness7Icon />:<Brightness4Icon />
        }
          color="inherit" 
          onClick={() =>setMode (mode==="dark"?"light":"dark")}>
           {mode==="dark"?"light":"dark"} mode
            </Button>
        </Toolbar>
      </AppBar>
      </Box>
    <div className="router-container">
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies"/>} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails   />} />
        {/* : dynamically matches route */}
        <Route path="/movies/add" element={<AddMovie />} />
         <Route path="/movies/edit/:id" element={<EditMovie />} /> 
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      {/* "*"-to match anything */}
      </Routes>
    </div>
    </div>
  </Paper >
  </ThemeProvider>
  );
}
