import { useRouter } from 'next/router';

import clsxm from '@/lib/clsxm';

import NavLink from '@/components/links/NavLink';
import { UnstyledLinkProps } from '@/components/links/UnstyledLink';

type HeaderLinkProps = UnstyledLinkProps;

export default function HeaderLink({
  className,
  href,
  children,
  ...rest
}: HeaderLinkProps) {
  const { pathname } = useRouter();
  const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
  return (
    <NavLink
      href={href}
      className={clsxm(
        'border-b-2 border-b-transparent',
        isActive && 'border-b-orange text-white',
        className
      )}
      {...rest}
    >
      {children}
    </NavLink>
  );
}
