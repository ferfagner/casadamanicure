import { Container, ContainerCard, Title, Cards, Photo } from './stylesCards';

export default function Card() {


    const partnerLogos = [
        {
            src: 'https://larabluwe.vtexassets.com/assets/vtex/assets-builder/larabluwe.fast-beauty/4.0.3/images/lara-bluwe___68df6272637627fb0ea033c35c10d8d5.png'
        },
        {
            src: 'https://larabluwe.vtexassets.com/assets/vtex/assets-builder/larabluwe.fast-beauty/4.0.3/images/lara-bluwe___68df6272637627fb0ea033c35c10d8d5.png'
        },
        {
            src: 'https://larabluwe.vtexassets.com/assets/vtex/assets-builder/larabluwe.fast-beauty/4.0.3/images/lara-bluwe___68df6272637627fb0ea033c35c10d8d5.png'
        },
        {
            src: 'https://larabluwe.vtexassets.com/assets/vtex/assets-builder/larabluwe.fast-beauty/4.0.3/images/lara-bluwe___68df6272637627fb0ea033c35c10d8d5.png'
        },
        {
            src: 'https://larabluwe.vtexassets.com/assets/vtex/assets-builder/larabluwe.fast-beauty/4.0.3/images/lara-bluwe___68df6272637627fb0ea033c35c10d8d5.png'
        },
        {
            src: 'https://larabluwe.vtexassets.com/assets/vtex/assets-builder/larabluwe.fast-beauty/4.0.3/images/lara-bluwe___68df6272637627fb0ea033c35c10d8d5.png'
        },
        {
            src: 'https://larabluwe.vtexassets.com/assets/vtex/assets-builder/larabluwe.fast-beauty/4.0.3/images/lara-bluwe___68df6272637627fb0ea033c35c10d8d5.png'
        },
        
        // Adicione mais objetos conforme necessário
    ];

    return (
        <Container>
            <Title>Parceiros</Title>


            <ContainerCard>
                {partnerLogos.map((partner, index) => (

                    <Cards key={index}>
                        <Photo src={partner.src} alt={`Parceiro ${index}`} />

                    </Cards>

                ))}
            </ContainerCard>

        </Container>
    );
}
