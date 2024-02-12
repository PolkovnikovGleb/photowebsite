import React from 'react';
import s from './styles/style.module.scss';

function HomePage(): React.JSX.Element {
  return (
    <div className={s.home}>
      <div className={s.home__description}>
        <img
          className={s.description__img}
          src="https://sun9-60.userapi.com/impf/F-dDtDNNC2oL0h9CoJSGCz6UXkYjHOEdbZbekA/NWf1plFl9Ew.jpg?size=943x943&quality=95&sign=c0d2750dd073603a33857775c338fd97&type=album"
          alt="photoadmin"
        />
        <div className={s.description__text}>
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
        <div className={s.price__one}>
          <img
            className={s.price__img}
            src="https://sun9-8.userapi.com/impf/kyWmEG8azgEkNp2spZ3A7qqd4VbDA7iYLflhPA/dF8AB5E3UyQ.jpg?size=1728x2160&quality=95&sign=31965c80ae05e28df54e0de4f0d69709&type=album"
            alt="photoprice1"
          />
          <h5>Индивидуальная съeмка</h5>
          <p>Съемка для себя любимой</p>
        </div>
        <div className={s.price__two}>
          <img
            className={s.price__img}
            src="https://sun9-72.userapi.com/impf/c841239/v841239063/639c9/HtStrM2AHTM.jpg?size=640x800&quality=96&sign=a78601abbab7b51541071c7273a22aaf&type=album"
            alt="photoprice2"
          />
          <h5>Предметная съeмка</h5>
          <p>Съемка для Ozon и WB</p>
        </div>
        <div className={s.price__three}>
          <img
            className={s.price__img}
            src="https://sun9-19.userapi.com/impf/c830308/v830308288/c31d8/OkxM99oJZ18.jpg?size=1728x2160&quality=96&sign=d815d14b0766e514dcbc25c20e2b7cf0&type=album"
            alt="photoprice3"
          />
          <h5>Коммерческая съeмка</h5>
          <p>Для брендов/одежы/каталога</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
