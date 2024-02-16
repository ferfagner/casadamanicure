// Home.js
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Sliders from '../../components/sliders/sliders';
import { getSlides } from '../../db/slidesServices';
import { CarouselProps } from '../../dto/slidesDTO';
import { Carregamento, Titulo, ErrorMensage, Container, Bottom } from './styledLogin';
import {useAuth} from '../../context/auth';
import {schema} from './schemas';
import { useFormik } from 'formik';
import {InputText} from '../../components/form/inputText/inputText'
import Button from '../../components/form/button/button'

import { useNavigate } from 'react-router-dom';

  

export function Login() {
  const [items, setItems] = useState([] as CarouselProps['items']);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const {logIn} = useAuth()
    
    const [errolog, setErroLog]= useState('')

    
  
    const formik = useFormik({
      
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: schema,
      onSubmit: async (values) => {
        try{
          await logIn({email: values.email, password: values.password})
         
            navigate('/dashboard')
        }catch(error) {
          setErroLog(String(error)) // Definir uma mensagem padrão, se não houver uma mensagem de erro
        }
     
        
      },
    });

    const handleInputChange = () => {
      setErroLog('');
    };

  useEffect(() => {
    async function fetchData() {
      try {
        const slides = await getSlides();
        setItems(slides);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Menu />
      {loading ? (
        <Carregamento>
       
        </Carregamento>
      ) : (
        <Sliders items={items} />
      )}
      <Titulo>
        Login
      </Titulo>
      <Container>
          <div style={{ backgroundColor: '#52658' }}>
            <form onSubmit={formik.handleSubmit}>
              <label>
                <InputText
                  title='E-mail:'
                  placeholder='Digite seu E-mail'
                  type='e-mail'
                  name='email'
                  onChange={(e)=>{
                    formik.handleChange(e)
                    handleInputChange()
                  
                  }}
                  value={formik.values.email}
                  error={formik.errors.email}
                />
              </label>
              <br />
              <label>
                <InputText
                  title='Senha:'
                  placeholder='Digite sua Senha'
                  type='password'
                  onChange={(e)=>{
                    formik.handleChange(e)
                    handleInputChange()
                  
                  }}
                  name='password'
                  value={formik.values.password}
                  error={formik.errors.password}
                />
              </label>
              <br />
              
              <ErrorMensage>{errolog && <div style={{ color: 'red' }}>{errolog}</div>}</ErrorMensage>
              
              <Button type='submit'>Logar</Button>
            </form>
            <Bottom>
              <p>Não tem login? </p>
              <p>Crie sua conta agora <a href='/register'>Clicando Aqui!</a></p>
            </Bottom>
          </div>
        </Container>
     
      <Footer />
    </>
  );
}
