import styled from 'styled-components';


export const Container = styled.div`
`;

export const ContainerCard = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const Cards = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.second};
  height: 10rem;
  width: 12rem;
  border-radius: 20px;
  margin: 10px;
  align-items: center;
`;

export const Photo = styled.img`
  height: 4rem;
`;

