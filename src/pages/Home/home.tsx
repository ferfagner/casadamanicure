// Home.js
import { useEffect, useState } from 'react';
import Card from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Sliders from '../../components/sliders/sliders';
import { getSlides } from '../../db/slidesServices';
import { CarouselProps } from '../../dto/slidesDTO';
import { Carregamento } from './styledHome';
import {getAllProducts} from '../../api/serviceApi'

export function Home() {
  const [items, setItems] = useState([] as CarouselProps['items']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getAllProducts()
        console.log(products)
        const slides = await getSlides();
        setItems(slides);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Menu />
      {loading ? (
        <Carregamento>
       
        </Carregamento>
      ) : (
        <Sliders items={items} />
      )}
      <Card />
      <Card />
      <Footer />
    </>
  );
}
