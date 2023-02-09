import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import SkeletonHeaderAdress from './SkeletonHeader/SkeletonHeaderAdress';
import SkeletonHeaderContacts from './SkeletonHeader/SkeletonHeaderContacts';
import SkeletonHeaderMainLogo from './SkeletonHeader/SkeletonHeaderMainLogo';

const Header = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className={s.header}>
      <div className={s.divAdress}>
        {isLoading ? (
          <SkeletonHeaderAdress />
        ) : (
          <div className={s.adress}>
            <p className={s.lineHightP}>Адресс:</p>
            <p className={s.addresHover}>
              <strong>г.Запорожье</strong>
            </p>
            <p className={s.addresHover}>
              <strong>Трегубенко 13</strong>
            </p>
          </div>
        )}
      </div>
      {isLoading ? (
        <SkeletonHeaderMainLogo />
      ) : (
        <div className={s.flexer}>
          <div className={s.number}>
            <p>+38(063)841-30-90</p>
          </div>
          <NavLink to="/">
            <img className={s.logo} src="/img/loger.jpg" alt="PhotoLogo" />
          </NavLink>
        </div>
      )}
      {isLoading ? (
        <SkeletonHeaderContacts />
      ) : (
        <div className={s.lineHightDiv}>
          <div className={s.contacts}>Контакты:</div>
          <div className={s.numberViber}>
            <img
              className={s.iconViber}
              width={30}
              src="/img/MyIcon/viber_logo_icon_144761.png"
              alt="viber"
            />
            <p>
              <strong>+380(63)841-30-90</strong>
            </p>
          </div>
          <p className={s.insta}>
            <img src="/img/MyIcon/insta.png" alt="Icon" />
            <strong>Instagram: </strong>
            <a target='blank'  href="https://instagram.com/alines_lash?igshid=YmMyMTA2M2Y=">alines_lash</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
