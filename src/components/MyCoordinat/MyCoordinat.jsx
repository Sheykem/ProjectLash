import React from 'react';
import s from './MyCoordinat.module.css';

const map = () => {
  return (
    <div className={s.MyCoordinat} id="map">
      <div className={s.map}>
        <h2>Как добраться</h2>
        <div className={s.borderBottom}></div>
        <a target='_blank' href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A2%D1%80%D0%B5%D0%B3%D1%83%D0%B1%D0%B5%D0%BD%D0%BA%D0%BE,+13,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8584583,35.0984159,17z/data=!3m1!4b1!4m5!3m4!1s0x40dc66cf072d1b15:0x5c26093685c5d01e!8m2!3d47.8584583!4d35.0984159">
          <img src="/img/map1.jpg" alt="map" />
        </a>
        <button className={s.flashingBtn}>
          <a target='_blank'  href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A2%D1%80%D0%B5%D0%B3%D1%83%D0%B1%D0%B5%D0%BD%D0%BA%D0%BE,+13,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5,+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+69000/@47.8584583,35.0984159,17z/data=!3m1!4b1!4m5!3m4!1s0x40dc66cf072d1b15:0x5c26093685c5d01e!8m2!3d47.8584583!4d35.0984159">Подробная информация</a>
        </button>
      </div>
    </div>
  );
};

export default map;
