import React from 'react';
import s from './styles/style.module.scss';
import {socialMedia} from '../../configs/socialMedia';
import {Link} from 'react-router-dom';

function Footer(): React.JSX.Element {
  return (
    <div className={s.footer}>
      {socialMedia.map((item) => (
        <a href={item.link}>
          <img className={s.vk__img} src={item.imglink} alt="icon" />
          {item.linkname}
        </a>
      ))}
    </div>
  );
}

export default Footer;
