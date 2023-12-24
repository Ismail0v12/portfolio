import React from 'react';
import { GithubSquaredIcon, LinkedinIcon, TelegramIcon } from '@/shared/icons';

export const SocialMedia = () => {
  return (
    <aside className="sidepanel">
      <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" className="sidepanel__link ">
        <LinkedinIcon />
      </a>
      <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" className="sidepanel__link">
        <GithubSquaredIcon />
      </a>
      <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target="_blank" className="sidepanel__link">
        <TelegramIcon />
      </a>
      <div className="sidepanel__divider"></div>
      <div className="sidepanel__text">
        <span>Социальные сети</span>
      </div>
    </aside>
  );
};
