import styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 0 10%;
  justify-content: center;
`;

export const FirstScene = styled.div`
  transform: ${props => props.changeFocus === 'player' ? `translate(-${props.width/1.5}px,0)` :"translate(0,0)" };
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Player = styled.div`
  display: ${props => props.scene ? 'flex': 'none'};
  position: absolute;
  width: 866px;
  height: 300px;
  background: aquamarine;
 

`;
