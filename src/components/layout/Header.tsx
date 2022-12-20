import HeaderLink from '@/components/links/HeaderLink';

const links = [
  { href: '/', label: '_home' },
  { href: '/about', label: '_about-me' },
  { href: '/projects', label: '_projects' },
];

const Header = () => {
  return (
    <header className='relative z-50 flex h-14 border-b border-divider text-lg'>
      <div className='flex h-full w-full max-w-sm items-center px-4'>
        chandraprakash.codes
      </div>
      <nav className='flex h-full flex-1'>
        {links.map((link) => (
          <HeaderLink href={link.href} key={link.label}>
            {link.label}
          </HeaderLink>
        ))}
      </nav>
      <HeaderLink href='/contact'>_contact-me</HeaderLink>
    </header>
  );
};

export default Header;
