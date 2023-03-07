import React from 'react';
import s from './Recall.module.css';
import ImageGallery from 'react-image-gallery';

const Recall = () => {
  const images = [
    {
      original: '/img/Recall/6.jpg',
      thumbnail: '/img/Recall/6.jpg',
      originalWidth : 1000,
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/7.jpg',
      thumbnail: '/img/Recall/7.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/8.jpg',
      thumbnail: '/img/Recall/8.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/9.jpg',
      thumbnail: '/img/Recall/9.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/10.jpg',
      thumbnail: '/img/Recall/10.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/11.jpg',
      thumbnail: '/img/Recall/11.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/12.jpg',
      thumbnail: '/img/Recall/12.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/13.jpg',
      thumbnail: '/img/Recall/13.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
    {
      original: '/img/Recall/14.jpg',
      thumbnail: '/img/Recall/14.jpg',
      originalHeight: 700,
      thumbnailHeight: 120,
    },
  ];
  return (
    <div className={s.Recall} id="recall">
      <h2>Отзывы</h2>
      <div className={s.borderBottom}></div>
      <div className={s.img}>
        <ImageGallery  items={images} />
      </div>
    </div>
  );
};

export default Recall;
