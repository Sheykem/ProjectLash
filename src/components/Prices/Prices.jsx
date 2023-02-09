import React from 'react';
import s from './Prices.module.css';
const Prices = () => {
  return (
    <div className={s.Prices} id="price">
      <h2 className={s.title}>Прайс</h2>
      <div className={s.borderBottom}></div>
      <div className={s.priceBlock}>
        <ul className={s.services}>
          <h2>Услуга:</h2>
          <li>Классика | 2д | 3д</li>
          <li>4д | 5д </li>
          <li>Голивуд </li>
          <li>L/M </li>
          <li>Цветные</li>
          <li>Снятие без наращивания </li>
          <li>Корекция бровей(пинцет)</li>
          <li>Корекция бровей + окрашивание</li>
        </ul>
        <ul className={s.price}>
          <h2>Цена:</h2>
          <li>500грн.</li>
          <li>550грн.</li>
          <li>600грн.</li>
          <li> +50грн.</li>
          <li>+50грн.</li>
          <li>70/100грн.</li>
          <li>100грн.</li>
          <li>200грн.</li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;
