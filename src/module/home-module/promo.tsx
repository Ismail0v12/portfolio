import React, { useState } from 'react';
import { Navbar } from '@/widgets/navbar';

export const Promo = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const toggleSideBar = () => {
    setOpenSideBar((d) => !d);
  };
  return (
    <section className="promo">
      <Navbar isOpen={openSideBar} onClose={toggleSideBar} />
      <div className="hamburger" onClick={toggleSideBar}>
        <span></span>
        <span className="long"></span>
        <span></span>
      </div>
      <div className="container">
        <div className="title title_fz16 promo__subtitle">Меня зовут Ориф Исмаилов</div>
        <h1 className="title title_fz48 promo__title">Я web-разработчик из города Ташкент</h1>
        <div className="promo__btns">
          <a href="#" className="promo__link btn">
            Портфолио
          </a>
          <a href="#" className="promo__link">
            Про меня
          </a>
        </div>
      </div>
    </section>
  );
};
