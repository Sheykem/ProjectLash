import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Error.module.css';
const Error = () => {
  return (
    <div className={s.error}>
      <div className={s.infoError}>
        <div className={s.errorInfoImgText}>
            <img src="/img/ErrorImg.jpg" alt="" />
          <h2 className={s.title}>Ошибка 404</h2>
        </div>
        <p>Кажется что-то пошло не так! Страница которую вы запрашиваете не существует.</p>
        <p>
          Взможно вы имели ввиду <NavLink to='/'>сcылка</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Error;
