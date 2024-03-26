import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import { getAllProducts } from '../../api/serviceApi';
import { Carregamento, Titulo, Container, ContainerInput, DescricaoProduto, InputPesquisa,ImgProduto, ButtonInput, PrecoProduto, ContainerProduto } from './styledConsulta';
import { ProdutosDTO } from '../../dto/produtosDTO';

export function Consulta() {
  const [produtos, setProdutos] = useState<ProdutosDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<string>(''); // Estado para armazenar o valor do input
  const [resultadoFiltro, setResultadoFiltro] = useState<ProdutosDTO[]>([]); // Estado para armazenar o resultado do filtro

  useEffect(() => {
    async function fetchData() {
      try {
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
      console.log(result)
      setResultadoFiltro(result)

   
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
          {/* Input para inserir o valor do filtro */}
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
      
      <Footer />
    </>
  );
}
