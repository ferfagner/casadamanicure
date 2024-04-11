import { Link, ImageFunc, Name, ContainerFunc } from './cardFuncStyled';
import {useNavigate} from 'react-router-dom'
import { Funcionarios } from '../../dto/funcDTO';

interface CardFuncProps{
  data: Funcionarios
}

export function CardFunc( {data} : CardFuncProps) {
  const navigate = useNavigate()

  function handleNavigate(funcionario: Funcionarios){

    navigate('/avaliacao', {state: funcionario})

  }

  return (
 
     

                <ContainerFunc key={data.cpf}>
                  <Link  onClick={()=> handleNavigate(data)}>
                  <ImageFunc src={data.imgFunc} />
                  <Name>
                    {data.nome} {data.sobrenome}
                  </Name>
                  </Link>
                </ContainerFunc>
           
    
    
  );
}
