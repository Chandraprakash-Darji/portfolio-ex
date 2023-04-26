import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className="fony-bold flex flex-1 flex-col gap-6 pt-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Hii
        <span className="not-italic"> 👋 </span>
        I'am <span className="text-primary"> Chandra</span>,{' '}
      </Heading3>
      <article className="relative space-y-5 before:block before:-translate-x-8 before:font-mono before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>'] after:block after:-translate-x-10 after:font-mono after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        <p>
          A frontend developer with a focus on building beautiful and responsive
          web applications. My tech stack includes Next.js, React, TailwindCSS,
          and TypeScript, and I'm always eager to learn and expand my skills.
        </p>
        <p>
          As a freelancer, I specialize in providing stress-free and
          collaborative development processes to help my clients bring their
          website ideas to life. Whether it's a simple portfolio website or a
          complex e-commerce platform, I have the skills and expertise needed to
          deliver high-quality end products that accurately reflect my clients'
          vision and meet their unique requirements.
        </p>

        <p>
          If you're looking for a reliable and skilled frontend developer to
          help you build your website, look no further than me. I'm committed to
          helping my clients achieve their goals and providing exceptional
          service every step of the way.
        </p>
      </article>
    </div>
  );
};
export default InfoSection;
