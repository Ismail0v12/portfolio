export const Price = () => {
  return (
    <section className="price" id="price">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Прайс-лист</h2>
        <div className="divider"></div>

        <div className="price__wrapper">
          <div className="price__item">
            <div className="price__type">Landing-page</div>
            <div className="price__count">от 8000 руб.</div>
            <div className="price__descr">
              Одностраничный сайт для презентации услуг/товаров/...
            </div>
          </div>
          <div className="price__item">
            <div className="price__type">Web-приложение</div>
            <div className="price__count">от 28000 руб.</div>
            <div className="price__descr">Приложение внутри браузера для лучшего комфорта</div>
          </div>
          <div className="price__item">
            <div className="price__type">Корпоративный сайт</div>
            <div className="price__count">от 20000 руб.</div>
            <div className="price__descr">Сайт для вашего бизнеса или компании</div>
          </div>
          <div className="price__item">
            <div className="price__type">Android/IOS Приложение</div>
            <div className="price__count">от 25000 руб.</div>
            <div className="price__descr">Приложение для смартфона любой ОС</div>
          </div>
          <div className="price__item">
            <div className="price__type">Интернет-магазин</div>
            <div className="price__count">от 30000 руб.</div>
            <div className="price__descr">Инструмент для ваших продаж в сети</div>
          </div>
          <div className="price__item">
            <div className="price__type">Дизайн</div>
            <div className="price__count">Индивидуально</div>
            <div className="price__descr">Создам дизайн для вашего сайта/приложения...</div>
          </div>
        </div>
      </div>
    </section>
  );
};
