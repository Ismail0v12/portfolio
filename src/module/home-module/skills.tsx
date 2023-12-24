import {
  Css3Icon,
  Html5Icon,
  JqueryIcon,
  JsIcon,
  MongoDbIcon,
  NodejsIcon,
  ReactIcon,
} from '@/shared/icons';

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Навыки</h2>
        <div className="title title_fz36 title__section-subtitle">Что я использую в работе</div>
        <div className="divider"></div>

        <div className="skills__items">
          <div className="skills__item">
            <div className="skills__item-img">
              <Html5Icon />
            </div>
            <h3 className="title title_fz14">HTML5</h3>
            <p>
              Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне
              создавать более SEO-оптимизированную структуру вашего продукта
            </p>
          </div>
          <div className="skills__item">
            <div className="skills__item-img">
              <Css3Icon />
            </div>
            <h3 className="title title_fz14">CSS3</h3>
            <p>
              Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или
              приложения. Все ограничивается только вашей фантазией!
            </p>
          </div>
          <div className="skills__item">
            <div className="skills__item-img">
              <JsIcon />
            </div>
            <h3 className="title title_fz14">Java Script</h3>
            <p>
              Этот язык программирования позволяет оживить все что угодно: слайдеры, окна,
              подсказки, вкладки, получение данных от сервера и многое другое
            </p>
          </div>
          <div className="skills__item">
            <div className="skills__item-img">
              <JqueryIcon />
            </div>
            <h3 className="title title_fz14">Jquery</h3>
            <p>
              Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в
              проект мы её не будем, но навык работы с ней присутствует
            </p>
          </div>
          <div className="skills__item">
            <div className="skills__item-img">
              <ReactIcon />
            </div>
            <h3 className="title title_fz14">React</h3>
            <p>
              Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально
              интерактивный продукт именно под ваши цели
            </p>
          </div>
          <div className="skills__item">
            <div className="skills__item-img">
              <NodejsIcon />
            </div>
            <h3 className="title title_fz14">Node.js</h3>
            <p>
              Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут
              выполнять действия, которые пользователь не видит
            </p>
          </div>
          <div className="skills__item">
            <div className="skills__item-img">
              <MongoDbIcon />
            </div>
            <h3 className="title title_fz14">Mongo.db</h3>
            <p>
              Это нереляционная база данных, которая будет хранить данные вашего сайта или
              приложения
            </p>
          </div>
        </div>

        <div className="skills__ratings">
          <div className="skills__ratings-item">
            <div className="title title_fz14 skills__ratings-title">Создание сайтов</div>
            <div className="skills__ratings-counter">100%</div>
            <div className="skills__ratings-line">
              <span></span>
            </div>
          </div>
          <div className="skills__ratings-item">
            <div className="title title_fz14 skills__ratings-title">Создание приложений</div>
            <div className="skills__ratings-counter">85%</div>
            <div className="skills__ratings-line">
              <span></span>
            </div>
          </div>
          <div className="skills__ratings-item">
            <div className="title title_fz14 skills__ratings-title">Работа с данными</div>
            <div className="skills__ratings-counter">90%</div>
            <div className="skills__ratings-line">
              <span></span>
            </div>
          </div>
          <div className="skills__ratings-item">
            <div className="title title_fz14 skills__ratings-title">Креативность</div>
            <div className="skills__ratings-counter">75%</div>
            <div className="skills__ratings-line">
              <span></span>
            </div>
          </div>
          <div className="skills__ratings-item">
            <div className="title title_fz14 skills__ratings-title">Создание дизайна</div>
            <div className="skills__ratings-counter">90%</div>
            <div className="skills__ratings-line">
              <span></span>
            </div>
          </div>
          <div className="skills__ratings-item">
            <div className="title title_fz14 skills__ratings-title">Soft skills</div>
            <div className="skills__ratings-counter">95%</div>
            <div className="skills__ratings-line">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
