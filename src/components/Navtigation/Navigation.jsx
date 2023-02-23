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
    if (pathname !== '/') {
      window.scrollTo(0, 0);
    }
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
            <NavLink to="/#services">Услуги</NavLink>
          </li>
          <li className={s.ListItem}>
            <NavLink to="/#price">Цены</NavLink>
          </li>

          <li className={s.ListItem}>
            <NavLink to="/#recall">
              Отзывы
            </NavLink>
          </li>
          <li className={s.ListItem}>
            <NavLink to="/#map" >
              Как добраться
            </NavLink>
          </li>
          <li className={s.ListItem}>
            <NavLink to="/works">Работы</NavLink>
          </li>
          <li className={s.ListItem}>
            <NavLink to="/study">Обучение</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
