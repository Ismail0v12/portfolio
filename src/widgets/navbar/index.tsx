import React from 'react';
import { CloseIcon, GithubSquaredIcon, LinkedinIcon, TelegramIcon } from '@/shared/icons';

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  return (
    <div className="menu" data-active={isOpen}>
      <div className="menu__block">
        <div className="menu__close" onClick={onClose}>
          <CloseIcon />
        </div>

        <nav>
          <ul className="menu__list">
            <li className="menu__link">
              <a href="#about">ПРО МЕНЯ</a>
            </li>
            <li className="menu__link">
              <a href="#resume">МОЙ ОПЫТ</a>
            </li>
            <li className="menu__link">
              <a href="#skills">МОИ НАВЫКИ</a>
            </li>
            <li className="menu__link">
              <a href="#portfolio">МОИ РАБОТЫ</a>
            </li>
            <li className="menu__link">
              <a href="#price">ПРАЙС-ЛИСТ</a>
            </li>
            <li className="menu__link">
              <a href="#contacts">КОНТАКТЫ</a>
            </li>
          </ul>
        </nav>

        <div className="menu__social">
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target="_blank"
            className="menu__social-link"
          >
            <LinkedinIcon />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            className="menu__social-link"
          >
            <GithubSquaredIcon />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
            target="_blank"
            className="menu__social-link"
          >
            <TelegramIcon />
          </a>
        </div>
      </div>
      <div className="menu__overlay" onClick={onClose}></div>
    </div>
  );
};
