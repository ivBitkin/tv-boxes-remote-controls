import styled  from 'styled-components';

export const SidebarWrap = styled.div`

  width: 238px;
  padding: 0 48px;
  background: #545454;
  background: #1A1A1A;
`;

export const Title = styled.h2`
  color: #EDEDED;
`;

export const List = styled.ul`
  margin-top: 46px;
`;

export const Genre = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: capitalize ;
  padding-left: 14px;
  height: 46px;
  color: ${props => props.select ? "#EAEAEA" : "#959595"};
  border: ${props => props.selected ? "1px solid #F37301" : "none"};
  border-radius: 4px;
  box-sizing: border-box;

`;

export const Arrow = styled.img`
  margin-top: 2px;
  margin-left: 2px; 
  width: 12px;
`;