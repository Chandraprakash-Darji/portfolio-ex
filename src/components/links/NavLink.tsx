import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

type NavLinkProps = UnstyledLinkProps;

export default function NavLink({
  className,
  children,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <UnstyledLink
      href={href}
      className={clsxm(
        'flex h-full items-center px-6 hover:text-white focus-visible:text-white',
        'border-l border-divider',
        'last:border-r',
        className
      )}
      {...rest}
    >
      {children}
    </UnstyledLink>
  );
}
