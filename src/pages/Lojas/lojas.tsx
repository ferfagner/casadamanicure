// Home.js
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Sliders from '../../components/sliders/sliders';
import { getSlides } from '../../db/slidesServices';
import { CarouselProps } from '../../dto/slidesDTO';
import { Carregamento, Titulo } from './styledLojas';
import { CardLojas } from '../../components/cardLojas/cardLojas';
import { LojasProps } from '../../dto/lojasDTO';
import { getLojas } from '../../db/lojasServices';

export function Lojas() {
  const [items, setItems] = useState([] as CarouselProps['items']);
  const [lojas, setLojas] = useState([] as LojasProps['dataLoja']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const slides = await getSlides();
        setItems(slides);

        const lojasData = await getLojas();
        setLojas(lojasData);

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
        <Carregamento></Carregamento>
      ) : (
        <>
          <Sliders items={items} />
          <Titulo>
            Nossas Lojas
          </Titulo>
          <CardLojas dataLoja={lojas} />
        </>
      )}
      <Footer />
    </>
  );
}
