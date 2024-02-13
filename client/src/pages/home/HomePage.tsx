import React from 'react';
import s from './styles/style.module.scss';
import {services} from '../../configs/services';

function HomePage(): React.JSX.Element {
  return (
    <div className={s.home}>
      <div className={s.home__description}>
        <img
          className={s.home__description_img}
          src="https://sun9-60.userapi.com/impf/F-dDtDNNC2oL0h9CoJSGCz6UXkYjHOEdbZbekA/NWf1plFl9Ew.jpg?size=943x943&quality=95&sign=c0d2750dd073603a33857775c338fd97&type=album"
          alt="photoadmin"
        />
        <div className={s.home__description_text}>
          <h4>Привет, на связи Глеб!</h4>
          <p className={s.text}>
            Уже более 10 лет не выпускаю фотоаппрарат из рук. За это время
            удалось реализовать десятки коммерческих проектво для региональных
            брендов для их социальных сетей. Познакомиться с новыми, интересными
            людми на индивидуальных фотосъемках, где мы совместно создаем
            волшебные изображения, которые хочется ставить на обои телефона. Рад
            знакомству, и жду воего собщения, идем создавать лучший визуал!
          </p>
        </div>
      </div>
      <div className={s.home__price}>
        {services.map((item) => (
          <div>
            <img
              className={s.home__price_img}
              src={item.nameImg}
              alt="photoprice2"
            />
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
