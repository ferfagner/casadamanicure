import styled from 'styled-components';

interface ButtonProps{
  active: boolean
}


export const Container = styled.div`
margin-bottom: 2rem;

`;

export const ContaineraCard = styled.div`
margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;


export const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;  /* Alterado para coluna em telas menores */
  height: 10rem;
  width: 100%;  /* Alterado para 100% de largura em telas menores */
  max-width: 12rem;  /* Limitado à largura máxima em telas menores */
  border-radius: 20px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;


export const Photo = styled.img`
  height: 4rem;
`;

export const Button = styled.button<ButtonProps>`
  margin: 0 0.5rem;
    padding: 0.1rem 0.5rem;
    border-radius: 50%;
    background: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.second)};
    color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.second)};
    cursor: pointer;
`;

