// Home.js

import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Sidebar from '../../components/sidelbar/sidebar';
import { useAuth } from '../../context/auth'
import { Container, ContainerItems, Body, Title, ErrorMensage } from './styledCadastroFunc'
import { useEffect, useState } from 'react'
import { dadosLojaProps } from '../../dto/lojasDTO'
import { schema } from './schema'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/form/inputText/inputText';
import Button from '../../components/form/button/button'
import {getDadosLojaGeral} from '../../api/serviceApi'
import { SelectInput } from '../../components/form/selectForm/selectForm';
import {setFunc} from '../../db/funcServices'


export function CadastroFunc() {
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
console.log(nomeDasLojaMes)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      console.log(file)
      formik.setFieldValue('imgFunc', file);
    }
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      cpf: '',
      email: '',
      password: '',
      password2: '',
      meta: '',
      userName: '',
      perfil: '',
      imgFunc: null,
      idLoja: 'BRASILINHA',
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await setFunc({
          userName: values.userName,
          cpf: values.cpf,
          email: values.email,
          idLoja: values.idLoja,
          meta: Number(values.meta),
          nome: values.nome,
          password: values.password,
          perfil: Number(values.perfil),
          imgFunc: values.imgFunc , // Agora é o arquivo selecionado
        });
        setLoading(false);
        navigate('/dashboardAdmin'); // Redirecione após o envio bem-sucedido
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
            <Title>Registre-se Agora</Title>
            <form onSubmit={formik.handleSubmit}>
              <label>
                <InputText
                  title='Nome:'
                  placeholder='Digite seu nome completo!'
                  type='text'
                  name='nome'
                  onChange={formik.handleChange}
                  value={formik.values.nome}
                  error={formik.errors.nome}
                />
              </label>
              
              <label>
                <InputText
                  title='CPF/CNPJ:'
                  placeholder='Digite seu CPF ou CNPJ!'
                  type='text'
                  name='cpf'
                  onChange={formik.handleChange}
                  value={formik.values.cpf}
                  error={formik.errors.cpf}
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
                  title='Senha:'
                  placeholder='Digite sua Senha!'
                  type='password'
                  onChange={formik.handleChange}
                  name='password'
                  value={formik.values.password}
                  error={formik.errors.password}
                />
              </label>
              <label>
                <InputText
                  title='Repita sua Senha:'
                  placeholder='Digite sua Senha Novamente!'
                  type='password'
                  onChange={formik.handleChange}
                  name='password2'
                  value={formik.values.password2}
                  error={formik.errors.password2}
                />
              </label>
              
              <label>
                <InputText
                  title='Meta:'
                  placeholder='Digite a meta do funcionário'
                  type='number'
                  name='meta'
                  onChange={formik.handleChange}
                  value={formik.values.meta}
                  error={formik.errors.meta}
                />
              </label>
              <label>
                <InputText
                  title='Nome de Usuário:'
                  placeholder='Digite o nome de usuário'
                  type='text'
                  name='userName'
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                  error={formik.errors.userName}
                />
              </label>
             
              <label>
              <SelectInput
                title='Loja:'
                options={nomeDasLojaMes}
                value={formik.values.idLoja}
                onChange={formik.handleChange}
                name='idLoja'
                error={formik.errors.idLoja}
              />
              </label>
              <label>
              <InputText
                  title='Imagem do Funcionário:'
                  placeholder='Selecione a imagem do funcionário'
                  type='file'
                  name='imgFunc'
                  onChange={handleFileChange} 
                  error={formik.errors.imgFunc}
                />
              </label>
              <label>
                <InputText
                  title='Perfil do Funcionário:'
                  placeholder='Perfil de Acesso para o Funcionario'
                  type='number'
                  name='perfil'
                  onChange={formik.handleChange}
                  value={formik.values.perfil}
                  error={formik.errors.perfil}
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