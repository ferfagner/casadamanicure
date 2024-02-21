import * as yup from "yup";




export  const schema = yup.object().shape({
  celular: yup.string().required('Digite o numero de contato da loja!'),
  cep: yup.string().required('É Obrigatorio digitar o cep a cidade!'),
  cidade: yup.string().required('É Obrigatorio escrever a cidade!'),
  endereco: yup.string().required('Endereço é obrigatório'),
  id: yup.string().required('O Nome da Loja é Origatório'),
  inalguracao: yup.string().required('A data de Inauguração é obrigatório!'),
  localizacao: yup.string().required('O link de localização é Obrigatório!'),
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  numero: yup.string().required('O Numero é Obrigatório!'),
  photourl: yup.string().required('É obrigatorio selecionar uma Foto'),
  uf: yup.string().required('O Estado é Obrigatório!'),
  });