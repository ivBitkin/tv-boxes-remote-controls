import { PlayerWrap, Title, PlayerDescriptionWrap,Button, Description, PlayerContent, Option, OptionWrapper,Navigate, VideoPlayer } from './styles';
import React from 'react';
import { playerTypes } from '../../propTypes';


export const Player = ({ scene, selectedFilm, selectBtn }) => {
  return <PlayerWrap scene={scene === 'player'}>
      <Title>{selectedFilm.title}</Title>
      <PlayerDescriptionWrap>
        <PlayerContent>
          <OptionWrapper>
            <Option>
              <p>Lengde</p>
              <p>1 time 23 min</p>
            </Option>
            <Option>
              <p>Land</p>
              <p>Usa</p>
            </Option>
            <Option>
              <p>Sprak</p>
              <p>Engelsk</p>
            </Option>
          </OptionWrapper>
          <VideoPlayer url={selectedFilm.poster_path}></VideoPlayer>
          <Navigate>
            {['Play', 'Trailer', '+ Playlist'].map((item, index) => <Button key={item} selectBtn={selectBtn === index}>{item}</Button> )}
          </Navigate>
        </PlayerContent>
        <Description>
          {selectedFilm.overview}
        </Description>
      </PlayerDescriptionWrap>
  </PlayerWrap>;
};

Player.propTypes = playerTypes;


