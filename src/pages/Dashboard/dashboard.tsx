// Home.js

import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import {getDadosFunc} from '../../api/serviceApi'
import Sidebar from '../../components/sidelbar/sidebar';
import {useAuth} from '../../context/auth'
import {Container,ContainerItems, Body} from './styledDashboard'
import Resulm from '../../components/resulm/resulm';
import {useEffect, useState} from 'react'
import {DadosFuncionario} from '../../dto/funcDTO'
import { Gratificacao } from '../../components/gatificacao/gratificacao';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate()
    const [dadosFunc, setDadosFunc] = useState<DadosFuncionario | null>(null);
  const [loading, setLoading] = useState(true);

    const {user} = useAuth()
    console.log(loading)

    useEffect(() => {
        console.log(user.perfil === 1)
      if (user.perfil == 1) {
        console.log('entrou')
        navigate('/dashboardAdmin');
      }
    }, [user.perfil, navigate]);


    useEffect(() => {
        async function fetchData() {
          try {
            const dados = await getDadosFunc({nomeLoja: user.idLoja, userName: user.userName});
            setDadosFunc(dados);
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
        {dadosFunc && ( 
            <>
            <Resulm
              vl_desconto={dadosFunc.vl_desconto}
              vl_total_nf={dadosFunc.vl_total_nf}
              quantidadevenda={dadosFunc.quantidadevenda}
              meta={user.meta}

            />
            
        
          <Gratificacao

             dados={dadosFunc}
             meta={user.meta}
            />
            </>
            )}
    </Body>
   
    </ContainerItems>
    <Footer />
    </Container>
  );

  }