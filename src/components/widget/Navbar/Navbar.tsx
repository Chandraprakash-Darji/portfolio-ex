import { createContext, FC, useEffect, useState } from 'react';
import { menuOptions, MobileMenu, NavItem, OpenMenuBtn } from '.';

interface OpenContextProps {
  openState: boolean;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenContext = createContext<OpenContextProps>({
  openState: false,
  setOpenState: () => {},
});

const Navbar: FC = () => {
  const [openState, setOpenState] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = openState ? 'hidden' : 'scroll';
  }, [openState]);

  return (
    <OpenContext.Provider value={{ openState, setOpenState }}>
      <header
        className="fixed top-0 left-0 z-[9995]  w-screen select-none backdrop-blur md:text-lg"
        style={{
          backgroundImage: `radial-gradient(
          rgba(0, 0, 0, 0) 1px,
          #010b28 1px
        )`,
          backgroundSize: '4px 4px',
        }}
      >
        <div
          className="layout relative z-50 mx-auto flex h-[95px] items-center justify-between px-3 sm:h-[127px]"
          id="navbar"
        >
          <div className="relative flex items-center justify-center font-RobotoCondensed text-[3rem] font-bold italic outline-none md:text-[5rem]">
            <a href="#" className="outline-none">
              CP
            </a>
          </div>
          <ul className=" hidden gap-4 sm:flex">
            {menuOptions.map(({ id, href, text }) => (
              <NavItem key={id} href={href} text={text} />
            ))}
          </ul>
          {/* <SmNav from={0} to={2} isLeft /> */}
          <OpenMenuBtn />
          {/* <SmNav from={2} to={4} /> */}
        </div>

        <MobileMenu />
      </header>
    </OpenContext.Provider>
  );
};

export default Navbar;
