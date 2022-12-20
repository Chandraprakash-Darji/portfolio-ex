import * as React from 'react';

import clsxm from '@/lib/clsxm';

type SidebarProps = React.ComponentPropsWithoutRef<'div'>;

export default function Sidebar({
  className,
  children,
  ...rest
}: SidebarProps) {
  return (
    <div className={clsxm('flex h-full w-full max-w-sm', className)} {...rest}>
      {children}
    </div>
  );
}
