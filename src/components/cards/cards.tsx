

    import { Container, ContainerCard, Title, Cards, Photo, Button } from './stylesCards';
    import { useState, useEffect } from 'react';
    
    interface PartnerLogo {
        src: string;
    }
    
    export default function Card() {
        const partnerLogos: PartnerLogo[] = [
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
            
            
        ];
    
        const [cardsPerPage, setCardsPerPage] = useState<number>(7);
    const [currentPage, setCurrentPage] = useState<number>(1);
    
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = partnerLogos.slice(indexOfFirstCard, indexOfLastCard);
    
        const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

        useEffect(() => {
            // Atualiza a quantidade de cartões por página com base no tamanho da tela
            const updateCardsPerPage = () => {
                setCardsPerPage(window.innerWidth > 768 ? 7 : 2);
            };
    
            // Adiciona um listener de redimensionamento para atualizar a quantidade de cartões por página
            window.addEventListener('resize', updateCardsPerPage);
    
            // Chama a função de atualização inicialmente
            updateCardsPerPage();
    
            // Remove o listener de redimensionamento ao desmontar o componente
            return () => {
                window.removeEventListener('resize', updateCardsPerPage);
            };
        }, []);
    
        return (
            <Container>
                <Title>Parceiros</Title>
    
                <ContainerCard>
                    {currentCards.map((partner, index) => (
                        <Cards key={index}>
                            <Photo src={partner.src} alt={`Parceiro ${index}`} />
                        </Cards>
                    ))}
                </ContainerCard>
    
                {/* Adicionando a navegação da paginação com bolinhas */}
                <div style={{ textAlign: 'center' }}>
                    {Array.from({ length: Math.ceil(partnerLogos.length / cardsPerPage) }).map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => paginate(index + 1)}
                           active={index + 1 === currentPage}
                        >
                            {/* Poderia usar um ícone de bolinha ou outro indicador visual */}
                            &bull;
                        </Button>
                    ))}
                </div>
            </Container>
        );
    }
    