import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Altera para uma coluna quando a largura da tela for menor que 768px */
    align-items: center; /* Centraliza as boxes na horizontal */
  }
`;

export const Box = styled.div`
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 10px;
  padding: 20px;
  width: calc((100% - 40px) / 3);
  height: 8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%; /* Define a largura total */
    max-width: unset; /* Remove a largura máxima */
  }
`;

export const BoxTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.with};
`;

export const BoxValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.with};
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProgressContainer = styled.div`
  width: 90%;
  padding-top: 2rem;
  margin-top: 20px;
  margin-bottom: 20px; /* Adiciona um espaçamento inferior */
  margin-left: auto; /* Alinha à direita */
  margin-right: auto; /* Alinha à esquerda */

  @media screen and (max-width: 768px) {
    width: 100%; /* Define a largura total */
  }
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressTitle = styled.h2`
  font-size: 1em;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 10px;
`;

export const ProgressPercentage = styled.h2`
  margin-right: 10px;
  font-size: 1em;
  color: ${(props) => props.theme.colors.primary};
`;

export const LinearProgressBar = styled(LinearProgress)`
  height: 3rem;
  border-radius: 10px;

  & .MuiLinearProgress-bar {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
