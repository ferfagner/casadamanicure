import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.with};
  padding: 3rem;
  border-radius: 20px 20px 0 0;
`;

export const Column = styled.div`
  flex: 1;
  padding: 0 20px;
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
  color: ${(props) => props.theme.colors.with };
  align-items: center;
`;