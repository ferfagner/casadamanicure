

    import { Container, ContainerCard, Button, ContaineraCard } from './CarrouselFuncStyled';
    import { useState, useEffect } from 'react';
    import { Funcionarios } from '../../dto/funcDTO';
import { CardFunc } from '../cardFunc/cardFunc';
    
    interface CardFuncProps{
        data: Funcionarios[]
      }
    
    export default function CarrouselFunc({data}:CardFuncProps) {
       
    
        const [cardsPerPage, setCardsPerPage] = useState<number>(7);
    const [currentPage, setCurrentPage] = useState<number>(1);
    
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
    
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
    
                <ContaineraCard>
                    {currentCards.map((funcionario) => (
                        <ContainerCard>
                        <CardFunc data={funcionario}/>
                        </ContainerCard>
                    ))}
               </ContaineraCard>
    
                {/* Adicionando a navegação da paginação com bolinhas */}
                <div style={{ textAlign: 'center' }}>
                    {Array.from({ length: Math.ceil(data.length / cardsPerPage) }).map((_, index) => (
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
    