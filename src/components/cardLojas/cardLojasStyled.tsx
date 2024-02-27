import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.second};
  color: ${(props) => props.theme.colors.with};
  border-radius: 20px;
  margin: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerImage = styled.div`
  margin-left: 0;

  @media (min-width: 768px) {
    
    
  }
`;

export const ImageLoja = styled.img`
  height: 100%;
  width: 20rem;

  border-radius: 20px 0 0 20px;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    border-radius: 20px 20px 0px 0px;
  }

`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

export const Title = styled.h3`
  text-align: left;
`;

export const SubTitle = styled.p``;
export const SubTitleLocal = styled.h2``;

export const CardFunc = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

export const ContainerFunc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 2rem;
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

export const ImageFunc = styled.img`
    
  width: 150px;
  max-width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 3px solid ${(props) => props.theme.colors.primary};
`;

export const ContainerContato = styled.div`

  margin-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

 

  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;

export const Name = styled.h4`
    text-decoration: none;
    margin-left: 2rem;
    text-align: center;
    align-items: center;
    color: ${(props) => props.theme.colors.with};
    

    @media (max-width: 768px) {
    margin-left: 0rem;
  }

`;

export const TelefoneContainer = styled.a`
    margin: 5px;
  text-decoration: none;
`;
export const Telefone = styled.h2`
    
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

