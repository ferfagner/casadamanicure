import styled from 'styled-components';

export const ImgSlide= styled.img`
padding-top: 5px;
border-radius: 20px;
width: 99vw;
height: 85vh;
object-fit: cover;

`



export const Title= styled.h2`
    font-size: 3rem;
 font-weight: 700;
 margin-bottom: 2rem;
 color: ${(props) => props.theme.colors.primary};

`

export const SubTitle= styled.h5`
font-size: 1.5rem;
 margin-bottom: 2rem;
 color: ${(props) => props.theme.colors.primary};

`

export const Button= styled.button`
text-decoration: none;
background-color: ${(props) => props.theme.colors.primary};
color: ${(props) => props.theme.colors.with};
height: 3rem;
border-radius: 5px;

&:hover {
    border-bottom: 2px solid white;
    background-color: ${(props) => props.theme.colors.second};
    cursor:pointer ;
  }

`

