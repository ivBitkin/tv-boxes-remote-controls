import { SideBar, Content } from '../../components';
import { Container, FirstScene} from "./styles";
import React from 'react';
import { filmerTypes } from '../../propTypes';
import { useWindowDimensions } from '../../hooks';
import { Player } from '../../components/Player';

export const Filmer = ({ selectBtn, selectedFilm, selectFilm, genres, selectGenreIndex, selectedGenreIndex, arr2d, setItemsLine, scene }) => {
    const { width } = useWindowDimensions();
    return <Container width={width} changeFocus={scene}>
        <FirstScene width={width} changeFocus={scene}>
            <SideBar scene={scene}  genres={genres} selectGenreIndex={selectGenreIndex} selectedGenreIndex={selectedGenreIndex}  />
            <Content scene={scene} selectFilm={selectFilm} setItemsLine={setItemsLine} arr2d={arr2d} >Films</Content>
        </FirstScene>
        {selectedFilm && <Player selectBtn={selectBtn} selectedFilm={selectedFilm} scene={scene} />}

    </Container>;
};

Filmer.propTypes = filmerTypes;
