import * as yup from "yup";




export  const schema = yup.object().shape({
  codCupom: yup.string().required('Digite o codigo do cupom da sua compra!'),
  nota: yup.number().required('Escolha a sua nota!'),
  nome: yup.string().required('Digite seu nome!'),
  data: yup.string().required('Escolha a data da sua compra!'),
  });