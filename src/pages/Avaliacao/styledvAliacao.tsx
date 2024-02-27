import styled from 'styled-components';
export const Carregamento= styled.div`
  width: 99vw;
height: 85vh;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
`


export const Titulo= styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`
export const Container= styled.div`
margin: 15px;
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`


export const ImgFunc= styled.img`
  margin: 15px;
  width: 150px;
  max-width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 3px solid ${(props) => props.theme.colors.primary};
`