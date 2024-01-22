import { FooterContainer, Column, Title, ButtomFooter } from './styledfooter'


export default function Footer() {
    return (
        <>
        <FooterContainer>
            <Column>
                <Title>Sobre nós</Title>
                <p>A nossa empresa...</p>
             </Column>
            <Column>
                <Title>Atendimento</Title>
                <p>Aberto: Segunda a Sábado</p>
                <p>Horário: das 8hs as 18hs</p>
               
            </Column>
            <Column>
                <Title>Ajuda</Title>
                <p>Entre em Contato</p>
            </Column>
            <Column>
                <Title>Contato</Title>
                <p>Email:
                    </p>
                    <br/>
                <p>Telefone:
                    </p>
            </Column>
        </FooterContainer>
        <ButtomFooter>
          
            <p>Todos os direitos reservados @Ferfagner</p>
        </ButtomFooter>
        </>
    )
}