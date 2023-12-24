import React from 'react';
import { CoursesIcon, DesignerIcon, DeveloperIcon, UniversityIcon } from '@/shared/icons';

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <h2 className="title title_fz16 title__section-title">Опыт</h2>
        <div className="title title_fz36 title__section-subtitle">Чем я буду полезна</div>
        <div className="divider"></div>

        <div className="resume__wrapper">
          <div className="resume__column">
            <h3 className="title title_fz20 resume__column-title">Образование</h3>
            <ul>
              <li>
                <div className="resume__item">
                  <div className="resume__item-head">
                    <div className="resume__item-icon">
                      <UniversityIcon />
                    </div>
                    <h4 className="title title_fz14">МГТУ им. Н. Э. Баумана</h4>
                    <div className="resume__item-location">
                      Диплом магистра | Москва (2014-2020)
                    </div>
                  </div>
                  <p className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmo.
                  </p>
                </div>
              </li>
              <li>
                <div className="resume__item">
                  <div className="resume__item-head">
                    <div className="resume__item-icon">
                      <CoursesIcon />
                    </div>
                    <h4 className="title title_fz14">Udemy</h4>
                    <div className="resume__item-location">Курсы по Web-разработке</div>
                  </div>
                  <p className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmo.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume__column">
            <h3 className="title title_fz20 resume__column-title">Опыт работы</h3>
            <ul>
              <li>
                <div className="resume__item">
                  <div className="resume__item-head">
                    <div className="resume__item-icon">
                      <DeveloperIcon />
                    </div>
                    <h4 className="title title_fz14">Front-End Developer</h4>
                    <div className="resume__item-location">EPAM | Москва (2018-2019)</div>
                  </div>
                  <p className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmo.
                  </p>
                </div>
              </li>
              <li>
                <div className="resume__item">
                  <div className="resume__item-head">
                    <div className="resume__item-icon">
                      <DesignerIcon />
                    </div>
                    <h4 className="title title_fz14">UI/UX Designer</h4>
                    <div className="resume__item-location">Squad Team | Москва (2018)</div>
                  </div>
                  <p className="resume__item-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmo.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
