import React from 'react';
import s from './WhyChooseMe.module.css';
const WhyChooseMe = () => {
  return (
    <div className={s.WhyChooseMe}>
      <div className={s.title}>
        <h2 className={s.h2}>Почему стоит выбрать меня?</h2>
        <div className={s.borderBottom}></div>
      </div>
      <div className={s.gridDivBlock}>
        <div>
          <img src="/img/1ItemChoouse.png" alt="#1" />
          <p>Специализируюсь на качествном наращивании ресниц</p>
        </div>
        <div>
          <img src="/img/2ItemChoouse.png" alt="#2" />
          <p>Мои приоритеты - безопасность и удобство</p>
        </div>
        <div>
          <img src="/img/3ItemChoouse.png" alt="#2" />
          <p>Время работы - 90 минут и ваши идеальные реснички готовы</p>
        </div>
        <div>
          <img src="/img/4ItemChoouse.png" alt="#2" />
          <p>Работаю только на качественных материалах </p>
        </div>
        <div>
          <img src="/img/5ItemChoouse.png" alt="#2" />
          <p>Индивидуальный подход к каждому клиенту</p>
        </div>
        <div>
          <img src="/img/6ItemChoouse.png" alt="#2" />
          <p>Не делаю шаблонно</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
