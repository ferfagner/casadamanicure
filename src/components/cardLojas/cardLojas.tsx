import { Container, TelefoneContainer,ImageLoja, CardFunc, ContainerImage, ContainerInfo, Title, SubTitle, ContainerFunc, ImageFunc, Name, ContainerContato, Telefone } from './cardLojasStyled';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getFunc } from '../../db/funcServices';
import { Funcionarios } from '../../dto/funcDTO';
import { LojasProps } from '../../dto/lojasDTO';

export function CardLojas({ dataLoja }: LojasProps) {
  const [funcionarios, setFuncionarios] = useState([] as Funcionarios[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const func = await getFunc();
        setFuncionarios(func);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if(loading){
    return(
        <>
        <h2>Carregando...</h2>
        </>
    )
  }

  return (
    <>
      {dataLoja.map((loja) => (
        <Container key={loja.id}>
          <ContainerImage>
            <ImageLoja src={loja.photourl} />
          </ContainerImage>
          <ContainerInfo>
            <Title>Local:</Title>
            <SubTitle>
              {loja.cidade} - {loja.uf}
            </SubTitle>
            <Title>Tempo de Loja:</Title>
            <SubTitle>{loja.inalguracao}</SubTitle>
            <Title>Endereço:</Title>
            <SubTitle>{loja.endereco}</SubTitle>
          </ContainerInfo>
          <ContainerFunc>
          {funcionarios
              .filter((funcionario) => funcionario.idLoja === loja.id)
              .map((funcionario, index) => (
                <CardFunc key={index}>
                  <ImageFunc src={funcionario.imgFunc} />
                  <Name>
                    {funcionario.nome} {funcionario.sobrenome}
                  </Name>
                </CardFunc>
              ))}
          </ContainerFunc>
          <ContainerContato>
            <TelefoneContainer href={`https://wa.me/55${loja.celular}`} target='_blank'>
              <Telefone>
                <FaWhatsapp fontSize={25} /> {loja.celular}
              </Telefone>
            </TelefoneContainer>
          </ContainerContato>
        </Container>
      ))}
    </>
  );
}
