import React from 'react';
import s from './styles/style.module.scss';

function Footer(): React.JSX.Element {
  return (
    <div className={s.footer}>
      <div className={s.footer__vk}>
        <a href="http://vk.com/glebpolk">
          <img
            className={s.vk__img}
            src="https://cdn.icon-icons.com/icons2/3717/PNG/512/vk_social_media_logo_brand_business_icon_230291.png"
            alt="icon"
          />
          VK
        </a>
      </div>
      <div className={s.footer__inst}>
        <a href="http://www.instagram.com/glebpol">
          <img
            className={s.inst__img}
            src="https://cdn.icon-icons.com/icons2/3717/PNG/512/photo_social_media_logo_facebook_instagram_photography_phot_icon_230308.png"
            alt="icon"
          />
          IG
        </a>
      </div>
      <div className={s.footer__tg}>
        <a href="https://t.me/glebpolkovnikov">
          <img
            className={s.tg__img}
            src="https://cdn.icon-icons.com/icons2/3717/PNG/512/telegram_chat_brand_communication_message_free_icon_230295.png"
            alt="icon"
          />
          TG
        </a>
      </div>
    </div>
  );
}

export default Footer;
