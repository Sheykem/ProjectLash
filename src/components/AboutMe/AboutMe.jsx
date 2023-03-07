import React from 'react';
import ArrowUp from '../ArrowUp/ArrowUp';
import Vaiber from '../Vaiber/Vaiber';
import s from './AboutMe.module.css';
import SkeletonAboutMe from './SkeletonAboutMe';

const AboutMe = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  return (
    <div className={s.AboutMe}>
      {isLoading ? (
        <SkeletonAboutMe />
      ) : (
        <>
          <div className={s.title}>
            <h1>Cтудия Lash Lux</h1>
          </div>
          <div className={s.ItemFlex}>
            <div className={s.myInfo}>
              <p>
                <strong>Меня зовут Алина. Я - мастер-стилист по наращиванию ресниц.</strong>{' '}
              </p>
              <p>
                С большой отдачей и трепетным вниманием я подхожу к своей работе. Являюсь фанатом
                своего дела и главным для меня является безопасность, красота и комфорт самого
                клиента.
              </p>
              <p>
                Я работаю на профессиональном оборудовании и использую материалы лидеров
                лэш-индустрии. Однако, мне удается придерживаться честной цены, которая
                соответствует уровню и качеству моих услуг.
              </p>
              <p>
                Но самым главным достижением являются Ваша приверженность, а также восторженные
                отзывы о сервисе, удобстве и красоте Ваших ресниц.
              </p>
              <p>
                <strong> С большим уважением и благодарностью за выбор, Алина.</strong>
              </p>
            </div>
            <div className={s.myPhoto}>
              <img src="/img/MyPhoto2.jpg" alt="MyPhoto" />
            </div>
          </div>
          <div className={s.btnFunctional}>
            <div className={s.divBtn}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
