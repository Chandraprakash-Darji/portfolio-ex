import { FC } from 'react';
import SocialButton from './SocialButton';

const SocialWrapper: FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-16 md:flex-nowrap md:gap-10 md:pb-20 md:pt-48">
      <SocialButton
        text="LinkedIn"
        href="https://www.linkedin.com/in/Chandraprakash-Darji/"
        className={{
          x: 'md:-translate-x-16',
          y: 'md:-translate-y-36',
          size: 'w-32 md:w-60',
        }}
      />
      <SocialButton
        text="Github"
        href="http://github.com/Chandraprakash-Darji"
        className={{
          x: 'md:-translate-x-12',
          y: 'md:translate-y-16',
          size: 'w-32 md:w-44',
        }}
      />
      <SocialButton
        text="Mail"
        href="mailto:prakashchandra3786@gmail.com"
        className={{
          x: 'md:-translate-x-10',
          y: 'md:-translate-y-36',
          size: 'w-32 md:w-56',
        }}
      />
      <SocialButton
        text="Twitter"
        href="https://twitter.com/chandra_7852"
        className={{
          x: 'md:-translate-x-20',
          y: 'md:translate-y-20',
          size: 'w-32 md:w-40',
        }}
      />
    </div>
  );
};

export default SocialWrapper;
