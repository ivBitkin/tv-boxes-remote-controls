import './App.css';
import { Filmer } from './pages';
import {useEffect, useState} from "react";
import { uniqueGenres } from './utils';
import React from 'react';

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectGenreIndex, setSelectGenreIndex] = useState(1);
    const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);



    useEffect(() => {
        fetch("http://localhost:3001/films")
            .then(res => res.json())
            .then(
                (data) => {
                    setTimeout(() => {
                        setIsLoaded(true);
                        setFilms(data);
                        setGenres(uniqueGenres(data.map(item => item.genre_ids )).sort());
                    }, 3000);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    const handleKeys =(event) => {

        switch (event.keyCode) {
            case 40:
                if(selectGenreIndex < genres.length) {
                    setSelectGenreIndex( prevState => prevState + 1);
                } else {
                    setSelectGenreIndex( 1);
                }
                break;
            case 38:
                if(selectGenreIndex > 1 ) {
                    setSelectGenreIndex( prevState => prevState - 1);
                } else {
                    setSelectGenreIndex( genres.length);
                }
                break;
            case 13:
                setSelectedGenreIndex(selectGenreIndex - 1);
                break;
            default:
                break;

        }


    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeys);
        return () => {
            window.removeEventListener("keydown", handleKeys);
        };
    }, [selectGenreIndex, genres.length]);



  return (
    <div className="App">
      <div>{!isLoaded && 'Loading...'}</div>
      <div>{error && `somthing wrong, ${error}`}</div>
      <Filmer films={films} genres={genres} selectGenreIndex={selectGenreIndex - 1} selectedGenreIndex={selectedGenreIndex} />
    </div>
  );
}

export default App;
