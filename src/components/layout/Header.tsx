import { useRouter } from 'next/router';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: '_home' },
  { href: '/about', label: '_about-me' },
  { href: '/projects', label: '_projects' },
];

const Header = () => {
  const router = useRouter();
  return (
    <header className='relative z-50 flex h-14 border-b border-divider text-lg'>
      <div className='flex h-full w-full max-w-sm items-center px-4'>
        chandraprakash.codes
      </div>
      <nav className='flex h-full flex-1'>
        {links.map((link) => (
          <UnstyledLink
            href={link.href}
            className={clsxm(
              'flex h-full items-center px-8',
              'border-l border-divider',
              'border-b-2 border-b-transparent',
              'last:border-r',
              link.href === router.asPath && 'border-b-orange'
            )}
            key={link.label}
          >
            {link.label}
          </UnstyledLink>
        ))}
      </nav>
      <div className='flex h-full items-center border-l border-divider px-8'>
        _contact-me
      </div>
    </header>
  );
};

export default Header;
