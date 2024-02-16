import * as yup from "yup";

const isCPF = (value: string) => {
  const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
  return cpfRegex.test(value);
};


export  const schema = yup.object().shape({
    nome: yup.string().required('Escrever seu nome é Obrigatório!'),
    imgFunc: yup.string(),
    idLoja: yup.string().required('É Obrigatório selecionar a Loja em que o funcionario trabalha!'),
    cpf: yup.string().required('CPF é obrigatório').test('cpf', 'CPF inválido', isCPF),
    meta: yup.number().required('Escrever a meta mensal do funcionario'),
    userName: yup.string().required('Selecionar o Username é obrigatorio!'),
    perfil: yup.number().required('Defina o Perfil deste Funcionario'),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória'),
    password2: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('A senha é obrigatória').oneOf([yup.ref('password'), ''], 'As senhas precisam ser iguais')
    .required('Confirme sua senha')
  });