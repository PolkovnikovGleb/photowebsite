import React from 'react';
import s from './styles/style.module.scss';
import {socialMedia} from '../../configs/socialMedia';

function Footer(): React.JSX.Element {
  return (
    <div className={s.footer}>
      {socialMedia.map((item) => (
        <a href={item.link}>
          <img className={s.footer__img} src={item.linkImg} alt="icon" />
          {item.linkName}
        </a>
      ))}
    </div>
  );
}

export default Footer;
