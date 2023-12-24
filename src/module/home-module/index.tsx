import { Promo } from './promo';
import { About } from './about';
import { Resume } from './resume';
import { Skills } from './skills';
import { Portfolio } from './portfolio';
import { Price } from './price';
import { Contacts } from './contacts';

const HomeModule = () => {
  return (
    <main>
      <Promo />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Price />
      <Contacts />
    </main>
  );
};

export default HomeModule;
