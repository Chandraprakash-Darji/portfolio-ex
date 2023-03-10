import { useRouter } from 'next/router';

import clsxm from '@/lib/clsxm';
import useMenuIcons from '@/lib/hooks/useMenuIcons';
import { FileExtType } from '@/lib/types';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

type SidebarMenuFileLinkProps = UnstyledLinkProps & {
  icon?: FileExtType;
  children: string;
};

export default function SidebarMenuFileLink({
  icon,
  children,
  href,
  ...rest
}: SidebarMenuFileLinkProps) {
  const menuIcon = useMenuIcons();
  const { query } = useRouter();
  return (
    <UnstyledLink
      href={href}
      className={clsxm(
        'flex w-full items-center gap-2 py-1 pl-5',
        'hover:bg-divider/30 focus:outline-none focus-visible:bg-divider/30',
        query.file === children.replace(/\.\w+/, '') &&
          'bg-divider/80 text-white hover:bg-divider/80 focus-visible:bg-divider/80'
      )}
      {...rest}
    >
      {icon && <div>{menuIcon[icon]}</div>}
      {children}
    </UnstyledLink>
  );
}
