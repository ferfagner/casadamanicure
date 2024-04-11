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
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

export const ContainerInput = styled.div`
  margin-top: 2rem;
  height: 5rem;

`

export const InputPesquisa = styled.input`
 background-color: ${(props) => props.theme.colors.second};
 color: ${(props) => props.theme.colors.with};
 border-radius: 10px 0px 0px 10px;
 height: 3rem;
 width: 20rem;

`
export const ButtonInput = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
 color: ${(props) => props.theme.colors.with};
 border-radius: 0 10px 10px 0px;
 height: 3rem;
 width: 6rem;
  
`

export const ImgProduto = styled.img`
  background-color: ${(props) => props.theme.colors.primary};
 color: ${(props) => props.theme.colors.with};
 height: 15rem;
 width: 15rem;
  
`

export const PrecoProduto = styled.h2`
 color: ${(props) => props.theme.colors.primary};
 
  
`

export const DescricaoProduto = styled.h3`
 color: ${(props) => props.theme.colors.second};
 max-width: 15rem;
 
  
`
export const ContainerProduto = styled.div`
  margin: 5rem;
  
`

export const ContairnerFunc = styled.div`
   display: flex;
  align-items: center;
  flex-direction: row;
  
  
`