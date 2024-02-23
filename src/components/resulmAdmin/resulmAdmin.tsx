import {
    MainContainer,
    BoxContainer,
    Box,
    BoxTitle,
    BoxValue,
  } from './styledResulm';
  

interface MainProps {
  quantidadevenda: number;
  vl_desconto: number;
  vl_total_nf: number;
  lucroLiquido: number
}

export default function ResulmAdmin({ quantidadevenda, vl_desconto, vl_total_nf,lucroLiquido }: MainProps) {

    
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
        <BoxTitle>Valor total Vendido</BoxTitle>
          <BoxValue>{formattedTotal(vl_total_nf - vl_desconto)}</BoxValue>
          
        </Box>
        <Box>
        <BoxTitle>Lucro Liquido</BoxTitle>
        <BoxValue>{formattedTotal(lucroLiquido)}</BoxValue>
        </Box>
      </BoxContainer>
     
    </MainContainer>
  );
}
