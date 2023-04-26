import { FC, useContext } from 'react';
import { NavItem, OpenContext, menuOptions } from '..';

const MobileMenu: FC = () => {
  const { openState, setOpenState } = useContext(OpenContext);

  return (
    <>
      <nav
        className={`fixed left-1/2 z-[101] w-full max-w-xs -translate-x-1/2 rounded-lg border border-white/30 bg-base-100/70 p-3 py-5 backdrop-blur-xl transition-all duration-300 sm:hidden ${
          openState ? ' top-44' : '-top-[30rem]'
        }`}
        style={{
          backgroundImage: `radial-gradient(
          rgba(0, 0, 0, 0) 1px,
          #010b28 1px
        )`,
          backgroundSize: '4px 4px',
        }}
      >
        <ul className=" mx-auto flex flex-col gap-6">
          {menuOptions.map(({ id, href, text }) => (
            <NavItem key={id} href={href} text={text} isLeft={true} />
          ))}
        </ul>
      </nav>
      <div
        className={`absolute z-[100] h-screen w-screen origin-top bg-gradient-to-b from-primary/20 via-base-100/80 to-base-100 backdrop-blur transition-all duration-200 sm:hidden ${
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
