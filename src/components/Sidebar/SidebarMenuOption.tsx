import { Disclosure, Transition } from '@headlessui/react';

import clsxm from '@/lib/clsxm';
import useMenuIcons from '@/lib/hooks/useMenuIcons';
import { FileExtType, FolderColorType } from '@/lib/types';

import SidebarMenuFileLink from '@/components/links/SidebarMenuFileLink';

import { ArrowIcon, FilledArrowIcon } from '@/Icons/sidebar/menu';

type menuType = {
  name: string;
  icon: FileExtType;
  href?: string;
  color?: FolderColorType;
  children: Array<menuType>;
};

type SidebarMenuOptionProps = {
  menu: menuType;
};

// get color class
function getColorClass(color: FolderColorType | undefined) {
  switch (color) {
    case 'purple':
      return 'text-purple';
    case 'orange':
      return 'text-orange';
    case 'green':
      return 'text-green';
    default:
      return 'text-content';
  }
}

export default function SidebarMenuOption({ menu }: SidebarMenuOptionProps) {
  const menuIcon = useMenuIcons();

  // Render File if object contains href
  if (menu.href) {
    return (
      <SidebarMenuFileLink href={menu.href} icon={menu.icon}>
        {menu.name}
      </SidebarMenuFileLink>
    );
  }

  // Render Main Heading if Icon not exits
  if (!menu.icon)
    return (
      <>
        <div className='flex w-full items-center gap-2 border-b border-divider px-3 py-2 text-white'>
          <div className='w-max shrink-0 -rotate-90'>
            <FilledArrowIcon />
          </div>
          {menu.name}
        </div>
        {/* Renders all File */}
        {menu.children.map((child, index) => {
          return <SidebarMenuOption menu={child} key={index} />;
        })}
      </>
    );

  // Render if it is Folder
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full items-center gap-2 px-3 py-1 pl-5 hover:bg-divider/30 focus:outline-none focus-visible:bg-divider/30'>
            {/* Arrow ahead of the Folder */}
            <div
              className={clsxm(
                'w-max shrink-0 transition-all duration-100',
                open && '-rotate-90'
              )}
            >
              <ArrowIcon />
            </div>
            {/* Folder Icons */}
            <div className={getColorClass(menu.color)}>
              {menuIcon[menu.icon]}
            </div>
            {/* Folder name */}
            {menu.name}
          </Disclosure.Button>

          {/* Files Under the Folder */}
          <Transition className='origin-top' show={open} {...transition}>
            <Disclosure.Panel className='pl-4'>
              {menu.children.map((child, index) => {
                return <SidebarMenuOption menu={child} key={index} />;
              })}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

const transition = {
  enter: 'transition duration-100 ease-out',
  enterFrom: 'transform scale-y-0 opacity-0',
  enterTo: 'transform scale-y-100 opacity-100',
  leave: 'transition duration-100 ease-out',
  leaveFrom: 'transform scale-y-100 opacity-100',
  leaveTo: 'transform scale-y-0 opacity-0',
};
