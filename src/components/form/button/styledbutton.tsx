
import styled from 'styled-components';

interface ContainerProps{
  isactivy: boolean
}

export const Container = styled.button<ContainerProps>`

    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.with};
    background-color: ${(props) => props.isactivy ? props.theme.colors.primary: props.theme.colors.second};
  


  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
    background-color: ${(props) => props.theme.colors.second};
  }
    
 
`;