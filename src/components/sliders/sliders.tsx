import Slider from 'react-slick';
import { ImgSlide, SubTitle, Title, Button } from './stylesliders';
import { CarouselProps } from '../../dto/slidesDTO';

export default function Sliders({ items }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 


  return (
    
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <ImgSlide src={item.srcimg} alt={`slide ${index}`} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 2 }}>
                <Title>{item.titulo}</Title>
                <SubTitle>{item.subtitulo}</SubTitle>
                <Button onClick={() => window.open(item.link, '_blank')}>{item.button}</Button>
              </div>
            </div>
          ))}
        </Slider>
    
  );
}
