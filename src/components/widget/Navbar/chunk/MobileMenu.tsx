import { FC, useContext } from 'react';
import { menuOptions, NavItem, OpenContext } from '..';

const MobileMenu: FC = () => {
  const { openState, setOpenState } = useContext(OpenContext);

  return (
    <>
      <nav
        className={`fixed left-1/2 z-[70] w-[calc(100%-3rem)] max-w-xs -translate-x-1/2 rounded-lg border border-white/30 bg-base-100/70 p-3 py-5 backdrop-blur transition-all duration-300 sm:hidden ${
          openState ? ' top-44' : '-top-[30rem]'
        }`}
      >
        <ul className=" mx-auto flex flex-col gap-6">
          {menuOptions.map(({ id, href, text }) => (
            <NavItem key={id} href={href} text={text} isLeft={true} />
          ))}
        </ul>
      </nav>
      <div
        className={`absolute z-[60] h-screen w-screen origin-top bg-gradient-to-br from-primary/10 to-base-100/10 backdrop-blur transition-all duration-200 sm:hidden ${
          openState
            ? 'visible scale-100 opacity-100'
            : 'invisible scale-0 opacity-0'
        }`}
        onClick={() => setOpenState(false)}
      ></div>
    </>
  );
};

export default MobileMenu;
