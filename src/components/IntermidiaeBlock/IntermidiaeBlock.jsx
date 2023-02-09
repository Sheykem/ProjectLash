import React from 'react';
import s from './IntermidiaeBlock.module.css';
const IntermidiaeBlock = () => {
  return (
    <div className={s.backgorund}>
      <div className={s.intermidiaeBlock}>
        <div className={s.hoverBlock}>
          <h2 className={s.title}>
            За мокрый эффект, лучи, стрелка, а так же изгибы L и M не беру доплату !
          </h2>
          <p className={s.subTitle}>Записаться на наращивание сейчас</p>
          <div className={s.center}>
            <a href="https://msng.link/o/?380638413090=vi" target="_blank">
              <button>Напишите мне в Viber</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntermidiaeBlock;
