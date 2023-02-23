import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = (props) => {
  const onClickNav = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('data-target');
    const el = document.querySelector(target);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'auto',
      });
    }
  };

  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === '/' && hash !== '') {
      const el = document.querySelector(hash);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth',
        });
        window.location.hash = '';
      }
    }
  }, [pathname, hash]);
  return (
    <div className={s.navigation}>
      <div className={s.navMenu}>
        <ul className={s.navList}>
          <li className={s.ListItem}>
            <a href="/#services">Услуги</a>
          </li>
          <li className={s.ListItem}>
            <a href="/#price">Цены</a>
          </li>

          <li className={s.ListItem}>
            <a href="/#recall">
              Отзывы
            </a>
          </li>
          <li className={s.ListItem}>
            <a href="/#map" >
              Как добраться
            </a>
          </li>
          <li className={s.ListItem}>
            <a href="/works">Работы</a>
          </li>
          <li className={s.ListItem}>
            <a href="/study">Обучение</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
