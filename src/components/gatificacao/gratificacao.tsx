
import { PodioContainer, PodioItem } from './styledGratificacao'; // Importe os estilos
import {DadosFuncionario}from '../../dto/funcDTO'

interface GratificacaoProps {
    dados: DadosFuncionario;
    meta: number;
  }

export function Gratificacao({dados, meta}:GratificacaoProps) {

    const premioPorMeta: Record<string, number> = {
        bronze: 0,
        prata: 0.10,
        ouro: 0.21,
       
      };

      function calcularFaltaParaMeta(premio: string, type: string) {
        const valorMeta = meta + (meta * premioPorMeta[premio]) || 0;
        let faltaParaMeta = valorMeta - (dados.vl_total_nf - dados.vl_desconto);
      
        faltaParaMeta = faltaParaMeta < 0 ? 0 : faltaParaMeta;
      
      
        if (type === "s") {
          return faltaParaMeta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        } else {
          return faltaParaMeta;
        }
      }

      function retornaMetaEmReal(premio: string){



        const valorMeta = meta + (meta * premioPorMeta[premio]) || 0;
    
        return valorMeta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
      }

    function retornaResumoPremio() {
        let resumo = (dados.vl_total_nf - dados.vl_desconto) * 0.01;
        return resumo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      }

     
      function calculaPremioParaMeta(premio : string, type: boolean){
        const premioPorMeta: Record<string, number> = {
            bronze: 0.004,
            prata: 0.005,
            ouro: 0.01,
           
          };

    
        let total = 0
        const valorMeta = meta  || 0;
    
        if(premio === 'bronze'){
          total = ((valorMeta* 0.01) + valorMeta) * premioPorMeta[premio]
        }
    
        if(premio === 'prata'){
          total = (((valorMeta* 0.101) + valorMeta)) * premioPorMeta[premio]
        }
    
        if(premio === 'ouro'){
          total = (((valorMeta* 0.21) + valorMeta)) * premioPorMeta[premio]
        }
        
        console.log(meta)
    
        if(type === true){
          return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }else{
          return total
        }
    }


  return (
    <PodioContainer>
      <PodioItem className="topo">
        <span>Classificação</span>
        <span>Valor da Meta</span>
        <span>Falta Vender</span>
        <span>Premiação</span>
      </PodioItem>

      <PodioItem className={10 <= 0 ? "verde" : "terceiro"}>
        <span>Bronze</span>
        <span>{retornaMetaEmReal('bronze')}</span>
        <span>{calcularFaltaParaMeta('bronze','s')}</span>
        <span>{calculaPremioParaMeta('bronze', true)}</span>
      </PodioItem>
      <PodioItem className={10 <= 0 ? "verde" : "segundo"}>
        <span>Prata</span>
        <span>{retornaMetaEmReal('prata')}</span>
        <span>{calcularFaltaParaMeta('prata','s')}</span>
        <span>{calculaPremioParaMeta('prata', true)}</span>
      </PodioItem>
      <PodioItem className={10 <= 0 ? "verde" : "primeiro"}>
        <span>Ouro</span>
        <span>{retornaMetaEmReal('ouro')}</span>
        <span>{calcularFaltaParaMeta('ouro','s')}</span>
        <span>{calculaPremioParaMeta('ouro', true)}</span>
      </PodioItem>

     

      <PodioItem className="resumo">
        <span>Você já Faturou</span>
        <span>{retornaResumoPremio()}</span>
      </PodioItem>
    </PodioContainer>
  );
  }