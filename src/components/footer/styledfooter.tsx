import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row; // Padrão é em fila
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.with};
    padding: 3rem;
    border-radius: 20px 20px 0 0;

    @media (max-width: 768px) {
        flex-direction: column; // Muda para coluna em telas menores
        padding: 2rem 1rem; // Ajusta o padding para melhor acomodação
    }
`;



export const Column = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (max-width: 768px) {
      padding: 0 10px; // Menor padding nas laterais
      margin-bottom: 20px; // Adiciona espaço entre as colunas
  }
`;



export const Title = styled.h4`
  color: ${(props) => props.theme.colors.second };
`;

export const Separator = styled.div`
width: 80%;
height: 0.1rem;
background-color: ${(props) => props.theme.colors.with };
  
`;

export const ButtomFooter = styled.div`
  border-radius: 0 0 20px 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.second};
  color: ${(props) => props.theme.colors.with};
  align-items: center;

  @media (max-width: 768px) {
      padding: 1rem; // Redução de padding
  }
`;
