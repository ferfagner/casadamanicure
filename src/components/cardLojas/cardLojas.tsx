import { Container, SubTitleLocal,TelefoneContainer,ImageLoja, ContainerImage, ContainerInfo, Title, SubTitle, ContainerFunc, ContainerContato, Telefone } from './cardLojasStyled';
import { FaWhatsapp } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { getFunc } from '../../db/funcServices';
import { Funcionarios } from '../../dto/funcDTO';
import { LojasProps } from '../../dto/lojasDTO';
import {CardFunc} from '../cardFunc/cardFunc'

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
          <SubTitleLocal>Casa da Manicure</SubTitleLocal>
            <Title>Local:</Title>
            <SubTitleLocal>
              {loja.cidade} - {loja.uf}
            </SubTitleLocal>
            <Title>Endereço:</Title>
            <SubTitle>{loja.endereco}, Loja {loja.numero}</SubTitle>
          </ContainerInfo>
          <ContainerFunc>
          {funcionarios
              .filter((funcionario) => funcionario.idLoja === loja.id)
              .map((funcionario) => (
              <CardFunc data={funcionario}/>
              ))}
          </ContainerFunc>
          <ContainerContato>
            <TelefoneContainer href={`https://wa.me/55${loja.celular}`} target='_blank'>
              <Telefone>
                <FaWhatsapp fontSize={35} /> {loja.celular}
              </Telefone>
            </TelefoneContainer>
            <TelefoneContainer href={loja.localizacao} target='_blank'>
              <Telefone>
                <CiLocationOn fontSize={35} /> Localização
              </Telefone>
            </TelefoneContainer>
          </ContainerContato>
        </Container>
      ))}
    </>
  );
}
