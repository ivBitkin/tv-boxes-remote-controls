import React from 'react';
import { SidebarWrap, Title, List, Genre, Arrow } from "./styles";
import arrowRight from '../../assets/right-arrow.svg';
import { sidebarTypes } from '../../propTypes';

export const SideBar = ({ genres, selectGenreIndex, selectedGenreIndex }) => {
    const checkActiveStyle = (item, select) =>  item === select;
    return (
      <SidebarWrap>
        <Title>Filmer</Title>
        <List>{genres.map((item) => {
        return (<Genre
            selected={checkActiveStyle(item, genres[selectedGenreIndex])}
            select={checkActiveStyle(item, genres[selectGenreIndex])}
            key={item}>
                {item}
                {checkActiveStyle(item, genres[selectedGenreIndex])
                && (<Arrow src={arrowRight} alt='arrow'/>)}
        </Genre>);
        })}</List>
    </SidebarWrap>);
};

SideBar.propTypes = sidebarTypes;