import {
    MainContainer,
    BoxContainer,
    Box,
    BoxTitle,
    BoxValue,
    ProgressContainer,
    ProgressHeader,
    ProgressTitle,
    ProgressPercentage,
    LinearProgressBar
  } from './styledResulm';
  

interface MainProps {
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number;
  meta: number
}

export default function Resulm({ quantidadevenda, vl_desconto, vl_total_nf,meta }: MainProps) {

    function calcularMeta() {
    
        const hoje = new Date();
        const ultimoDiaMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
        const diasNoMes = ultimoDiaMes.getDate();
    
        
    
        let diasTrabalhados = 0;
    
        
        for (let i = hoje.getDate(); i <= diasNoMes; i++) {
          const dataAtual = new Date(hoje.getFullYear(), hoje.getMonth(), i);
          if (dataAtual.getDay() !== 0) {
            diasTrabalhados++;
          }
        }
    
        const valorMeta = meta || 0;
    
        let metaRestante = meta - (vl_total_nf - vl_desconto)
        let porcentagemMetaAlcancada = (((vl_total_nf - vl_desconto)  / meta) * 100);
      
        if(metaRestante <= 0 ){
    
          metaRestante = ((valorMeta * 0.21)+valorMeta) - (vl_total_nf - vl_desconto)
        }
    
        if(metaRestante <= 0 ){
    
          metaRestante = 0
        }
    
      
        const metaPorDia = (metaRestante / diasTrabalhados).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
      
        if(porcentagemMetaAlcancada > 100){
    
          porcentagemMetaAlcancada = (((vl_total_nf - vl_desconto)  / ((valorMeta * 0.21)+valorMeta)) * 100)
          
        }
    
        if(porcentagemMetaAlcancada > 100){
    
          porcentagemMetaAlcancada = 100
          
        }
      
        return {metaPorDia, porcentagemMetaAlcancada};
      }


  function formattedTotal(valor: number) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return (
    <MainContainer>
      <BoxContainer>
        <Box>
          <BoxTitle>Quantidade de Vendas</BoxTitle>
          <BoxValue>{quantidadevenda}</BoxValue>
        </Box>
        <Box>
          <BoxTitle>Meta Diaria</BoxTitle>
          <BoxValue>{calcularMeta().metaPorDia}</BoxValue>
        </Box>
        <Box>
          <BoxTitle>Valor total Vendido</BoxTitle>
          <BoxValue>{formattedTotal(vl_total_nf)}</BoxValue>
        </Box>
      </BoxContainer>
      <ProgressContainer>
        <ProgressHeader>
          <ProgressTitle>Seu progresso para bater a meta:</ProgressTitle>
          <ProgressPercentage>{Number(calcularMeta().porcentagemMetaAlcancada).toFixed(2)}%</ProgressPercentage>
        </ProgressHeader>
        <LinearProgressBar variant="determinate" value={Number(calcularMeta().porcentagemMetaAlcancada)} />
      </ProgressContainer>
    </MainContainer>
  );
}
