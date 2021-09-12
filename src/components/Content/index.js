import React, { useEffect, useRef } from 'react';
import { contentTypes } from '../../propTypes';
import {ContentWrap, Poster, PosterWrap, ListFilms} from "./styles";
import { useWindowDimensions } from '../../hooks';

export const Content = ({  arr2d, setItemsLine, selectFilm={selectFilm}, scene={scene} }) => {
    const { width } = useWindowDimensions();
    const refContent = useRef(null);
    useEffect(() => {
            const widthOneLineFilms = refContent?.current.clientWidth;
            const widthOneItem = refContent?.current.firstChild?.offsetWidth || 0;
            const getItemsInOneLine = Math.floor(widthOneLineFilms  / widthOneItem);
            const checkPixel =  Math.floor(widthOneLineFilms  % widthOneItem) === 0;
            setItemsLine( checkPixel ?  getItemsInOneLine - 1 :  getItemsInOneLine);

    }, [arr2d, refContent, width]);

    return <ContentWrap >
        <ListFilms ref={refContent}>

            { arr2d.map(list => {
                    return list.map(film => {
                        return <PosterWrap key={film.title}>
                            <Poster selected={scene === 'content' && arr2d[selectFilm.row][selectFilm.item] === film}  poster={film.poster_path} />
                        </PosterWrap>;
                        });
                })
           }

        </ListFilms>

    </ContentWrap>;
};

Content.propTypes = contentTypes;