import {Container, Title, Input} from './styledInputText'

    interface InputProps{
        title: string,
        placeholder: string,
        type?: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        error?: string
        name?:  string,
        value?:string
        onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    }


export function InputText({title,name, placeholder,onChange,onBlur, type,error,value }: InputProps){
    
    return(
        
        <Container>
            <Title>{title}</Title>
            <Input 
            onBlur={onBlur}
            placeholder={placeholder}
            onChange={onChange}
            type={type? type : 'text'}
            value={value}
            name={name}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </Container>
           
       

    )
}