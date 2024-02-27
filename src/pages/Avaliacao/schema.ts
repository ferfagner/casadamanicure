import * as yup from "yup";




export  const schema = yup.object().shape({
  codCupom: yup.string().required('Digite o codigo do cupom da sua compra!'),
  nota: yup.number().required('Escolha a sua nota!'),
  });