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

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
 
  
`;
export const ErrorMensage = styled.h5`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

`;



export const Header = styled.div`
  position: 'absolute';
  top: 0;
  left: 0;
    z-index: 2;
  
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`
