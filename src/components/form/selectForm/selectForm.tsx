import { Container, Title, Select } from './styledSelectForm';
import {dadosLojaProps} from '../../../dto/lojasDTO'

interface SelectInputProps {
  title: string;
  options: dadosLojaProps[] | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  name?: string;
  value: string;
}

export function SelectInput({ title, name, options, onChange, value, error }: SelectInputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Select onChange={onChange} name={name} value={value}
      
      >
        
        {options? options.map((option, index) => (
          <option key={index} value={option.nome}>
            {option.nome}
          </option>
        )): <></>}
      </Select>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Container>
  );
}
