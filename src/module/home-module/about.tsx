import Image from 'next/image';
import mainPhoto from '@/shared/img/main_photo.jpg';
import { DesignIcon, MobileDevIcon, WebDevelopmentIcon } from '@/shared/icons';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__photo">
            <Image fill src={mainPhoto.src} alt="photo" />
          </div>
          <div className="about__descr">
            <h2 className="title title_fz16 about__title">Про меня</h2>
            <div className="title title_fz36 about__subtitle">Меня зовут Александра</div>
            <div className="divider"></div>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </p>
          </div>
          <div className="about__skills">
            <div className="about__skills-item">
              <div className="about__skills-circle">
                <WebDevelopmentIcon />
              </div>
              <div>
                <div className="title title_fz14">Web-разработка</div>
                <p className="about__skills-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="about__skills-item">
              <div className="about__skills-circle">
                <MobileDevIcon />
              </div>
              <div>
                <div className="title title_fz14">Разработка приложений</div>
                <p className="about__skills-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="about__skills-item">
              <div className="about__skills-circle">
                <DesignIcon />
              </div>
              <div>
                <div className="title title_fz14">UI/UX Design</div>
                <p className="about__skills-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
