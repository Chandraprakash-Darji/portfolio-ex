import { menuType } from '@/lib/types';

const sidebarMenu: { personalInfo: menuType } = {
  personalInfo: {
    name: 'personal-info',
    icon: null,
    children: [
      {
        name: 'bio',
        icon: 'folder',
        color: 'orange',
        children: [
          {
            name: 'basic.md',
            icon: 'markdown',
            href: '/personal-info/?file=basic',
          },
          {
            name: 'contact.md',
            icon: 'markdown',
            href: '/personal-info/?file=contact',
          },
        ],
      },
      {
        name: 'interset.md',
        icon: 'markdown',
        href: '/personal-info/?file=interset',
        children: [],
      },
      {
        name: 'education.md',
        icon: 'markdown',
        href: '/personal-info/?file=education',
        children: [],
      },
    ],
  },
};

export default sidebarMenu;
