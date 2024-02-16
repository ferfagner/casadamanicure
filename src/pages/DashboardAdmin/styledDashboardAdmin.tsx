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
export const ContainerForm = styled.div`
  display: flex;
 background-color: ${(props) => props.theme.colors.second};
 height: 4rem;
 justify-content: center;
 align-items: center;
 border-radius: 15px;
 margin-bottom: 1rem;
 border: 1px solid;
 
  
`;
export const ConteinerMiddle = styled.div`
display: flex;
 
  
`;
export const ContainerFooter = styled.div`
margin-top: 1rem;
 
  
`;
export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.with};
  height: 35px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
 
  
`;
export const Select = styled.select`
  background-color: ${(props) => props.theme.colors.with};
  height: 35px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
 
  
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  height: 35px;
  width: 80px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.with};
  cursor: pointer;
`;

export const ContainerCharts = styled.div`
background-color: ${(props) => props.theme.colors.second};
 padding: 2rem;
 border: 1px solid;
 border-radius: 15px;
 width: 100%;
 
 border-color:  ${(props) => props.theme.colors.primary};
 
  
`;

export const Title = styled.h3`
text-align: center;
color: ${(props) => props.theme.colors.with};
 
  
`;



