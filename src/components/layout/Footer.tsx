import useSocialIcons from '@/lib/hooks/useSocialIcons';

import NavLink from '@/components/links/NavLink';

import socials from '@/constant/socials';

const Footer = () => {
  const icons = useSocialIcons();
  return (
    <footer className='relative z-50 flex h-14 border-t border-divider text-lg'>
      <div className='flex h-full items-center px-4'>connect me on:</div>
      <nav className='flex h-full flex-1'>
        <NavLink href={socials.linkedin} target='_blank' rel='noreferrer'>
          <span className='aspect-square w-6'>{icons.linkedin}</span>
        </NavLink>
        <NavLink href={socials.twitter} target='_blank' rel='noreferrer'>
          <span className='aspect-square w-6'>{icons.twitter}</span>
        </NavLink>
      </nav>
      <NavLink target='_blank' href={socials.github} rel='noreferrer'>
        Chandraprakash-Darji{' '}
        <span className='ml-2 aspect-square w-5'>{icons.github}</span>
      </NavLink>
    </footer>
  );
};

export default Footer;
