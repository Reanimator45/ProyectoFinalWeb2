import { useEffect,useState } from "react";
import Movie from "./Movie";



const Peliculas = () => {
  const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page=";
const [popular, setPopular] = useState([]);
useEffect(() => {
  fetchPopular();
}, []);
const fetchPopular = async () => {
  const data = await fetch(url);
  const Movies = await data.json();
  console.log(Movies);
  setPopular(Movies.results);
};



  return (
    <div className="pelis">

<h1>Ultimos Estrenos</h1>
<div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
        
    </div>
  )
}

export default Peliculas