import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import {getDadosGeral, getDadosGeralMes, getDadosLojaGeral, getDadosLojaLucro} from '../../api/serviceApi'
import Sidebar from '../../components/sidelbar/sidebar';
import {useAuth} from '../../context/auth'
import {Select,Button,Title,Container,ContainerItems, Body, ContainerForm, ConteinerMiddle, ContainerFooter, Input, ContainerCharts} from './styledDashboardAdmin'
import {useEffect, useState} from 'react'
import{DadosFuncionario}from '../../dto/funcDTO'
import {BarChart}from '../../components/barCharts/barCharts'
import {BarChartMonth}from '../../components/barCharts/barChartsMonth'
import{dadosProps,dadosLojaProps,dadosLojaLuco}from '../../dto/lojasDTO'
import { BarChartMonthLoja } from '../../components/barCharts/barChartsMonthLoja';
import ResulmAdmin from '../../components/resulmAdmin/resulmAdmin';
//import{ BarChartValores}from '../../components/barCharts/barChartsValores'

export function DashboardAdmin() {
    const [dadosGeral, setDadosGeral] = useState<DadosFuncionario[] | null>(null);
    const [dadosGeralMes, setDadosGeralMes] = useState<dadosProps[]| null>(null);
    const [dadosGeralLojaMes, setDadosGeralLojaMes] = useState<dadosLojaProps[]| null>(null);
    const [nomeDasLojaMes, setNomeDasLojaMes] = useState<dadosLojaProps[]| null>(null);
    const [dadosLojaLucro, setDadosLojaLucro] = useState<dadosLojaLuco[]| null>(null);
  const [loading, setLoading] = useState(true);
  const [nomeLoja, setNomeLoja] = useState('');
  const [firstDay, setFirstDay] = useState('');
  const [lastDay, setLastDay] = useState('');

  console.log(loading)

    const {user} = useAuth()
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

    function calcularValores() {
      let totalVendaBruta = 0;
      let totalDescontos = 0;
      let quantidadeVenda = 0;
      let lucroLiquido = 0;
  
      if(dadosLojaLucro){
      dadosLojaLucro.forEach(venda => {
        quantidadeVenda += venda.quantidadevenda|| 0;
          totalVendaBruta += venda.vendabruta || 0;
          totalDescontos += venda.descontos || 0;
          lucroLiquido += venda.lucroliquido || 0;
      });
    }
      return {
        quantidadeVenda,
          totalVendaBruta,
          totalDescontos,
          lucroLiquido
      };
  }
  const total = calcularValores()

    async function handleSubmit (event: any) {
      event.preventDefault();
      console.log('entrou aqui ', nomeLoja, firstDay, lastDay)
  
      try {
        const dadosLoja = await getDadosLojaGeral({ nomeLoja, firstDay, lastDay });
        const dadosMes = await getDadosGeralMes({ nomeLoja, firstDay, lastDay });
        const dados = await getDadosGeral({ nomeLoja, firstDay, lastDay });
        const dadosLojaLucro = await getDadosLojaLucro({ nomeLoja, firstDay, lastDay });
        setDadosGeralLojaMes(dadosLoja)
        setDadosLojaLucro(dadosLojaLucro)
        setDadosGeral(dados);
        setDadosGeralMes(dadosMes);
        setLoading(false);      
        setNomeLoja('');
        setFirstDay('');
        setLastDay('');
      } catch (error) {
        console.error('Erro ao enviar dados do formulário:', error);
      }
    };
    
   

    useEffect(() => {

        async function fetchData() {
          try {
            const dadosLoja = await getDadosLojaGeral({});
            const dadosMes = await getDadosGeralMes({});
            const dados = await getDadosGeral({});
            const dadosLojaLucro = await getDadosLojaLucro({});
            setDadosLojaLucro(dadosLojaLucro)
            setNomeDasLojaMes(dadosLoja)
            setDadosGeralLojaMes(dadosLoja)
            setDadosGeral(dados);
            setDadosGeralMes(dadosMes)
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);

  return (
    <Container>
    <Menu/>
    <ContainerItems>
           
          
          <Sidebar
          perfil={user.perfil}
        photo={user.imgFunc}
        name={user.nome}
        />
   
    <Body> 
      <ContainerForm>
    <form onSubmit={handleSubmit}>
            <label>
              Nome da Loja:
              <Select
                id="nomeLoja"
                value={nomeLoja}
                onChange={(e) => setNomeLoja(e.target.value)}
                >
                  <option value='Selecione'>
                    Selecione
                  </option>
                  
                  {nomeDasLojaMes? nomeDasLojaMes.map((option) => (
          <option key={option.cdterminal} value={option.nome}>
            {option.nome}
          </option>)): ''}
                </Select>

            </label>
            <label>
              Data inicial:
              <Input
                type="date"
                value={firstDay}
                onChange={(e) => setFirstDay(formatDate(e.target.value))}
              />
            </label>
            <label>
              Data final:
              <Input
                type="date"
                value={lastDay}
                onChange={(e) => setLastDay(formatDate(e.target.value))}
              />
            </label>
            <Button type="submit">Enviar</Button>
          </form>
          </ContainerForm>
          <ResulmAdmin
              vl_desconto={total.totalDescontos}
              vl_total_nf={total.totalVendaBruta}
              quantidadevenda={total.quantidadeVenda}
              lucroLiquido={total.lucroLiquido}
            />
          <ConteinerMiddle>
          
            <ContainerCharts>
            <Title>Vendas por Vendedora</Title>
    <BarChart data={dadosGeral} />
    </ContainerCharts>
    <ContainerCharts>
    <Title>Vendas por Mês</Title>
    <BarChartMonth data={dadosGeralMes}/>
    </ContainerCharts>
    </ConteinerMiddle>
    <ContainerFooter>
    <ContainerCharts>
    <Title>Vendas por Loja</Title>
    <BarChartMonthLoja data={dadosGeralLojaMes}/>
    </ContainerCharts>
    
    </ContainerFooter>
    </Body>
   
    </ContainerItems>
    <Footer />
    </Container>
  );

  }