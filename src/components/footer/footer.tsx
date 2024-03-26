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
                <Title>Radio</Title>
                <audio controls src="https://server06.srvsh.com.br:7304/stream/">
                    Seu navegador não suporta a reprodução de áudio.
                </audio>
            </Column>
        </FooterContainer>
        <ButtomFooter>
          
            <p>Todos os direitos reservados @Ferfagner</p>
        </ButtomFooter>
        </>
    )
}