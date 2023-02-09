import React from 'react';
import s from './MyServices.module.css';
const MyServices = () => {
  return (
    <div className={s.MyServices} id='services'>
      <div className={s.title}><h2>Мои Услуги</h2></div>
      <div className={s.borderBottom}></div>
      <div className={s.gridBlockDiv}>
        <div>
          <img src="/img/PhotoServices/Services1.jpg" alt="" />
          <p>Классика</p>
        </div>
        <div>
          <img src="/img/PhotoServices/Services2.jpg" alt="" />
          <p>2д/3д</p>
        </div>
        <div>
          <img src="/img/PhotoServices/Services3.jpg" alt="" />
          <p>4д/5д</p>
        </div>
        <div>
          <img src="/img/PhotoServices/Services4.jpg" alt="" />
          <p>Голивуд</p>
        </div>
        <div>
          <img src="/img/PhotoServices/Services5.jpg" alt="" />
          <p>Мокрый еффект</p>
        </div>
        <div>
          <img src="/img/PhotoServices/Services6.jpg" alt="" />
          <p>Стрелка</p>
        </div>
        <div>
          <img src="/img/PhotoServices/Services7.jpg" alt="" />
          <p>Лучи</p>
        </div>
        <div>
          <img width={50} src="/img/PhotoServices/Services88.jpg" alt="" />
          <p>Снятие ресничек</p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
