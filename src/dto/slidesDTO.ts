export interface Photos{
    srcimg: string,
    titulo: string,
    subtitulo: string,
    button:string,
    link:string
  }  

export interface CarouselProps {
    items: Photos[]; 
  }