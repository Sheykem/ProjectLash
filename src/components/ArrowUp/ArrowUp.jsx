import React from 'react';
import s from './ArrowUp.module.css';
const ArrowUp = () => {
  const onClickNav = (event) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <a className={s.scrollUp}>
      <img onClick={onClickNav} src="/img/MyIcon/upp.png" alt="arrow" />
    </a>
  );
};

export default ArrowUp;
