import { useRouter } from 'next/router';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import {
  HobbiesIcon,
  PersonalIcon,
  ProfesstionalIcon,
} from '@/Icons/sidebar/activity';

type AboutActivityProps = React.ComponentPropsWithoutRef<'div'>;

const Options = [
  {
    name: 'Presonal Info',
    icon: <PersonalIcon />,
    path: '/about/personal-info',
  },
  {
    name: 'Professional Info',
    icon: <ProfesstionalIcon />,
    path: '/about/professional-info',
  },
  {
    name: 'Hobbies',
    icon: <HobbiesIcon />,
    path: '/about/hobbies',
  },
];

export default function AboutActivity({
  className,
  ...rest
}: AboutActivityProps) {
  const router = useRouter();
  return (
    <div
      className={clsxm('w-14 shrink-0 border-r border-divider', className)}
      {...rest}
    >
      <div className='flex w-full flex-col'>
        {Options.map((option, index) => (
          <UnstyledLink
            href={option.path}
            key={index}
            className={clsxm(
              'aspect-square w-full',
              'grid place-content-center',
              'hover:text-white/50 focus-visible:text-white/50',
              router.asPath === option.path ? 'text-white' : 'text-content'
            )}
          >
            {option.icon}
          </UnstyledLink>
        ))}
      </div>
    </div>
  );
}
