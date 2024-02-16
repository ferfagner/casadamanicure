import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  flex-direction: column;
  
`;

export const ContainerItems = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  
`;


export const Body = styled.div`
  flex: 1;
  padding: 1rem;
  min-height: calc(100vh - 80px);
 
  
`;

export const Title = styled.h2`
  
 
  
`;

export const ErrorMensage = styled.h5`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;

`;
