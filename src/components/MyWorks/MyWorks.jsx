import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowUp from '../ArrowUp/ArrowUp';
import Vaiber from '../Vaiber/Vaiber';
import s from './MyWorks.module.css';
const MyWorks = () => {
  return (
    <div className={s.MyWorks} id="work">
      <h2 className={s.title}>Мои Работы</h2>
      <div className={s.borderBottom}></div>
      <div className={s.beackContent}>
        <NavLink to="/">
          <button className={s.workBtn}>Назад</button>
        </NavLink>
      </div>
      <div className={s.gridDivBlock}>
        <div className={s.imger}>
          <img className={s.work1} width={300} src="/img/PhotoWork/work1.jpg" alt="photo1" />
        </div>
        <div>
          <img className={s.work2} width={300} src="/img/PhotoWork/work2.jpg" alt="photo2" />
        </div>
        <div>
          <img className={s.work3} width={300} src="/img/PhotoWork/work3.jpg" alt="photo3" />
        </div>
        <div>
          <img className={s.work4} width={300} src="/img/PhotoWork/work4.jpg" alt="photo4" />
        </div>
        <div>
          <img className={s.work5} width={300} src="/img/PhotoWork/work5.jpg" alt="photo5" />
        </div>
        <div>
          <img className={s.work6} width={300} src="/img/PhotoWork/work6.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work1} width={300} src="/img/PhotoWork/work7.jpg" alt="photo1" />
        </div>
        <div>
          <img className={s.work2} width={300} src="/img/PhotoWork/work8.jpg" alt="photo2" />
        </div>
        <div>
          <img className={s.work3} width={300} src="/img/PhotoWork/work9.jpg" alt="photo3" />
        </div>
        <div>
          <img className={s.work4} width={300} src="/img/PhotoWork/work10.jpg" alt="photo4" />
        </div>
        <div>
          <img className={s.work5} width={300} src="/img/PhotoWork/work11.jpg" alt="photo5" />
        </div>
        <div>
          <img className={s.work6} width={300} src="/img/PhotoWork/work12.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work1} width={300} src="/img/PhotoWork/work13.jpg" alt="photo1" />
        </div>
        <div>
          <img className={s.work2} width={300} src="/img/PhotoWork/work14.jpg" alt="photo2" />
        </div>
        <div>
          <img className={s.work3} width={300} src="/img/PhotoWork/work15.jpg" alt="photo3" />
        </div>
        <div>
          <img className={s.work4} width={300} src="/img/PhotoWork/work16.jpg" alt="photo4" />
        </div>
        <div>
          <img className={s.work5} width={300} src="/img/PhotoWork/work17.jpg" alt="photo5" />
        </div>
        <div>
          <img className={s.work6} width={300} src="/img/PhotoWork/work18.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work1} width={300} src="/img/PhotoWork/work19.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work2} width={300} src="/img/PhotoWork/work20.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work3} width={300} src="/img/PhotoWork/work21.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work4} width={300} src="/img/PhotoWork/work22.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work5} width={300} src="/img/PhotoWork/work23.jpg" alt="photo6" />
        </div>
        <div>
          <img className={s.work6} width={300} src="/img/PhotoWork/work24.jpg" alt="photo6" />
        </div>
      </div>
      <div>
        <ArrowUp />
      </div>
    </div>
  );
};

export default MyWorks;
