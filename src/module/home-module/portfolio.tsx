import Image from 'next/image';
import uberImage from '@/shared/img/works/uber.jpg';
import pulseImage from '@/shared/img/works/pulse.jpg';
import breadImage from '@/shared/img/works/bread.jpg';
import plansImage from '@/shared/img/works/plans.jpg';
import ipadImage from '@/shared/img/works/ipad.jpg';
import macImage from '@/shared/img/works/mac.jpg';

export const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Портфолио</h2>
        <div className="title title_fz36 title__section-subtitle">Мои работы</div>
        <div className="divider"></div>

        <div className="portfolio__wrapper">
          <a href="#" className="portfolio__item">
            <Image fill src={uberImage.src} alt="uber" />
          </a>
          <a href="#" className="portfolio__item">
            <Image fill src={pulseImage.src} alt="pulse" />
          </a>
          <a href="#" className="portfolio__item">
            <Image fill src={breadImage.src} alt="test" />
          </a>
          <a href="#" className="portfolio__item vertical">
            <Image fill src={plansImage.src} alt="test" />
          </a>
          <a href="#" className="portfolio__item">
            <Image fill src={ipadImage.src} alt="test" />
          </a>
          <a href="#" className="portfolio__item horizonal">
            <Image fill src={macImage.src} alt="test" />
          </a>
        </div>
      </div>
    </section>
  );
};
