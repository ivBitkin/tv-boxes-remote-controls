import { SideBar, Content } from '../../components';
import { Container } from "./styles";
import React from 'react';
import { filmerTypes } from '../../propTypes';

export const Filmer = ({ genres, selectGenreIndex, selectedGenreIndex, films }) => {
    return <Container>
        <SideBar genres={genres} selectGenreIndex={selectGenreIndex} selectedGenreIndex={selectedGenreIndex}  />
        <Content films={films}>Films</Content>
    </Container>;
};

Filmer.propTypes = filmerTypes;
