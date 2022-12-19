import useSocialIcons from '@/lib/hooks/useSocialIcons';
import { SocialNameType } from '@/lib/types';

import UnstyledLink from '@/components/links/UnstyledLink';

import socials from '@/constant/socials';

const Footer = () => {
  const icons = useSocialIcons();
  return (
    <footer className='relative z-50 flex h-14 border-t border-divider text-lg'>
      <div className='flex h-full items-center px-4'>connect me on:</div>
      <nav className='flex h-full flex-1'>
        {Object.entries(socials).map((s) => {
          if (s[0] === 'github') return null;
          return (
            <UnstyledLink
              href={s[1]}
              target='_blank'
              className='flex h-full items-center border-l border-divider px-6 last:border-r'
              key={s[0]}
              rel='noreferrer'
            >
              <span className='aspect-square w-6'>
                {icons[s[0] as SocialNameType]}
              </span>
            </UnstyledLink>
          );
        })}
      </nav>
      <UnstyledLink
        target='_blank'
        href={socials.github}
        className='flex h-full items-center border-l border-divider px-8'
        rel='noreferrer'
      >
        Chandraprakash-Darji{' '}
        <span className='ml-2 aspect-square w-5'>{icons.github}</span>
      </UnstyledLink>
    </footer>
  );
};

export default Footer;
