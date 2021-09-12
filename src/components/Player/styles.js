import styled  from 'styled-components';


export const PlayerWrap = styled.div`
  display: ${props => props.scene ? 'block': 'none'};
  position: absolute;
  right: 25%;
  width: 866px;
  height: 300px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const PlayerDescriptionWrap = styled.div`
  display: flex;
`;

export const PlayerContent = styled.div`
  width: 70%;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  width: 30%;
  margin-left: 20px;
  font-size: 14px;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-top: 1px solid #ccc;
  p  {
    color: #F0F0F0;
    margin-top: 4px;
    font-size: 14px;
    &:first-child {
      color: #444444;
    }
  }
`;

export const VideoPlayer = styled.div`
  background-image: url(${props => props.url});
  height: 300px;
  width: 100%;
  margin-top: 24px;
  background-size: contain;
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Button = styled.button`
  width: 30%;
  height: 80px;
  color: #F0F0F0;
  background: ${props => props.selectBtn ? '#F37301': 'none'};
  border-radius: 14px;
  
`;


