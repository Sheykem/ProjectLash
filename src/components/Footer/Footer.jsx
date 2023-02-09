import React from 'react';
import s from './Footer.module.css';
const Footer = () => {
  return (
    <div className={s.Footer}>
      <div className={s.adress}>
        <p>LASH LUX</p>
        <br />
        <p>Трегубенко 13</p>
      </div>
      <div className={s.myAdress}>Для создания сайта обращайтесь:
        <p>+38(050)279-31-68</p>
      </div>
      <div className={s.insta}>
        <a target='blank'  href="https://instagram.com/alines_lash?igshid=YmMyMTA2M2Y=">
          <img src="/img/MyIcon/insta2.png" alt="" />
          <p className={s.number}>063 841-30-90</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
