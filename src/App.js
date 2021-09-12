import './App.css';
import { Filmer } from './pages';
import { useEffect, useMemo, useState } from 'react';
import { uniqueGenres, filterFilms, sceneSidebar, sceneContent, scenePlayer } from './utils';
import React from 'react';

function App() {
    const [scene, setScene] = useState('sideBar');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectGenreIndex, setSelectGenreIndex] = useState(1);
    const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);
    //Content
    const [arr2d, setArr2d] = useState([]);
    const [itemsLine, setItemsLine] = useState(null);
    const [selectFilm, setSelectFilm] = useState({ row: 0, item: 0 });
    const [selectedFilm, setSelectedFilm] = useState(null);
    //Player
  const [selectBtn, setSelectBtn] = useState(0);

  const handleKeys =(event) => {
        switch (scene) {
            case 'sideBar':
                sceneSidebar(event, selectGenreIndex,genres, setSelectGenreIndex, setScene, setSelectedGenreIndex);
                break;
            case 'content':
              sceneContent(event, setScene, setSelectFilm, selectFilm, itemsLine, arr2d, setSelectedFilm);
                break;
            case 'player':
              scenePlayer(event, setScene, setSelectBtn, selectBtn);
              break;
        }
    };

    const sortFilms = useMemo(() => {
        return filterFilms(films, genres, selectedGenreIndex);
    }, [films, selectedGenreIndex, genres]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeys);
        return () => {
            window.removeEventListener("keydown", handleKeys);
        };
    }, [selectGenreIndex, genres.length, scene, selectFilm, selectBtn]);



    useEffect(() => {
            const arr2d = [];
            const rows = Math.floor((sortFilms.length - 1) / itemsLine);
            for (let i = 0; i <= rows; i++){
                let sliceT = itemsLine * (i+1);
                arr2d.push(sortFilms.slice(i * itemsLine,sliceT));
            }
            setArr2d(arr2d);

    }, [ itemsLine, sortFilms]);



    useEffect(() => {
        fetch("http://localhost:3001/films")
          .then(res => res.json())
          .then(
            (data) => {
                setTimeout(() => {
                    setIsLoaded(true);
                    setFilms(data);
                    setGenres(uniqueGenres(data.map(item => item.genre_ids )).sort());
                }, 0);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
          );
    }, []);
  return (
    <div className="App">
        <div>{error && `somthing wrong, ${error}`}</div>

        {!isLoaded ? <div>{!isLoaded && 'Loading...'}</div> :
          <Filmer selectBtn={selectBtn}
                  selectedFilm={selectedFilm}
                  scene={scene} selectFilm={selectFilm}
                  films={sortFilms} setItemsLine={setItemsLine}
                  arr2d={arr2d}
                  genres={genres}
                  selectGenreIndex={selectGenreIndex - 1}
                  selectedGenreIndex={selectedGenreIndex} />}
    </div>
  );
}

export default App;
