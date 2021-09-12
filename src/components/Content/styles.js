import styled  from 'styled-components';

export const ContentWrap = styled.div`
  padding: 0 48px;
  margin-top: 68px;
  width: 100%;
`;

export const Poster = styled.div`
  background-image: url(${props => props.poster});
  margin: 14px;
  height: 228px;
  width: 160px;
  background-size: contain;
  border: ${props => props.selected ? '2px solid #F37301' : 'none'};
  box-sizing: border-box;
  border-radius: 6px;
  filter: ${props => props.selected ? 'brightness(100%)' : 'brightness(80%)'};;
`;
export const PosterWrap = styled.div`
`;
export const ListFilms = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
