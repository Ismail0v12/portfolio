import Image from 'next/image';
import Link from 'next/link';

import mainPhoton from '@/shared/img/main_photo.jpg';
import { FacebookIcon, InstagramIcon, TelegramIcon } from '@/shared/icons';

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__photo">
            <Image src={mainPhoton.src} alt="photo" fill />
          </div>
          <div className="contacts__descr">
            <h2 className="title title_fz16 contacts__title">Контакты</h2>
            <div className="title title_fz36 contacts__subtitle">Свяжитесь со мной</div>
            <div className="divider"></div>

            <div className="title title_fz14 contacts__text">Любым удобным для вас способом:</div>
            <div className="contacts__social">
              <a
                href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                target="_blank"
                className="contacts__link"
              >
                <FacebookIcon />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
                target="_blank"
                className="contacts__link"
              >
                <TelegramIcon />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                target="_blank"
                className="contacts__link"
              >
                <InstagramIcon />
              </a>
            </div>
            <div className="title title_fz14 contacts__text">
              Или оставьте ваши данные и я сама вам напишу:
            </div>

            <form action="#" className="contacts__form">
              <div className="contacts__input">
                <input required name="name" id="name" type="text" />
                <label htmlFor="name">Ваше имя</label>
              </div>
              <div className="contacts__input">
                <input required name="email" id="email" type="email" />
                <label htmlFor="email">Ваша почта</label>
              </div>

              <div className="contacts__textarea">
                <textarea name="text" id="text"></textarea>
                <label htmlFor="text">Ваше сообщение</label>
              </div>
              <div className="contacts__triggers">
                <button className="contacts__btn btn">Отправить сообщение</button>
                <div className="contacts__policy">
                  <input required id="agreement" type="checkbox" />
                  <label htmlFor="agreement">
                    Я согласен(а) с <Link href="/policy">политикой конфиденциальности</Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
