import { Container, Title, Select } from './styledbutton';

interface SelectInputProps {
  title: string;
  options: [0,1,2,3,4,5,6,7,8,9,10];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  name?: string;
  value: number;
}

export function RadioButton({ title, name, options, onChange, value, error }: SelectInputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Select onChange={onChange} name={name} value={value}
      
      >
        
        {options? options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        )): <></>}
      </Select>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </Container>
  );
}
