import styled from 'styled-components';

export const PodioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const PodioItem = styled.div`
    border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-top: 1rem;
  height: 4rem;
  color: ${(props) => props.theme.colors.with};
  

  &.topo {
    font-weight: bold;
    height: 4rem;
    background-color: ${(props) => props.theme.colors.second};
    
    
  }

  &.verde {
    background-color: ${(props) => props.theme.colors.green};
  }

  &.terceiro {
    background-color: #cd7f32;
  }

  &.segundo {
    background-color: #aaa;
  }

  &.primeiro {
    background-color: #d5b814;
  }
  &.resumo{
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
