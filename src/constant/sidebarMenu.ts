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
            href: '/about/personal-info/?file=basic.md',
          },
          {
            name: 'contact.md',
            icon: 'markdown',
            href: '/about/personal-info/?file=contact.md',
          },
        ],
      },
      {
        name: 'interset.md',
        icon: 'markdown',
        href: '/about/personal-info/?file=interset.md',
      },
      {
        name: 'education.md',
        icon: 'markdown',
        href: '/about/personal-info/?file=education.md',
      },
    ],
  },
};

export default sidebarMenu;
