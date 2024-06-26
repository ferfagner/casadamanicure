import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import { getAllProducts } from '../../api/serviceApi';
import { Carregamento, Titulo, Container, ContainerInput, DescricaoProduto, InputPesquisa,ImgProduto, ButtonInput, PrecoProduto, ContainerProduto } from './styledConsulta';
import { ProdutosDTO } from '../../dto/produtosDTO';
import { Funcionarios } from '../../dto/funcDTO';
import { getFunc } from '../../db/funcServices';
import CarrouselFunc from '../../components/CarrouselFunc/CarrouselFunc';

export function Consulta() {
  const [funcionarios, setFuncionarios] = useState([] as Funcionarios[]);
  const [produtos, setProdutos] = useState<ProdutosDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<string>(''); // Estado para armazenar o valor do input
  const [resultadoFiltro, setResultadoFiltro] = useState<ProdutosDTO[]>([]); // Estado para armazenar o resultado do filtro

  useEffect(() => {
    async function fetchData() {
      try {
        const func = await getFunc();
        setFuncionarios(func);
        const products: ProdutosDTO[] = await getAllProducts();
        setProdutos(products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Erro ao obter produtos:', error);
      }
    }

    fetchData();
  }, []);

  // Função para lidar com a alteração do input
  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    setFiltro(event.target.value);
  };

  // Função para filtrar os produtos com base no valor do input
  async function handleFilter () {
    
  const result =  await produtos.filter(produto => 
      produto.GTIN === filtro || String(produto.CDPRODUTO) === filtro
      
      );
      
      setResultadoFiltro(result)
      setFiltro('')
   
  };
  function handleKeyPress (event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleFilter(); // Chama a função de filtro quando a tecla "Enter" é pressionada
    }
  };

  return (
    <>
      <Menu />
      {loading ? (
        <Carregamento>{/* Componente de carregamento aqui */}</Carregamento>
      ) : (
        <>
          <Titulo>Consultar preço</Titulo>
          <Container>
          <ContainerInput>
          <InputPesquisa
            type="text"
            placeholder="Digite o código do produto ou GTIN"
            value={filtro}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
          />
          {/* Botão para acionar o filtro */}
          <ButtonInput onClick={handleFilter}>Buscar</ButtonInput>
          </ContainerInput>
          {/* Exibir resultados do filtro */}
          {resultadoFiltro.map((produto, index) => (
            <ContainerProduto key={index}>
              <ImgProduto src='' />
              <DescricaoProduto>{produto.DESCRICAO}</DescricaoProduto>
              <PrecoProduto>R${produto.PRECOFINALVENDA}</PrecoProduto>
            </ContainerProduto>
          ))}
          </Container>
        </>
      )}

 <Titulo>Avalie nosso Atendimento</Titulo>
 
          <CarrouselFunc data={funcionarios} />
         
      <Footer />
    </>
  );
}
