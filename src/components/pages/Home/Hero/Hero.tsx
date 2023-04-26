import { FC, useEffect } from 'react';
import { CurveSvg, DownloadCV } from '.';
import AnimatedText from '../../../widget/AnimatedText';

const Hero: FC = () => {
  useEffect(() => {
    const NavBar = document.getElementById('navbar');
    const hero = document.getElementById('hero');
    if (NavBar && hero) {
      const navheight = NavBar.getBoundingClientRect().height;
      hero.style.setProperty('--x', `${navheight}px`);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative mx-auto flex select-none flex-col pt-8 pb-20 sm:text-xl md:flex-row md:justify-between md:pt-20 lg:gap-10 xl:pt-24 xl:pb-32 2xl:pt-28"
    >
      <div className="flex flex-col gap-3 pl-3 md:gap-5 lg:gap-10">
        <AnimatedText
          className="text-primary md:text-xl lg:text-2xl xl:text-3xl "
          text="I am"
          as={'p'}
          sudoClassName="before:text-base-200 before:content-['<p>_'] after:text-base-200 after:content-['_</p>']"
        />
        <h1 className="relative py-10 pl-10 font-RobotoCondensed text-4xl font-bold italic leading-[1.1] tracking-wide magic-spaceInUp before:absolute before:left-5 before:top-3 before:font-mono before:text-base before:font-normal before:not-italic before:tracking-tighter before:text-base-200 before:content-['<h1>'] after:absolute after:bottom-3 after:left-5 after:font-mono  after:text-base after:font-normal after:not-italic after:tracking-tighter after:text-base-200 after:content-['</h1>'] md:text-5xl lg:pl-20 lg:text-7xl lg:before:left-10 lg:before:top-0 lg:before:text-3xl lg:after:bottom-0 lg:after:left-10 lg:after:text-3xl xl:text-[6rem]">
          Chandra
          <span className="hidden outline-none md:inline">
            <br />
          </span>
          Prakash Darji
        </h1>
        <AnimatedText
          as="p"
          className="text-primary md:text-xl lg:text-2xl xl:text-3xl "
          text={' Frontend Developer // UI Designer '}
          sudoClassName="before:text-base-200 before:content-['<p>'] after:text-base-200 after:content-['</p>']"
        />
      </div>
      <DownloadCV />
      <CurveSvg />
    </section>
  );
};

export default Hero;
