import React from 'react';
import ImageGallery from 'react-image-gallery';
import { NavLink } from 'react-router-dom';
import s from './Slaider.module.css';

const Slaider = () => {
  const images = [
    {
      original: '/img/SliderPhoto/slider1.jpg',
      thumbnail: '/img/SliderPhoto/slider1.jpg',
    },
    {
      original: '/img/SliderPhoto/slider22.jpg',
      thumbnail: '/img/SliderPhoto/slider22.jpg',
    },
    {
      original: '/img/SliderPhoto/slider3.jpg',
      thumbnail: '/img/SliderPhoto/slider3.jpg',
    },
  ];
  return (
    <div className={s.slider}>
      <div className={s.text}>
        <p className={s.title}>Обучение:</p>
        <p>От Alines Lash Studio</p>
        <p>Базовый курс: "Lashmaker с нуля"</p>

        <NavLink to="/study">
          <button className={s.sliderBtn}>
            <span>Узнать подробности</span>
          </button>
        </NavLink>
      </div>
      <div>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};
export default Slaider;
