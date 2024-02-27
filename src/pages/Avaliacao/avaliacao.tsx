// Home.js
import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import { Carregamento,ImgFunc, Titulo,Container } from './styledvAliacao';
import { setAvaliacao } from '../../db/funcServices';
import { useLocation } from 'react-router-dom';
import {Funcionarios} from '../../dto/funcDTO'
import { InputText } from '../../components/form/inputText/inputText';
import {useNavigate} from 'react-router-dom'
import { schema } from './schema'
import { useFormik } from 'formik';
import Button from '../../components/form/button/button';
import { RadioButton } from '../../components/form/radioButtom/radioButton';

export function Acaliacao() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  const funcionario : Funcionarios = location.state;

  const formik = useFormik({
    initialValues: {
      userName: funcionario.userName,
      codCupom: '',
      nota: 0,
      nome: '',
      data: ''
     
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await setAvaliacao(
          values.userName,
         Number(values.nota),
          values.codCupom,
          values.nome,
          values.data
        );
        setLoading(false);
        navigate('/avaliacao'); 
      } catch (error) {
        console.error('Erro ao cadastrar funcionário:', error);
        setLoading(false);
      }
    },
  });

  
  
  return (
    <>
      <Menu />
      {loading ? (
        <Carregamento></Carregamento>
      ) : (
        <Container>
          <Titulo>
           Avalie o meu Atendimento
          </Titulo>
          <ImgFunc src={funcionario.imgFunc}/>
          <form onSubmit={formik.handleSubmit}>

          <label>
                <InputText
                  title='Nome:'
                  placeholder='Digite o seu nome'
                  type='text'
                  name='codCupom'
                  onChange={formik.handleChange}
                  value={formik.values.nome}
                  error={formik.errors.nome}
                />
              </label>

              <label>
                <InputText
                  title='Data da compra:'
                  placeholder='Dia da compra'
                  type='date'
                  name='codCupom'
                  onChange={formik.handleChange}
                  value={formik.values.data}
                  error={formik.errors.data}
                />
              </label>

              <label>
                <InputText
                  title='Valor:'
                  placeholder='Digite o Valor da sua compra'
                  type='text'
                  name='codCupom'
                  onChange={formik.handleChange}
                  value={formik.values.codCupom}
                  error={formik.errors.codCupom}
                />
              </label>
              
             
              <label>
                <RadioButton
                options={[0,1,2,3,4,5,6,7,8,9,10]}
                  title='Nota do atendimento:'
                  name='nota'
                  onChange={formik.handleChange}
                  value={formik.values.nota}
                  error={formik.errors.nota}
                />
              </label>
              <Button type='submit' disabled={loading}>
                {loading ? 'Carregando...' : 'Registrar'}
              </Button>
            </form>
        </Container>
      )}
      <Footer />
    </>
  );
}
