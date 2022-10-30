import { FC } from 'react';

const Footer: FC = () => {
  return (
    <p className="py-10 text-center">
      || Design by{' '}
      <a
        href="https://dribbble.com/saaddesigns"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-primary hover:underline">Saad</span>
      </a>{' '}
      && coded by{' '}
      <a
        href="http://github.com/Chandraprakash-Darji"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <span className="text-primary hover:underline">Chandra</span>
      </a>{' '}
      ||
    </p>
  );
};

export default Footer;
