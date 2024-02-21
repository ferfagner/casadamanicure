// Home.js

import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Sidebar from '../../components/sidelbar/sidebar';
import { useAuth } from '../../context/auth'
import { Container, ContainerItems, Body, Title, ErrorMensage } from './styledLoja'
import { useEffect, useState } from 'react'
import { dadosLojaProps } from '../../dto/lojasDTO'
import { schema } from './schema'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/form/inputText/inputText';
import Button from '../../components/form/button/button'
import {getDadosLojaGeral} from '../../api/serviceApi'
import { SelectInput } from '../../components/form/selectForm/selectForm';
import { setLoja } from '../../db/lojasServices';


export function CadastroLoja() {
  const [nomeDasLojaMes, setNomeDasLojaMes] = useState<dadosLojaProps[]| null>(null);
  const [loading, setLoading] = useState(false);
  const [errolog, setErroLog] = useState('');
  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const dadosLoja = await getDadosLojaGeral({});
        setNomeDasLojaMes(dadosLoja);
      } catch (error) {
        console.error('Erro ao buscar dados da loja:', error);
      }
    }
  
    fetchData();
  }, []);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      formik.setFieldValue('photourl', file);
    }
  };

  const formik = useFormik({
    initialValues: {
      celular: '',
      cep: '',
      email: '',
      cidade: '',
      endereco: '',
      id: '',
      inalguracao: '',
      localizacao: '',
      photourl: null,
      numero: '',
      uf: ''
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log('entrou', values)
      try {
        setLoading(true);
        await setLoja({
          celular: values.celular,
          cep: values.cep,
          email: values.email,
          id: values.id,
          inalguracao: values.inalguracao,
          cidade: values.cidade,
          endereco: values.endereco,
          numero: values.numero,
          photourl: values.photourl, 
          localizacao: values.localizacao,
          uf: values.uf,
        });
        setLoading(false);
        navigate('/dashboardAdmin');
      } catch (error) {
        console.error('Erro ao cadastrar funcionário:', error);
        setErroLog('Erro ao cadastrar funcionário. Por favor, tente novamente.');
        setLoading(false);
      }
    },
  });

  return (
    <Container>
      <Menu />
      <ContainerItems>
        <Sidebar
          perfil={user.perfil}
          photo={user.imgFunc}
          name={user.nome}
        />

        <Body>
          <div style={{ backgroundColor: '#52658' }}>
            <Title>Cadastre a loja Agora</Title>
            <form onSubmit={formik.handleSubmit}>

            <label>
              <SelectInput
                title='Loja:'
                options={nomeDasLojaMes}
                value={formik.values.id}
                onChange={formik.handleChange}
                name='id'
                error={formik.errors.id}
              />
              </label>

              <label>
                <InputText
                  title='Data da Inauguração'
                  placeholder='Digite a data de Inauguração da loja'
                  type='text'
                  name='inalguracao'
                  onChange={formik.handleChange}
                  value={formik.values.inalguracao}
                  error={formik.errors.inalguracao}
                />
              </label>

              <label>
                <InputText
                  title='Celular:'
                  placeholder='Digite o numero de telefone da loja@'
                  type='text'
                  name='celular'
                  onChange={formik.handleChange}
                  value={formik.values.celular}
                  error={formik.errors.celular}
                />
              </label>
              
              <label>
                <InputText
                  title='Cep:'
                  placeholder='Digite o cep da loja!'
                  type='text'
                  name='cep'
                  onChange={formik.handleChange}
                  value={formik.values.cep}
                  error={formik.errors.cep}
                />
              </label>
              <label>
                <InputText
                  title='UF:'
                  placeholder='Digite o Estado da loja'
                  type='text'
                  name='uf'
                  onChange={formik.handleChange}
                  value={formik.values.uf}
                  error={formik.errors.uf}
                />
              </label>
             
              
              <label>
                <InputText
                  title='Cidade:'
                  placeholder='Digite a cidade da Loja!'
                  type='text'
                  onChange={formik.handleChange}
                  name='cidade'
                  value={formik.values.cidade}
                  error={formik.errors.cidade}
                />
              </label>
              <label>
                <InputText
                  title='Endereco:'
                  placeholder='Digite o Endereco da loja!'
                  type='text'
                  onChange={formik.handleChange}
                  name='endereco'
                  value={formik.values.endereco}
                  error={formik.errors.endereco}
                />
              </label>
              
              <label>
                <InputText
                  title='Numero:'
                  placeholder='Digite o numero da loja'
                  type='text'
                  name='numero'
                  onChange={formik.handleChange}
                  value={formik.values.numero}
                  error={formik.errors.numero}
                />
              </label>

              <label>
                <InputText
                  title='E-mail:'
                  placeholder='Digite seu E-mail!'
                  type='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.errors.email}
                />
              </label>
              <label>
                <InputText
                  title='Localizacao:'
                  placeholder='Digite o link de localizacao da loja'
                  type='text'
                  name='localizacao'
                  onChange={formik.handleChange}
                  value={formik.values.localizacao}
                  error={formik.errors.localizacao}
                />
              </label>
             
             
              <label>
              <InputText
                  title='Imagem da Loja:'
                  placeholder='Selecione a imagem da Loja'
                  type='file'
                  name='photourl'
                  onChange={handleFileChange} 
                  error={formik.errors.photourl}
                />
              </label>
            
              <Button type='submit' disabled={loading}>
                {loading ? 'Carregando...' : 'Registrar'}
              </Button>
              {errolog && <ErrorMensage>{errolog}</ErrorMensage>}
            </form>
          </div>
        </Body>

      </ContainerItems>
      <Footer />
    </Container>
  );

}